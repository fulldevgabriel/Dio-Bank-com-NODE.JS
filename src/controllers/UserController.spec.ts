import { UserServices } from "../services/UserServices";
import { UserController } from "./UserController"
import { makeMockRequest } from "../__Mocks__/mockRequest.mock";
import { makeMockResponse } from "../__Mocks__/mockResponse.mock";

describe("UserController", () => {
    const mockUserServices: Partial<UserServices> = {};

    const userController = new UserController(mockUserServices as UserServices);


    
    it("Deve adicionar um usuario", () => {
        const mockRequest = makeMockRequest({});
        const mockResponse = makeMockResponse();
        const response = userController.createUser(mockRequest, mockResponse);
        console.log(response)
    })

})