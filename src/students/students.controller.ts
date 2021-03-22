import { 
    Controller, 
    Get, Req,Res,
    Request,
    HttpStatus,
    Param
} from '@nestjs/common';
import {Response} from 'express'

import {students, classes} from '../db/db.json'

@Controller("students")
export class StudentsController {

    @Get("")
    getAll(@Res() res:Response): Response{
        return res.status(HttpStatus.OK).send(students)
    }

    @Get("/:id")
    getById(@Param() params: object,@Res() res:Response): Response{
        let student = students.find(student=> (student._id==params["id"]));
        if(!student) return res.status(HttpStatus.NOT_FOUND).send({message: "STUDENT NOT FOUND"});
        return res.status(HttpStatus.OK).send({success: true, student})
    }
}
