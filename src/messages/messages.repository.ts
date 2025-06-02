import { readFile, writeFile } from 'fs/promises';
import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';

export interface Message {
  id: string;
  content: string;
}

export interface MessagesData {
  [id: string]: Message;
}

@Injectable()
export class MessagesRepository {
  async findAll(): Promise<MessagesData> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages: MessagesData = JSON.parse(contents) as MessagesData;
    return messages;
  }

  async findOne(id: string): Promise<Message | undefined> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages: MessagesData = JSON.parse(contents) as MessagesData;
    return messages[id];
  }

  async createMessage(content: string): Promise<Message> {
    const contents = await readFile('messages.json', 'utf-8');
    const messages: MessagesData = JSON.parse(contents) as MessagesData;

    const id = randomUUID();
    const newMessage: Message = { id, content };

    messages[id] = newMessage;
    await writeFile('messages.json', JSON.stringify(messages, null, 2));

    return newMessage;
  }
}
