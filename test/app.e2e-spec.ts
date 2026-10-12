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
      providers: [TeamsService, MatchesService, NewsService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /teams returns demo teams and player rosters', async () => {
    const response = await request(app.getHttpServer())
      .get('/teams')
      .expect(200);

    const teams = JSON.parse(response.text) as Array<{ roster: unknown[] }>;
    expect(teams).toHaveLength(8);
    expect(teams[0].roster.length).toBeGreaterThan(0);
  });

  it('GET /matches returns demo fixtures', async () => {
    const response = await request(app.getHttpServer())
      .get('/matches')
      .expect(200);

    const matches = JSON.parse(response.text) as Array<Record<string, unknown>>;
    expect(matches).toHaveLength(8);
    expect(matches[0]).toHaveProperty('home_team_id');
  });

  it('GET /news returns demo league news', async () => {
    const response = await request(app.getHttpServer())
      .get('/news')
      .expect(200);

    const news = JSON.parse(response.text) as Array<Record<string, unknown>>;
    expect(news).toHaveLength(4);
    expect(news[0]).toHaveProperty('image_emoji');
  });

  afterEach(async () => {
    await app.close();
  });
});
