import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMessages() {}

  @Post()
  createMessage() {}

  @Get(':id')
  getMessageById() {}
}
