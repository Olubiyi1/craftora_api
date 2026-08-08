import authService from "./auth.service";
import UserService from "../user/user.service";
import { Role } from "../../generated/prisma";
import { generateToken, hashToken } from "../../helpers/token.helper";

// Mock prisma before importing prismaMock
jest.mock("../../config/prisma", () => {
  const { prismaMock } = require("../tests/mocks/prisma.mock");

  return {
    __esModule: true,
    default: prismaMock,
  };
});

import { prismaMock } from "../tests/mocks/prisma.mock";
import Guards from "../../guards/guards";

jest.mock("../user/user.service");
jest.mock("../../guards/guards");
jest.mock("../../helpers/token.helper");

describe("register", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const data = {
    firstName: "babajide",
    lastName: "olubiyi",
    email: "jide@gmail.com",
    password: "password1234",
  };

  const fakeUser = {
    id: "user-id1",
    firstName: "Babajide",
    lastName: "Olubiyi",
    email: "jide@gmail.com",
    password: "hashedPassword",
    role: Role.INSTRUCTOR,
    verifiedAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const fakeSafeUser = {
    id: "user-id1",
    firstName: "Babajide",
    lastName: "Olubiyi",
    email: "jide@gmail.com",
    role: Role.INSTRUCTOR,
    verifiedAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const fakeVerificationToken = "fakeToken";
  const fakeHashedToken = "fakeHashedToken";

  const fakeEmailVerificationToken = {
    id: "verification-id",
    tokenHash: fakeHashedToken,
    userId: fakeSafeUser.id,
    expiresAt: new Date(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should register a new user successfully", async () => {
    // Arrange
    (UserService.findUserByEmail as jest.Mock).mockResolvedValue(null);
    (UserService.createUser as jest.Mock).mockResolvedValue(fakeSafeUser);
    (generateToken as jest.Mock).mockReturnValue(fakeVerificationToken);
    (hashToken as jest.Mock).mockReturnValue(fakeHashedToken);
    (prismaMock.emailVerificationToken.create as jest.Mock).mockResolvedValue(
      fakeEmailVerificationToken,
    );

    // Act
    const result = await authService.register(data);

    // Assert
    expect(result).toEqual(fakeSafeUser);
    expect(UserService.findUserByEmail).toHaveBeenCalledWith(data.email);
    expect(UserService.createUser).toHaveBeenCalledWith(data);
    expect(generateToken).toHaveBeenCalled();
    expect(hashToken).toHaveBeenCalledWith(fakeVerificationToken);

    expect(prismaMock.emailVerificationToken.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        tokenHash: fakeHashedToken,
        userId: fakeSafeUser.id,
        expiresAt: expect.any(Date),
      }),
    });
  });

  it("should throw error if email already exists", async () => {
    // Arrange
    (UserService.findUserByEmail as jest.Mock).mockResolvedValue(fakeUser);

    // Act & Assert
    await expect(authService.register(data)).rejects.toThrow(
      "Email already exists",
    );

    expect(UserService.findUserByEmail).toHaveBeenCalledWith(data.email);
    expect(UserService.createUser).not.toHaveBeenCalled();
    expect(generateToken).not.toHaveBeenCalled();
    expect(hashToken).not.toHaveBeenCalled();
    expect(prismaMock.emailVerificationToken.create).not.toHaveBeenCalled();
  });
});

