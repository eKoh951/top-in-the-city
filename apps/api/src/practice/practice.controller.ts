/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common'

@Controller('practice')
export class PracticeController {
  @Get()
  hello() {
    return 'hello practice'
  }
}
