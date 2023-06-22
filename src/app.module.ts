import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql12.freemysqlhosting.net',
      port: 3306,
      username: 'sql12627917',
      password: 'AurLywRQbf',
      database: 'sql12627917',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
