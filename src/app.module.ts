import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PhonesModule } from './phones/phones.module';

@Module({  
    imports:
     [TypeOrmModule.forRoot(),  
      UsersModule, PhonesModule],
    providers: [AppService],   
    controllers: [AppController],
  })

export class AppModule {}
