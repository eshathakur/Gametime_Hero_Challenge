import { RsvpService } from '../services/rsvp.service';
import { Logger } from '../services/logger'; 
import { Player } from '../models/player.interface';

describe('RsvpService', () => {
  let rsvpService: RsvpService;
  let logger: Logger;

  beforeEach(() => {
    logger = new Logger();
    rsvpService = new RsvpService(logger);
  });

  it('should add and update RSVP', () => {
    const player: Player = { id: '1', name: 'Alice' };
    rsvpService.addOrUpdateRsvp(player, 'Yes');
    expect(rsvpService.countResponses().confirmed).toBe(1);

    rsvpService.addOrUpdateRsvp(player, 'No');
    expect(rsvpService.countResponses().declined).toBe(1);
  });

  it('should return confirmed attendees', () => {
    const player1: Player = { id: '1', name: 'Alice' };
    const player2: Player = { id: '2', name: 'Bob' };

    rsvpService.addOrUpdateRsvp(player1, 'Yes');
    rsvpService.addOrUpdateRsvp(player2, 'No');

    const confirmed = rsvpService.getConfirmedAttendees();
    expect(confirmed.length).toBe(1);
    expect(confirmed[0].name).toBe('Alice');
  });
});
