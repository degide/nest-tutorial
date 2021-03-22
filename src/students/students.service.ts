import { Injectable } from '@nestjs/common';
import { Student } from './student'
import {students} from '../db/db.json'

@Injectable()
export class StudentsService { 
    private students: Student[] = students

    getAll(): Student[] {
        return this.students;
    }
    
}
