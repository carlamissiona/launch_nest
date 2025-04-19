import { Controller, ParseIntPipe, Param, Get, Put , Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from '../dtos/user.dto';

@Controller()
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get('get/:intnum')
    async getOne(@Param('intnum', ParseIntPipe) id: number): Promise<string> {
      return `Hi ${id}`; 
    }

    @Put('update/:id')
    async updateUser( @Param('id', ParseIntPipe) id: number, @Body() datauser_update: UserDTO,
    ) {
      await this.usersService.updateUser(id, datauser_update);
      return 'User updated successfully';
    }
}
