import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Match } from '../database/entities/match.entity';
import { MatchesService } from './matches.service';

describe('MatchesService', () => {
  let service: MatchesService;

  beforeEach(async () => {
    const match = Object.assign(new Match(), {
      id: 3,
      homeTeamId: 1,
      awayTeamId: 2,
      date: new Date('2026-10-20T19:00:00Z'),
      status: 'upcoming',
      week: 2,
      homeScore: null,
      awayScore: null,
      goals: [],
      isBest: true,
    });
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MatchesService,
        {
          provide: getRepositoryToken(Match),
          useValue: { find: jest.fn().mockResolvedValue([match]) },
        },
      ],
    }).compile();
    service = module.get<MatchesService>(MatchesService);
  });

  it('maps persisted matches to the API fields used by the site', async () => {
    await expect(service.findAll()).resolves.toMatchObject([
      {
        id: 3,
        home_team_id: 1,
        away_team_id: 2,
        home_score: null,
        is_best: true,
      },
    ]);
  });
});