describe("login", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const data = {
    email: "jide@gmail.com",
    password: "34567uhkm",
  };
  const fakeUser = {
    id: "1234td",
    firstName: "Babajide",
    lastName: "Olubiyi",
    email: "biyi@gmail.com",
    password: "hashedPassword",
    role: Role.INSTRUCTOR,
    verifiedAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const fakeSafeUser = {
    id: "1234td",
    firstName: "Babajide",
    lastName: "Olubiyi",
    email: "biyi@gmail.com",
    role: Role.INSTRUCTOR,
    verifiedAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const fakePayload = {
    id: fakeUser.id,
    email: fakeUser.email,
    role: fakeUser.role,
  };

  const fakeAccessToken = "1234ty5ef";
  const fakeExisitingToken = "345tfdfg";
  const hashedRefreshToken = "12345fdfg";

  const fakeRefreshToken = {
    refreshToken: "3454w54edfg",
    hashedRefreshToken: "12345fdfg",
  };

  const fakeResetToken = "1234tgfdf"
  const fakeHashToken = "2345tfcv"

  it("should successfully login user", async () => {
    // happy path
    (UserService.findUserByEmail as jest.Mock).mockResolvedValue(fakeUser);
    (Guards.comparePassword as jest.Mock).mockReturnValue(true);
    (Guards.createAccessToken as jest.Mock).mockReturnValue(fakeAccessToken);
    (Guards.createRefreshToken as jest.Mock).mockReturnValue(fakeRefreshToken);
    (prismaMock.refreshToken.findUnique as jest.Mock).mockResolvedValue(
      fakeExisitingToken,
    );
    (prismaMock.refreshToken.update as jest.Mock).mockResolvedValue(
      fakeExisitingToken,
    );
    // (prismaMock.refreshToken.create as jest.Mock).mockResolvedValue(null)

    const result = await authService.login(data);

    // assert
    expect(result).toEqual({
      user: fakeSafeUser,
      tokens: {
        accessToken: fakeAccessToken,
        refreshToken: fakeRefreshToken.refreshToken,
      },
    });
    expect(UserService.findUserByEmail).toHaveBeenCalledWith(data.email);
    expect(Guards.comparePassword).toHaveBeenCalledWith(
      data.password,
      fakeUser.password,
    );
    expect(Guards.createAccessToken).toHaveBeenCalledWith(fakePayload);
    expect(Guards.createRefreshToken).toHaveBeenCalledWith(fakePayload);
    expect(prismaMock.refreshToken.findUnique).toHaveBeenCalledWith({
      where: {
        userId: fakeUser.id,
      },
    });
    expect(prismaMock.refreshToken.update).toHaveBeenCalledWith({
      where: { userId: fakeUser.id },
      data: {
        tokenHash: hashedRefreshToken,
        expiresAt: expect.any(Date),
      },
    });
    expect(prismaMock.refreshToken.create).not.toHaveBeenCalled();
  });

  // reject invalid email
  it("should reject login with wrong email", async () => {
    (UserService.findUserByEmail as jest.Mock).mockResolvedValue(null);

    await expect(authService.login(data)).rejects.toThrow(
      "Invalid email or password",
    );

    expect(UserService.findUserByEmail).toHaveBeenCalledWith(data.email);
    expect(Guards.comparePassword).not.toHaveBeenCalled();
    expect(Guards.createAccessToken).not.toHaveBeenCalled();
    expect(Guards.createRefreshToken).not.toHaveBeenCalled();
    expect(prismaMock.refreshToken.findUnique).not.toHaveBeenCalled();
    expect(prismaMock.refreshToken.update).not.toHaveBeenCalled();
    expect(prismaMock.refreshToken.create).not.toHaveBeenCalled();
  });

  // reject wrong password
  it("should reject login for invalid password",async()=>{
    (UserService.findUserByEmail as jest.Mock).mockResolvedValue(fakeUser);
    (Guards.comparePassword as jest.Mock).mockResolvedValue(false)

    await expect(authService.login(data)).rejects.toThrow("Invalid email or password")

    expect(UserService.findUserByEmail).toHaveBeenCalledWith(data.email)
    expect(Guards.comparePassword).toHaveBeenCalledWith(data.password,fakeUser.password)
    expect(Guards.createAccessToken).not.toHaveBeenCalled()
    expect(Guards.createRefreshToken).not.toHaveBeenCalled()
    expect(prismaMock.refreshToken.findUnique).not.toHaveBeenCalled()
    expect(prismaMock.refreshToken.update).not.toHaveBeenCalled()
    expect(prismaMock.refreshToken.create).not.toHaveBeenCalled()
  })

  // forgot password
  it("should send password reset token",async()=>{
    (UserService.findUserByEmail as jest.Mock).mockResolvedValue(fakeUser);
    (generateToken as jest.Mock).mockReturnValue(fakeResetToken);
    (hashToken as jest.Mock).mockReturnValue(fakeHashToken);
    (prismaMock.passwordResetToken.deleteMany as jest.Mock).mockResolvedValue(fakeUser);
    (prismaMock.passwordResetToken.create as jest.Mock).mockResolvedValue(undefined)

    await authService.forgotPassword(data.email)
    expect(UserService.findUserByEmail).toHaveBeenCalledWith(data.email)
    expect(generateToken).toHaveBeenCalledWith()
    expect(hashToken).toHaveBeenCalledWith(fakeResetToken)
    expect(prismaMock.passwordResetToken.deleteMany).toHaveBeenCalledWith({
      where:{userId:fakeUser.id}
    })
    expect(prismaMock.passwordResetToken.create).toHaveBeenCalledWith({
      data:{
        tokenHash:fakeHashToken,
        userId:fakeUser.id,
        expiresAt:expect.any(Date)
      }
    })
  })
});
