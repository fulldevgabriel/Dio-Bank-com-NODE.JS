import { User, UserServices } from "./UserServices";

describe('UserService', () => {
    const mockDb: User[] = []
    const userService = new UserServices(mockDb);

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('nath', 'nath@test.com');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
    })
})