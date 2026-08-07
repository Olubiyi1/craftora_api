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

jest.mock("../user/user.service");
jest.mock("../../guards/guards");
jest.mock("../../helpers/token.helper");

describe("register", () => {
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