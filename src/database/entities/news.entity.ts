import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ name: 'image_emoji', default: '🏒' })
  imageEmoji: string;

  @Column({ type: 'text' })
  excerpt: string;
}
