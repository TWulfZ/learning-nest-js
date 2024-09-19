import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller({ path: '/tasks' })
@ApiTags('tasks')
export class TasksController {
  taskService: TasksService;
  constructor(tasksService: TasksService) {
    this.taskService = tasksService;
  }

  @Get()
  @ApiOperation({ summary: 'Obtiene todas las tareas' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Tareas encontradas' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'No autorizado' })
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.taskService.getTasks();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Obtiene una tarea por id' })
  getTask(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.taskService.getTask(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea una nueva tarea' })
  createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }

  @Put()
  @ApiOperation({ summary: 'Actualiza una tarea' })
  updateTask(@Body() task: UpdateTaskDto) {
    return this.taskService.updateTask(task);
  }

  @Delete()
  @ApiOperation({ summary: 'Elimina una tarea' })
  deleteTask() {
    return this.taskService.deleteTask();
  }

  @Patch()
  @ApiOperation({ summary: 'Actualiza el estado de una tarea' })
  updateTaskStatus() {
    return this.taskService.updateTaskStatus();
  }
}
