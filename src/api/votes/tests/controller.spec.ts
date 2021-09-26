import { VotesController } from '../controller';
import { VotesService } from '../service';

describe('Votes Controller', () => {
  let controller: VotesController;
  let service: VotesService;

  beforeEach(() => {
    service = new VotesService();
    controller = new VotesController(service);
  });

  describe('Get total votes', () => {
    it('Access /api/votes endpoint and get total votes', async () => {
      jest.spyOn(service, 'getAllVotes').mockImplementation(async () => 10);
      expect(await controller.getTotalVotes()).toBe(10);
    });
  });
});
