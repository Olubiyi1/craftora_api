export const prismaMock={
    emailVerificationToken:{
        create:jest.fn()
    },
   refreshToken:{
    findUnique:jest.fn(),
    update:jest.fn(),
    create:jest.fn()
   },
   passwordResetToken:{
    deleteMany:jest.fn(),
    create:jest.fn()
   }
}