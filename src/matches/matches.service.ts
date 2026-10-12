import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from '../database/entities/match.entity';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match)
    private readonly matches: Repository<Match>,
  ) {}

  async findAll() {
    const matches = await this.matches.find({ order: { date: 'ASC' } });
    return matches.map((match) => ({
      id: match.id,
      home_team_id: match.homeTeamId,
      away_team_id: match.awayTeamId,
      date: match.date,
      status: match.status,
      week: match.week,
      home_score: match.homeScore,
      away_score: match.awayScore,
      goals: match.goals,
      is_best: match.isBest,
    }));
  }
}
