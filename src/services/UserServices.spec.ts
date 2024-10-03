import { UserServices } from "./UserServices";

jest.mock('../repositories/UserRepository')
jest.mock('../database', () => {
    intialize: jest.fn()
})

const mockUserRepository = require('../repositories/UserRepository')

describe('UserService', () => {
    const userService = new UserServices(mockUserRepository)

    it('Deve adicionar um novo usuário', async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            user_id: '123',
            name: 'gabriel',
            email: 'gabriel@dio.com',
            password: '123456'
        }))
        const response = await userService.createUser('gabriel', 'gabriel@test.com', '12345');
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject({
            user_id: '123',
            name: 'gabriel',
            email: 'gabriel@dio.com',
            password: '123456'
        })
    })
})