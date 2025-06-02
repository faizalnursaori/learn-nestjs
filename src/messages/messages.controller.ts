import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  getAllMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() data: CreateMessageDto) {
    // console.log(data);
    return this.messagesService.create(data.content);
  }

  @Get(':id')
  async getMessageById(@Param('id') id: string) {
    // console.log(id);
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found!');
    }
    return message;
  }
}
