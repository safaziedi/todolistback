import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema} from './todo.model';
import { TodosController} from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports :[
    MongooseModule.forFeature([
      {
        name :'Todo' ,
        schema : TodoSchema ,
      }]
    ),HttpModule
  ],
  controllers: [TodosController],
  providers: [TodosService],
  exports:[TodosService]
})
export class TodosModule {}
