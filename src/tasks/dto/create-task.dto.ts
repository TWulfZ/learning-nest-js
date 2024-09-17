import { IsString, MinLength } from "class-validator";

export class CreateTaskDto {
  @IsString()
  @MinLength(1, { message: 'El título debe tener al menos 1 caracter' })
  title: string;
  @IsString()
  @MinLength(1, { message: 'La descripción debe tener al menos 1 caracter' })
  description: string;
}