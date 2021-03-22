import { StudentsController } from './students/students.controller';
import { ClassesController } from './classes/classes.controller'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    StudentsController, ClassesController, AppController
  ],
  providers: [AppService],
})
export class AppModule { }
