import { Player, RsvpEntry } from '../models/player.interface';
import { Logger } from './logger';

export class RsvpService {
  private rsvpEntries: RsvpEntry[] = [];

  constructor(private logger: Logger) {}

  public addOrUpdateRsvp(player: Player, status: 'Yes' | 'No' | 'Maybe'): void {
    const existingRsvp = this.rsvpEntries.find(entry => entry.player.id === player.id);
    if (existingRsvp) {
      existingRsvp.status = status;
    } else {
      this.rsvpEntries.push({ player, status });
    }
    this.logger.log(`RSVP for player ${player.name} updated to ${status}`);
  }

  public getConfirmedAttendees(): Player[] {
    return this.rsvpEntries.filter(entry => entry.status === 'Yes').map(entry => entry.player);
  }

  public countResponses(): { total: number; confirmed: number; declined: number } {
    const total = this.rsvpEntries.length;
    const confirmed = this.rsvpEntries.filter(entry => entry.status === 'Yes').length;
    const declined = this.rsvpEntries.filter(entry => entry.status === 'No').length;
    return { total, confirmed, declined };
  }
}
