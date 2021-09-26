import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Candidates } from './entities/candidates';
import { Voter } from './entities/voter';
import { VotesService } from './service';

@Controller('/votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Get('/total')
  getTotalVotes(): Promise<number> {
    return this.votesService.getAllVotes();
  }

  @Get('/candidates')
  getCandidates(): Promise<Candidates[]> {
    return this.votesService.getCandidates();
  }

  @HttpCode(201)
  @Post('/candidates')
  addCandidate(@Body() candidate: Candidates): Promise<Candidates> {
    return this.votesService.addCandidate(candidate);
  }

  @HttpCode(204)
  @Patch('/candidates/:id')
  updateCandidate(
    @Param('id') id: number,
    @Body() candidate: Candidates,
  ): Promise<Candidates> {
    return this.votesService.updateCandidate(id, candidate);
  }

  @HttpCode(202)
  @Delete('/candidates/:id')
  deleteCandidate(@Param('id') id: number): Promise<Candidates> {
    return this.votesService.deleteCandidate(id);
  }

  @HttpCode(201)
  @Patch('/candidates/:id/vote')
  addVote(@Param('id') id: number, @Body() voter: Voter): Promise<Voter> {
    return this.votesService.vote(id, voter);
  }
}
