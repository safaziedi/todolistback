import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto  {

    @ApiProperty()
    description: string;

    @ApiProperty()
    day: string;

    @ApiProperty()
    reminder: boolean;
}

