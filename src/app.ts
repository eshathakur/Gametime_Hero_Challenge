import { RsvpService } from './services/rsvp.service';
import { Logger } from './services/logger';
import { Player } from './models/player.interface';

const logger = new Logger();
const rsvpService = new RsvpService(logger);

const player1: Player = { id: '1', name: 'Alice' };
const player2: Player = { id: '2', name: 'Bob' };

rsvpService.addOrUpdateRsvp(player1, 'Yes');
rsvpService.addOrUpdateRsvp(player2, 'No');

console.log('Confirmed Attendees:', rsvpService.getConfirmedAttendees());
console.log('Response Count:', rsvpService.countResponses());
