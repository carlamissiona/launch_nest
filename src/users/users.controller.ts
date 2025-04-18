import { Controller, ParseIntPipe, Param, Get } from '@nestjs/common';

@Controller()
export class UsersController {

    @Get('get/:intnum')
    async getOne(@Param('intnum', ParseIntPipe) id: number): Promise<string> {
      return `Hi`; 
    }
}
