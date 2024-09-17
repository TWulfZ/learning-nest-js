import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto';

@Injectable()
export class TasksService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find(task => task.id === id);

    if(!taskFound) {
      return new NotFoundException(`La tarea con el id ${id} no existe`);
    }
    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      id: this.tasks.length + 1,
      ...task,
    });
    return task;  
  }

  updateTask(task: UpdateTaskDto) {
    return 'Actualizando tarea';
  }

  deleteTask() {
    return 'Eliminando tarea';
  }

  updateTaskStatus() {
    return 'Actualizando estado de tarea';
  }
}
