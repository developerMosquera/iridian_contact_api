import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contacts } from './entities/contacts.entity';
import { ContactsArea } from './entities/contactsArea.entity';
import { IPost } from './interfaces/post.interface';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contacts)
    private readonly contactsRepository: Repository<Contacts>,
    @InjectRepository(ContactsArea)
    private readonly contactsAreaRepository: Repository<ContactsArea>,
  ) {}

  getContactsArea() {
    return this.contactsAreaRepository.find();
  }

  async postContact(
    body: IPost,
  ): Promise<{ status: boolean; message: string }> {
    const contactAreaId = await this.contactsAreaRepository.findOne({
      where: { id: body.contact_area_id },
    });

    const contactCreate = this.contactsRepository.create({
      nombre: body.nombre,
      apellido: body.apellido,
      correo: body.correo,
      celular: body.celular,
      mensaje: body.mensaje,
      contactArea: contactAreaId,
    });

    await this.contactsRepository.save(contactCreate);

    return { status: true, message: 'Mensaje enviado correctamente' };
  }
}
