import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CoursesModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
