import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>
  ) {

  }

  async create(createTodoDto: CreateTodoDto) {

    let todo = await this.todoRepository.create({ ...createTodoDto, status: 0 })
    return await this.todoRepository.save(todo);
  }

  async findAll() {
    return await this.todoRepository.find({ order: { dueDate: 'ASC' } });
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.todoRepository.update(id, updateTodoDto);
  }

  async remove(id: number) {
    return await this.todoRepository.delete(id);
  }
}
