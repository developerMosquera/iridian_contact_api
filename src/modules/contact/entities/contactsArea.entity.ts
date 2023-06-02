import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Contacts } from './contacts.entity';

@Entity()
export class ContactsArea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nombre: string;

  @OneToMany(() => Contacts, (contact) => contact.contactArea)
  contact: Contacts;
}
