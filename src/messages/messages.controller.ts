import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMessages() {}

  @Post()
  createMessage(@Body() data: CreateMessageDto) {
    console.log(data);
  }

  @Get(':id')
  getMessageById(@Param('id') id: string) {
    console.log(id);
  }
}
