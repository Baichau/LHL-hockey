import { Injectable, Optional } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../database/entities/team.entity';
import { readDemoData } from '../demo-data';

export interface TeamResponse extends Omit<Team, 'roster'> {
  players: number;
  roster: Array<{
    id: number;
    name: string;
    number: number;
    position: string;
    age: number;
    nationality: string;
    goals: number;
    assists: number;
    pim: number;
    avatar_color: string;
  }>;
}

@Injectable()
export class TeamsService {
  constructor(
    @Optional()
    @InjectRepository(Team)
    private readonly teams?: Repository<Team>,
  ) {}

  async findAll() {
    if (!this.teams) return readDemoData<TeamResponse[]>('teams.json');

    const teams = await this.teams.find({
      relations: { roster: true },
      order: { position: 'ASC', id: 'ASC' },
    });

    return teams.map((team) => ({
      id: team.id,
      slug: team.slug,
      name: team.name,
      city: team.city,
      colors: team.colors,
      yearFounded: team.yearFounded,
      coach: team.coach,
      players: team.roster.length,
      position: team.position,
      points: team.points,
      wins: team.wins,
      losses: team.losses,
      otl: team.otl,
      gf: team.gf,
      ga: team.ga,
      description: team.description,
      achievements: team.achievements,
      socials: team.socials,
      roster: team.roster.map((player) => ({
        id: player.id,
        name: player.name,
        number: player.number,
        position: player.position,
        age: player.age,
        nationality: player.nationality,
        goals: player.goals,
        assists: player.assists,
        pim: player.pim,
        avatar_color: player.avatarColor,
      })),
    }));
  }
}
