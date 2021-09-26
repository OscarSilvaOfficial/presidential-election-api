import { Module } from '@nestjs/common';
import { VotesController } from './api/votes/controller';
import { VotesService } from './api/votes/service';

@Module({
  imports: [],
  controllers: [VotesController],
  providers: [VotesService],
})
export class AppModule {}
