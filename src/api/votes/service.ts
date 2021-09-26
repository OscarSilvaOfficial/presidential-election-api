import { Injectable } from '@nestjs/common';
import { Candidates } from './entities/candidates';
import { Voter } from './entities/voter';

@Injectable()
export class VotesService {
  private cadidates = new Candidates();
  private voters = new Voter();

  async getAllVotes(): Promise<number> {
    const candidates = await this.cadidates.all();
    const votes = candidates.map((candidate: Candidates) => candidate.votes);
    return votes.reduce((a: number, b: number) => a + b);
  }

  async vote(candidateId: number, voter: Voter): Promise<Voter> {
    const candidate = await this.cadidates.findOne(candidateId);
    candidate.votes++;
    return await this.voters.add(voter);
  }

  async getCandidates(): Promise<Candidates[]> {
    return await this.cadidates.all();
  }

  async addCandidate(candidate: Candidates): Promise<Candidates> {
    return await this.cadidates.add(candidate);
  }

  async updateCandidate(
    id: number,
    candidate: Candidates,
  ): Promise<Candidates> {
    return await this.cadidates.update(id, candidate);
  }

  async deleteCandidate(id: number): Promise<Candidates> {
    return await this.cadidates.delete(id);
  }
}
