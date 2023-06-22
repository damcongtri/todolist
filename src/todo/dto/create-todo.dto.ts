import { IsDate, IsEmpty, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    description: string;
    @IsNotEmpty()
    dueDate: Date;
    @IsNotEmpty()
    @IsString()
    priority: string;


}