import { BaseRepository } from '../../../repository/base';
import { PrismaClient } from '@prisma/client';

export class Candidates extends BaseRepository {
  private _id: number;
  private _name: string;
  private _votes: string;

  constructor(
    name?: string,
    votes?: string,
    prismaClient = new PrismaClient(),
  ) {
    super(prismaClient.candidate);
    this._name = name;
    this._votes = votes;
  }

  get name(): string {
    return this._name;
  }

  get votes(): string {
    return this._votes;
  }

  set setName(name: string) {
    this._name = name;
  }

  set setVotes(votes: string) {
    this._votes = votes;
  }
}
