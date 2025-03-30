import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('string')
    name: string;
    
    @Column('string')
    email: string;
    
    @Column('string')
    avatar_url: string;
    
    @Column('string')
    password: string;

    @Column('string')
    created_at: string;

    @Column('string')
    updated_at: string;
}