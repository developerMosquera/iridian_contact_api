import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ContactsArea } from './contactsArea.entity';

@Entity()
export class Contacts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  nombre: string;

  @Column({ length: 30 })
  apellido: string;

  @Column({ length: 100 })
  correo: string;

  @Column({ length: 20 })
  celular: string;

  @Column({ length: 800 })
  mensaje: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  fechaEnvio: Date;

  @ManyToOne(() => ContactsArea, (contactArea) => contactArea.contact)
  @JoinColumn({ name: 'contact_area_id' })
  contactArea: ContactsArea;
}
