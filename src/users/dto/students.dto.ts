import { ApiProperty } from '@nestjs/swagger';
import { Student } from '@prisma/client';

export class ReturnStudentDto implements Partial<Student> {
    @ApiProperty({
        description:'unique identifier for the student',
        example: '123abd'
    })
    studentId: string;

    @ApiProperty({
        description: 'name of the student',
        example: 'Example Name'
    })
    name: string;

    @ApiProperty({
        description: 'department the students belongs to',
        example: 'computer science'
    })
    department: string;
    
    @ApiProperty({
        description: 'email of the student',
        example: 'example@email.com'
    })
    email: string;

    @ApiProperty({
        description: 'role of the student',
        example: 'student'
    })
    role: string;
}