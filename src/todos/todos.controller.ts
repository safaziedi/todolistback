import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosService } from './todos.service';
@ApiTags('To Do List')
@Controller('/todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  // CRUD
  @Post()
  create(@Body() todo: CreateTodoDto) {
    return this.todosService.create(todo);
  }

  @Get()
  getAll() {
    return this.todosService.getAll();
  }

  @Patch()
  update(@Body() todo: UpdateTodoDto) {
    return this.todosService.update(todo);
  } 

  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log('iciii');
    
    return this.todosService.delete(id);
  }
}
