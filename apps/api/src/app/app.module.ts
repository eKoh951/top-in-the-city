import { PracticeController } from './../practice/practice.controller'
import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [],
  controllers: [PracticeController, AppController],
  providers: [AppService],
})
export class AppModule {}
