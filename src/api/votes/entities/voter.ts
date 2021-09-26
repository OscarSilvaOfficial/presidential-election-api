import { BaseRepository } from '../../../repository/base';
import { PrismaClient } from '@prisma/client';

export class Voter extends BaseRepository {
  private id: number;
  private voter_registration_card: string;

  constructor(
    voter_registration_card?: string,
    prismaClient = new PrismaClient(),
  ) {
    super(prismaClient.voter);
    this.voter_registration_card = voter_registration_card;
  }

  get getId(): number {
    return this.id;
  }

  get voterRegistrationCard(): string {
    return this.voter_registration_card;
  }

  set voterRegistrationCard(voter_registration_card: string) {
    this.voter_registration_card = voter_registration_card;
  }
}
