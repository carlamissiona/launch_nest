import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//postgresql://admin:LLrt8IY9PRuiQ1JV9t5RiHm3GQ1GBjqm@dpg-d00l2bodl3ps73e4818g-a.singapore-postgres.render.com/portfolio_r1jw

//postgresql://admin:LLrt8IY9PRuiQ1JV9t5RiHm3GQ1GBjqm@dpg-d00l2bodl3ps73e4818g-a/portfolio_r1jw   << internal

