import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    @IsNotEmpty()
    status: number;
}
