import { UserServices } from "../services/UserServices";
import { UserController } from "./UserController"
import { makeMockRequest } from "../__Mocks__/mockRequest.mock";
import { makeMockResponse } from "../__Mocks__/mockResponse.mock";


const mockUserServices = {
    createUser: jest.fn()
}


jest.mock('../services/UserServices', () => {
    return {
        UserServices: jest.fn().mockImplementation(() => {
            return mockUserServices
        })
    }
})

describe("UserController", () => {
    const mockUserServices: Partial<UserServices> = {
        createUser: jest.fn()
    };

    const userController = new UserController();
    const mockResponse = makeMockResponse()


    
    it("Deve adicionar um usuario", () => {
        const mockRequest = {
            body: {
                name: 'gabriel',
                email: 'gabriel@dio.com',
                password: '12345'
            }
        }
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
    })

})