import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { PostDto } from './dto/post.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('area')
  getContactsArea() {
    return this.contactService.getContactsArea();
  }

  @Post()
  postContact(
    @Body() body: PostDto,
  ): Promise<{ status: boolean; message: string }> {
    return this.contactService.postContact(body);
  }
}
