import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Player } from './player.entity';

@Entity('teams')
@Unique(['slug'])
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  colors: string;

  @Column({ name: 'year_founded', type: 'int' })
  yearFounded: number;

  @Column()
  coach: string;

  @Column({ type: 'int', default: 0 })
  position: number;

  @Column({ type: 'int', default: 0 })
  points: number;

  @Column({ type: 'int', default: 0 })
  wins: number;

  @Column({ type: 'int', default: 0 })
  losses: number;

  @Column({ type: 'int', default: 0 })
  otl: number;

  @Column({ type: 'int', default: 0 })
  gf: number;

  @Column({ type: 'int', default: 0 })
  ga: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  achievements: string;

  @Column({ type: 'jsonb', default: () => "'{}'::jsonb" })
  socials: Record<string, string>;

  @OneToMany(() => Player, (player) => player.team)
  roster: Player[];
}
