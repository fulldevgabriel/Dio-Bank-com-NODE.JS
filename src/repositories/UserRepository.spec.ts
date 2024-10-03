import { EntityManager } from "typeorm"
import { getMockEntityManager } from "../__Mocks__/mockEntityManager.mock"
import { User } from "../entities/User"
import { UserRepository } from "./UserRepository"

describe("UserRespository", () => {

    let userRepository: UserRepository
    let managerMock: Partial<EntityManager>

    const mockUser: User = {
        user_id: "123456",
        name: "Teste User",
        email: "Teste@dio.com",
        password: "password"

    }

    beforeAll(async() => {
        managerMock = await getMockEntityManager({})
        userRepository = new UserRepository(managerMock as EntityManager)
    })
    it("Deve cadastrar um novo usuario no banco de dados", async() => {
        await userRepository.createUser(mockUser)
        expect(managerMock.save).toHaveBeenCalled()
    })
})