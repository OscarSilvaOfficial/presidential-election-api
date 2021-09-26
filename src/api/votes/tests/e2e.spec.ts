import { VotesController } from '../controller';
import { Candidates } from '../entities/candidates';
import { VotesService } from '../service';

describe('Votes Controller', () => {
  let controller: VotesController;
  let service: VotesService;

  beforeEach(() => {
    service = new VotesService();
    controller = new VotesController(service);
  });

  describe('Get total votes', () => {
    it('Access /api/votes', async () => {
      jest.spyOn(service, 'getAllVotes').mockImplementation(async () => 10);
      expect(await controller.getTotalVotes()).toBe(10);
    });

    it('Access /api/candidates', async () => {
      const candidates: Candidates[] = [
        new Candidates('João', 4),
        new Candidates('Maria', 2),
      ];
      jest
        .spyOn(service, 'getCandidates')
        .mockImplementation(async () => candidates);
      expect(await controller.getCandidates()).toBe(candidates);
    });
  });
});
