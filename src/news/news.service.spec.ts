import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { News } from '../database/entities/news.entity';
import { NewsService } from './news.service';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(async () => {
    const item = Object.assign(new News(), {
      id: 2,
      title: 'League update',
      date: '2026-10-12',
      imageEmoji: '🏒',
      excerpt: 'A league update',
    });
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NewsService,
        {
          provide: getRepositoryToken(News),
          useValue: { find: jest.fn().mockResolvedValue([item]) },
        },
      ],
    }).compile();
    service = module.get<NewsService>(NewsService);
  });

  it('maps news to the fields consumed by the homepage', async () => {
    await expect(service.findAll()).resolves.toEqual([
      {
        id: 2,
        title: 'League update',
        date: '2026-10-12',
        image_emoji: '🏒',
        excerpt: 'A league update',
      },
    ]);
  });
});
