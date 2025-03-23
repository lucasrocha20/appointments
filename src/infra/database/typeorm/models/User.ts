import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @Column()
    avatar_url: string;
    
    @Column()
    password?: string | null;

    @Column()
    created_at: string;

    @Column()
    updated_at: string;
}