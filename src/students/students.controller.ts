import { 
    Controller, 
    Get, Req,Res,
    Request,
    HttpStatus,
    Param
} from '@nestjs/common';
import {Response} from 'express'
import {StudentsService} from './students.service'


@Controller("students")
export class StudentsController {
    constructor(private students: StudentsService){}
    @Get("")
    getAll(@Res() res:Response): Response{
        return res.status(HttpStatus.OK).send(this.students.getAll())
    }

    @Get("/:id")
    getById(@Param() params: object,@Res() res:Response): Response{
        let student = this.students.getAll().find(student=> (student._id==params["id"]));
        if(!student) return res.status(HttpStatus.NOT_FOUND).send({message: "STUDENT NOT FOUND"});
        return res.status(HttpStatus.OK).send({success: true, student})
    }
}
