import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { Contacts } from './entities/contacts.entity';
import { ContactsArea } from './entities/contactsArea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contacts, ContactsArea])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
