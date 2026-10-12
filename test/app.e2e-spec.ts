import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { MatchesController } from '../src/matches/matches.controller';
import { MatchesService } from '../src/matches/matches.service';
import { NewsController } from '../src/news/news.controller';
import { NewsService } from '../src/news/news.service';
import { TeamsController } from '../src/teams/teams.controller';
import { TeamsService } from '../src/teams/teams.service';

describe('League API (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController, MatchesController, NewsController],
      providers: [
        {
          provide: TeamsService,
          useValue: { findAll: jest.fn().mockResolvedValue([]) },
        },
        {
          provide: MatchesService,
          useValue: { findAll: jest.fn().mockResolvedValue([]) },
        },
        {
          provide: NewsService,
          useValue: { findAll: jest.fn().mockResolvedValue([]) },
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /teams returns the team list', () => {
    return request(app.getHttpServer()).get('/teams').expect(200).expect([]);
  });

  it('GET /matches returns the match list', () => {
    return request(app.getHttpServer()).get('/matches').expect(200).expect([]);
  });

  it('GET /news returns the news list', () => {
    return request(app.getHttpServer()).get('/news').expect(200).expect([]);
  });

  afterEach(async () => {
    await app.close();
  });
});
