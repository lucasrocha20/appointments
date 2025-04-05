import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Users {
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

    @Column({
        type: 'varchar',
        default: ''
    })
    public created_at: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    public updated_at: string;
}