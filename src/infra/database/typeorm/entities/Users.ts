import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('users')
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column('varchar')
    public name: string;
    
    @Column('varchar')
    public email: string;
    
    @Column('varchar')
    public avatar_url: string;
    
    @Column('varchar')
    public password: string;

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;
}