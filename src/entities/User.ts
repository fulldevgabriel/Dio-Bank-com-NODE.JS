import { Column, Entity, PrimaryColumn } from "typeorm";
import { randomUUID } from "crypto";

@Entity('User') // Nome da tabela
export class User {
    constructor(
        name: string,
        email: string,
        password: string
    ){
        this.user_id = randomUUID();
        this.name = name;
        this.email = email;
        this.password = password;
    }

    @PrimaryColumn()
    user_id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;
}
