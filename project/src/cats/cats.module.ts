import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // export를 하지 않으면 서비스를 App에서 사용하지 못함 -> 모듈을 기본적으로 캡슐화하기 때문
})
export class CatsModule {}
