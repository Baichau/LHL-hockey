import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLeagueTables1710000000000 implements MigrationInterface {
  name = 'CreateLeagueTables1710000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "teams" (
        "id" SERIAL PRIMARY KEY,
        "slug" varchar NOT NULL UNIQUE,
        "name" varchar NOT NULL,
        "city" varchar NOT NULL,
        "colors" varchar NOT NULL,
        "year_founded" integer NOT NULL,
        "coach" varchar NOT NULL,
        "position" integer NOT NULL DEFAULT 0,
        "points" integer NOT NULL DEFAULT 0,
        "wins" integer NOT NULL DEFAULT 0,
        "losses" integer NOT NULL DEFAULT 0,
        "otl" integer NOT NULL DEFAULT 0,
        "gf" integer NOT NULL DEFAULT 0,
        "ga" integer NOT NULL DEFAULT 0,
        "description" text NOT NULL,
        "achievements" text NOT NULL,
        "socials" jsonb NOT NULL DEFAULT '{}'::jsonb
      );
      CREATE TABLE "players" (
        "id" SERIAL PRIMARY KEY,
        "team_id" integer NOT NULL REFERENCES "teams"("id") ON DELETE CASCADE,
        "name" varchar NOT NULL,
        "number" integer NOT NULL,
        "position" varchar NOT NULL,
        "age" integer NOT NULL,
        "nationality" varchar NOT NULL,
        "goals" integer NOT NULL DEFAULT 0,
        "assists" integer NOT NULL DEFAULT 0,
        "pim" integer NOT NULL DEFAULT 0,
        "avatar_color" varchar NOT NULL
      );
      CREATE TABLE "matches" (
        "id" SERIAL PRIMARY KEY,
        "home_team_id" integer NOT NULL REFERENCES "teams"("id"),
        "away_team_id" integer NOT NULL REFERENCES "teams"("id"),
        "date" timestamptz NOT NULL,
        "status" varchar NOT NULL,
        "week" integer NOT NULL,
        "home_score" integer,
        "away_score" integer,
        "goals" jsonb NOT NULL DEFAULT '[]'::jsonb,
        "is_best" boolean NOT NULL DEFAULT false,
        CONSTRAINT "matches_different_teams" CHECK ("home_team_id" <> "away_team_id"),
        CONSTRAINT "matches_status_valid" CHECK ("status" IN ('upcoming', 'past'))
      );
      CREATE TABLE "news" (
        "id" SERIAL PRIMARY KEY,
        "title" varchar NOT NULL,
        "date" date NOT NULL,
        "image_emoji" varchar NOT NULL DEFAULT '🏒',
        "excerpt" text NOT NULL
      );
    `);

    await queryRunner.query(`
      INSERT INTO "teams" ("id", "slug", "name", "city", "colors", "year_founded", "coach", "position", "points", "wins", "losses", "otl", "gf", "ga", "description", "achievements", "socials") VALUES
      (1, 'belye-medvedi', 'Белые Медведи', 'Москва', '#1a5276,#fff,#e03a3a', 2018, 'Игорь Соколов', 1, 38, 12, 2, 1, 58, 31, 'Один из сильнейших коллективов лиги с агрессивным атакующим стилем и надёжной обороной.', 'Чемпионы ЛХЛ 2022 и 2023. Финалисты Кубка Лиги 2024.', '{"vk":"#","tg":"#"}'),
      (2, 'krasnye-yastreby', 'Красные Ястребы', 'Санкт-Петербург', '#c0392b,#f0b90b,#1a1a1a', 2019, 'Александр Волков', 2, 34, 10, 3, 2, 50, 35, 'Скоростная игра и великолепная реализация большинства.', 'Серебряные призёры 2023. Бронза 2024.', '{"vk":"#","tg":"#"}'),
      (3, 'sibirskie-volki', 'Сибирские Волки', 'Новосибирск', '#2c3e50,#7f8c8d,#e67e22', 2020, 'Дмитрий Зайцев', 3, 30, 9, 4, 2, 44, 36, 'Суровая сибирская команда с характером и мощной обороной.', 'Выход в плей-офф 2022, 2023 и 2024.', '{"vk":"#","tg":"#"}'),
      (4, 'uralskie-rysy', 'Уральские Рыси', 'Екатеринбург', '#f39c12,#2c3e50,#fff', 2021, 'Павел Морозов', 4, 27, 8, 5, 2, 40, 38, 'Быстрая и техничная команда Екатеринбурга с большим потенциалом.', 'Лучшая команда сезона по голам в меньшинстве 2023.', '{"vk":"#","tg":"#"}'),
      (5, 'kazanskie-barsy', 'Казанские Барсы', 'Казань', '#27ae60,#fff,#1a1a1a', 2019, 'Рамиль Хабибуллин', 5, 25, 7, 5, 3, 37, 33, 'Казанская команда с богатыми традициями любительского хоккея.', 'Финалисты регионального турнира 2023.', '{"vk":"#","tg":"#"}'),
      (6, 'dalnevostochnye-tigry', 'Дальневосточные Тигры', 'Владивосток', '#e74c3c,#2c3e50,#f0b90b', 2022, 'Сергей Ким', 6, 22, 6, 6, 3, 33, 40, 'Самая восточная команда лиги — молодой, амбициозный коллектив.', 'Приз зрительских симпатий 2024.', '{"vk":"#","tg":"#"}'),
      (7, 'kubanskie-griffony', 'Кубанские Грифоны', 'Краснодар', '#8e44ad,#f0b90b,#fff', 2021, 'Андрей Петренко', 7, 19, 5, 7, 3, 30, 42, 'Южная команда с горячим темпераментом и атакующим хоккеем.', 'Самая результативная команда среди новичков 2022.', '{"vk":"#","tg":"#"}'),
      (8, 'nevskie-lvy', 'Невские Львы', 'Санкт-Петербург', '#2980b9,#ecf0f1,#e03a3a', 2020, 'Максим Белов', 8, 16, 4, 8, 4, 28, 45, 'Вторая питерская команда в лиге и принципиальный соперник Ястребов.', 'Обладатели Кубка Fair Play 2023.', '{"vk":"#","tg":"#"}');
      SELECT setval(pg_get_serial_sequence('teams', 'id'), (SELECT MAX(id) FROM teams));
      INSERT INTO "players" ("team_id", "name", "number", "position", "age", "nationality", "goals", "assists", "pim", "avatar_color") VALUES
      (1, 'Алексей Смирнов', 10, 'Нападающий', 27, '🇷🇺', 14, 18, 12, '#1a5276'),
      (1, 'Денис Ковалёв', 22, 'Защитник', 29, '🇷🇺', 5, 15, 22, '#2c3e50'),
      (1, 'Максим Орлов', 30, 'Вратарь', 25, '🇷🇺', 0, 2, 0, '#c0392b'),
      (2, 'Артём Громов', 9, 'Нападающий', 28, '🇷🇺', 16, 14, 10, '#c0392b'),
      (2, 'Сергей Фёдоров', 17, 'Защитник', 30, '🇷🇺', 4, 11, 18, '#2c3e50'),
      (3, 'Роман Сидоров', 11, 'Нападающий', 26, '🇷🇺', 12, 10, 20, '#2c3e50'),
      (3, 'Евгений Кузнецов', 5, 'Защитник', 31, '🇷🇺', 3, 9, 16, '#7f8c8d'),
      (4, 'Иван Петров', 15, 'Нападающий', 23, '🇷🇺', 10, 8, 14, '#f39c12'),
      (5, 'Никита Волков', 7, 'Нападающий', 26, '🇷🇺', 8, 12, 8, '#27ae60'),
      (6, 'Сергей Ким', 8, 'Защитник', 25, '🇷🇺', 6, 7, 10, '#e74c3c'),
      (7, 'Андрей Петренко', 4, 'Защитник', 28, '🇷🇺', 2, 5, 14, '#8e44ad'),
      (8, 'Максим Белов', 1, 'Вратарь', 27, '🇷🇺', 0, 1, 2, '#2980b9');
      INSERT INTO "matches" ("id", "home_team_id", "away_team_id", "date", "status", "week", "home_score", "away_score", "goals", "is_best") VALUES
      (1, 1, 2, '2026-10-20T19:00:00Z', 'upcoming', 2, NULL, NULL, '[]', true),
      (2, 3, 4, '2026-10-18T17:30:00Z', 'past', 1, 3, 2, '[{"scorer":"Роман Сидоров","minute":12,"assist":"Евгений Кузнецов"},{"scorer":"Роман Сидоров","minute":28,"assist":null},{"scorer":"Игрок Уральские Рыси","minute":35,"assist":"Капитан Команды"}]', true),
      (3, 5, 6, '2026-10-22T20:00:00Z', 'upcoming', 2, NULL, NULL, '[]', false),
      (4, 7, 8, '2026-10-16T16:00:00Z', 'past', 1, 4, 5, '[]', true),
      (5, 1, 5, '2026-10-24T19:30:00Z', 'upcoming', 2, NULL, NULL, '[]', false),
      (6, 2, 3, '2026-10-15T18:00:00Z', 'past', 1, 2, 1, '[{"scorer":"Артём Громов","minute":18,"assist":"Сергей Фёдоров"},{"scorer":"Роман Сидоров","minute":55,"assist":"Евгений Кузнецов"}]', false),
      (7, 4, 6, '2026-10-26T20:30:00Z', 'upcoming', 3, NULL, NULL, '[]', false),
      (8, 8, 7, '2026-10-14T15:00:00Z', 'past', 1, 1, 3, '[]', false);
      SELECT setval(pg_get_serial_sequence('matches', 'id'), (SELECT MAX(id) FROM matches));
      INSERT INTO "news" ("title", "date", "image_emoji", "excerpt") VALUES
      ('Финал сезона приближается!', '2026-10-12', '🏆', 'До финала плей-офф осталось всего две недели. Борьба за кубок обещает быть жаркой.'),
      ('Новый рекорд посещаемости', '2026-10-10', '🎉', 'Матч Белых Медведей и Красных Ястребов собрал рекордное число зрителей.'),
      ('Обновление правил лиги', '2026-10-07', '📋', 'Совет лиги утвердил новые правила по составу команд и лимиту на легионеров.'),
      ('Лучший игрок месяца — Артём Громов', '2026-10-02', '⭐', 'Нападающий Красных Ястребов признан лучшим игроком месяца.');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP TABLE "news"; DROP TABLE "matches"; DROP TABLE "players"; DROP TABLE "teams";',
    );
  }
}
