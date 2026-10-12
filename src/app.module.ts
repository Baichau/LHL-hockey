import 'dotenv/config';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { Match } from './database/entities/match.entity';
import { News } from './database/entities/news.entity';
import { Player } from './database/entities/player.entity';
import { Team } from './database/entities/team.entity';
import { MatchesController } from './matches/matches.controller';
import { MatchesService } from './matches/matches.service';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { TeamsController } from './teams/teams.controller';
import { TeamsService } from './teams/teams.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Team, Player, Match, News],
      migrations: [join(__dirname, 'database', 'migrations', '*{.ts,.js}')],
      migrationsRun: true,
      synchronize: false,
      ssl:
        process.env.DATABASE_SSL === 'true'
          ? { rejectUnauthorized: false }
          : false,
    }),
    TypeOrmModule.forFeature([Team, Player, Match, News]),
    AuthModule,
    AdminModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [TeamsController, MatchesController, NewsController],
  providers: [TeamsService, MatchesService, NewsService],
})
export class AppModule {}
