import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface Goal {
  scorer: string;
  minute: number;
  assist: string | null;
}

@Entity('matches')
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'home_team_id', type: 'int' })
  homeTeamId: number;

  @Column({ name: 'away_team_id', type: 'int' })
  awayTeamId: number;

  @Column({ type: 'timestamptz' })
  date: Date;

  @Column()
  status: string;

  @Column({ type: 'int' })
  week: number;

  @Column({ name: 'home_score', type: 'int', nullable: true })
  homeScore: number | null;

  @Column({ name: 'away_score', type: 'int', nullable: true })
  awayScore: number | null;

  @Column({ type: 'jsonb', default: () => "'[]'::jsonb" })
  goals: Goal[];

  @Column({ name: 'is_best', default: false })
  isBest: boolean;
}
