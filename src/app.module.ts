import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './entities/user';
import { Profile } from './entities/profile';
//postgresql://admin:LLrt8IY9PRuiQ1JV9t5RiHm3GQ1GBjqm@dpg-d00l2bodl3ps73e4818g-a.singapore-postgres.render.com/portfolio_r1jw
//postgresql://admin:LLrt8IY9PRuiQ1JV9t5RiHm3GQ1GBjqm@dpg-d00l2bodl3ps73e4818g-a/portfolio_r1jw   << internal


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-d00l2bodl3ps73e4818g-a', 
      username: 'admin',
      password: 'LLrt8IY9PRuiQ1JV9t5RiHm3GQ1GBjqm',
      database: 'portfolio_r1jw',
      entities: [User, Profile],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
