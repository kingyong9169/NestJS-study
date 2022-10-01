import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller('cats')
export class AppController {
  // 디펜던시 인젝션(의존성 주입)
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {} // 공급자를 소비하는 패턴

  @Get('hello/:id/:name') // 데코레이터 패턴: 함수에 기능 첨가 -> 재사용성 증가, @Get('/')랑 같음
  getHello(): string {
    return this.appService.getHello();
  }
}
