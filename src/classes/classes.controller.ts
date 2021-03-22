import {
    Controller, Get, Res,
    HttpStatus
} from '@nestjs/common'
import {Response} from 'express'

import {students,classes} from '../db/db.json'

@Controller("classes")
export class ClassesController {
    @Get("")
    getAllClasses(@Res() res:Response): Response{
        return res.status(HttpStatus.OK).send(classes)
    }
}