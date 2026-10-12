import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from '../database/entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly news: Repository<News>,
  ) {}

  async findAll() {
    const news = await this.news.find({ order: { date: 'DESC', id: 'DESC' } });
    return news.map((item) => ({
      id: item.id,
      title: item.title,
      date: item.date,
      image_emoji: item.imageEmoji,
      excerpt: item.excerpt,
    }));
  }
}
