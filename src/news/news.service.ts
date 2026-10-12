import { Injectable, Optional } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from '../database/entities/news.entity';
import { readDemoData } from '../demo-data';

@Injectable()
export class NewsService {
  constructor(
    @Optional()
    @InjectRepository(News)
    private readonly news?: Repository<News>,
  ) {}

  async findAll() {
    if (!this.news) return readDemoData('news.json');

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
