import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hiCats() {
    return 'hi cats';
  }
}
