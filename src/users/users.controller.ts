import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReturnStudentDto } from 'src/users/dto/students.dto';
import { Student } from '@prisma/client'

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get("students")
    @ApiOperation({
        summary: 'get all students',
        description: 'returns a list of all students in the system'
    })
    @ApiResponse({
        status: 200,
        description: 'list of all students retrieved successfully',
        type: [ReturnStudentDto]
    })

    async findallStudents(): Promise<Student[]> {
        return await this.userService.findAllStudents();
    }
}
