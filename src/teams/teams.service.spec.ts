import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Player } from '../database/entities/player.entity';
import { Team } from '../database/entities/team.entity';
import { TeamsService } from './teams.service';

describe('TeamsService', () => {
  let service: TeamsService;
  const team = Object.assign(new Team(), {
    id: 1,
    slug: 'medvedi',
    name: 'Белые Медведи',
    city: 'Москва',
    colors: '#123,#fff',
    yearFounded: 2018,
    coach: 'Игорь Соколов',
    position: 1,
    points: 38,
    wins: 12,
    losses: 2,
    otl: 1,
    gf: 58,
    ga: 31,
    description: 'League team',
    achievements: 'Champions',
    socials: {},
    roster: [
      Object.assign(new Player(), {
        id: 5,
        name: 'Алексей Смирнов',
        number: 10,
        position: 'Нападающий',
        age: 27,
        nationality: 'RU',
        goals: 14,
        assists: 18,
        pim: 12,
        avatarColor: '#123',
      }),
    ],
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeamsService,
        {
          provide: getRepositoryToken(Team),
          useValue: { find: jest.fn().mockResolvedValue([team]) },
        },
      ],
    }).compile();

    service = module.get<TeamsService>(TeamsService);
  });

  it('returns standings fields and player roster in the frontend API shape', async () => {
    await expect(service.findAll()).resolves.toMatchObject([
      {
        id: 1,
        slug: 'medvedi',
        players: 1,
        points: 38,
        roster: [{ id: 5, avatar_color: '#123' }],
      },
    ]);
  });
});
