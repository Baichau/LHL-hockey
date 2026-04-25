// ==================== MOCK DATA ====================
const teamsData = [
    { id: 1, slug: 'belye-medvedi', name: 'Белые Медведи', city: 'Москва', colors: '#1a5276,#fff,#e03a3a', yearFounded: 2018,
        coach: 'Игорь Соколов', players: 22, position: 1, points: 38, wins: 12, losses: 2, otl: 1, gf: 58, ga: 31,
        description: 'Команда "Белые Медведи" — один из сильнейших коллективов лиги, основанный в 2018 году. Славится агрессивным атакующим стилем и надёжной обороной.',
        achievements: 'Чемпионы ЛХЛ 2022, 2023. Финалисты Кубка Лиги 2024.', socials: { vk: '#',
            tg: '#' } },
    { id: 2, slug: 'krasnye-yastreby', name: 'Красные Ястребы', city: 'Санкт-Петербург', colors: '#c0392b,#f0b90b,#1a1a1a',
        yearFounded: 2019, coach: 'Александр Волков', players: 20, position: 2, points: 34, wins: 10, losses: 3,
        otl: 2, gf: 50, ga: 35,
        description: 'Санкт-петербургские "Красные Ястребы" известны своей скоростной игрой и великолепной реализацией большинства.',
        achievements: 'Серебряные призёры 2023. Бронза 2024.', socials: { vk: '#', tg: '#' } },
    { id: 3, slug: 'sibirskie-volki', name: 'Сибирские Волки', city: 'Новосибирск', colors: '#2c3e50,#7f8c8d,#e67e22',
        yearFounded: 2020, coach: 'Дмитрий Зайцев', players: 21, position: 3, points: 30, wins: 9, losses: 4, otl: 2,
        gf: 44, ga: 36,
        description: 'Суровая сибирская команда с характером. Делают ставку на физическую мощь и неуступчивость.',
        achievements: 'Выход в плей-офф 2022, 2023, 2024.', socials: { vk: '#', tg: '#' } },
    { id: 4, slug: 'uralskie-rysy', name: 'Уральские Рыси', city: 'Екатеринбург', colors: '#f39c12,#2c3e50,#fff',
        yearFounded: 2021, coach: 'Павел Морозов', players: 19, position: 4, points: 27, wins: 8, losses: 5, otl: 2,
        gf: 40, ga: 38,
        description: 'Быстрые и техничные "Уральские Рыси" представляют Екатеринбург. Команда с большим потенциалом.',
        achievements: 'Лучшая команда регулярного сезона по голам в меньшинстве 2023.', socials: { vk: '#',
        tg: '#' } },
    { id: 5, slug: 'kazanskie-barsy', name: 'Казанские Барсы', city: 'Казань', colors: '#27ae60,#fff,#1a1a1a',
        yearFounded: 2019, coach: 'Рамиль Хабибуллин', players: 23, position: 5, points: 25, wins: 7, losses: 5,
        otl: 3, gf: 37, ga: 33,
        description: 'Казанская команда с богатыми традициями любительского хоккея. Отличная организация игры.',
        achievements: 'Финалисты регионального турнира 2023.', socials: { vk: '#', tg: '#' } },
    { id: 6, slug: 'dalnevostochnye-tigry', name: 'Дальневосточные Тигры', city: 'Владивосток', colors: '#e74c3c,#2c3e50,#f0b90b',
        yearFounded: 2022, coach: 'Сергей Ким', players: 18, position: 6, points: 22, wins: 6, losses: 6, otl: 3,
        gf: 33, ga: 40,
        description: 'Самая восточная команда лиги. Молодой, амбициозный коллектив с бойцовским характером.',
        achievements: 'Приз зрительских симпатий 2024.', socials: { vk: '#', tg: '#' } },
    { id: 7, slug: 'kubanskie-griffony', name: 'Кубанские Грифоны', city: 'Краснодар', colors: '#8e44ad,#f0b90b,#fff',
        yearFounded: 2021, coach: 'Андрей Петренко', players: 20, position: 7, points: 19, wins: 5, losses: 7, otl: 3,
        gf: 30, ga: 42,
        description: 'Южная команда с горячим темпераментом. Любят играть в атакующий хоккей с обилием бросков.',
        achievements: 'Самая результативная команда среди новичков 2022.', socials: { vk: '#', tg: '#' } },
    { id: 8, slug: 'nevskie-lvy', name: 'Невские Львы', city: 'Санкт-Петербург', colors: '#2980b9,#ecf0f1,#e03a3a',
        yearFounded: 2020, coach: 'Максим Белов', players: 21, position: 8, points: 16, wins: 4, losses: 8, otl: 4,
        gf: 28, ga: 45,
        description: 'Вторая питерская команда в лиге. Принципиальные соперники "Красных Ястребов".',
        achievements: 'Обладатели Кубка Fair Play 2023.', socials: { vk: '#', tg: '#' } },
];

const playersData = {
    'belye-medvedi': [
        { name: 'Алексей Смирнов', number: 10, position: 'Нападающий', age: 27, nationality: '🇷🇺', goals: 14,
            assists: 18, pim: 12, avatar_color: '#1a5276' },
        { name: 'Денис Ковалёв', number: 22, position: 'Защитник', age: 29, nationality: '🇷🇺', goals: 5, assists: 15,
            pim: 22, avatar_color: '#2c3e50' },
        { name: 'Максим Орлов', number: 30, position: 'Вратарь', age: 25, nationality: '🇷🇺', goals: 0, assists: 2,
            pim: 0, avatar_color: '#c0392b' },
        { name: 'Иван Петров', number: 15, position: 'Нападающий', age: 23, nationality: '🇷🇺', goals: 10, assists: 8,
            pim: 14, avatar_color: '#e67e22' },
        { name: 'Никита Волков', number: 7, position: 'Нападающий', age: 26, nationality: '🇷🇺', goals: 8,
            assists: 12, pim: 8, avatar_color: '#27ae60' },
    ],
    'krasnye-yastreby': [
        { name: 'Артём Громов', number: 9, position: 'Нападающий', age: 28, nationality: '🇷🇺', goals: 16,
            assists: 14, pim: 10, avatar_color: '#c0392b' },
        { name: 'Сергей Фёдоров', number: 17, position: 'Защитник', age: 30, nationality: '🇷🇺', goals: 4,
            assists: 11, pim: 18, avatar_color: '#2c3e50' },
        { name: 'Павел Дмитриев', number: 1, position: 'Вратарь', age: 27, nationality: '🇷🇺', goals: 0, assists: 1,
            pim: 2, avatar_color: '#f0b90b' },
    ],
    'sibirskie-volki': [
        { name: 'Роман Сидоров', number: 11, position: 'Нападающий', age: 26, nationality: '🇷🇺', goals: 12,
            assists: 10, pim: 20, avatar_color: '#2c3e50' },
        { name: 'Евгений Кузнецов', number: 5, position: 'Защитник', age: 31, nationality: '🇷🇺', goals: 3,
            assists: 9, pim: 16, avatar_color: '#7f8c8d' },
    ],
};
// Ensure all teams have at least some players
teamsData.forEach(t => {
    if (!playersData[t.slug]) {
        playersData[t.slug] = [
            { name: 'Игрок ' + t.name, number: 8, position: 'Нападающий', age: 25, nationality: '🇷🇺',
                goals: 6, assists: 7, pim: 10, avatar_color: t.colors.split(',')[0] },
            { name: 'Капитан Команды', number: 4, position: 'Защитник', age: 28, nationality: '🇷🇺', goals: 2,
                assists: 5, pim: 14, avatar_color: '#2c3e50' },
        ];
    }
});

const matchesData = [
    { id: 1, home_team_id: 1, away_team_id: 2, date: '2026-04-26T19:00:00', status: 'upcoming', week: 2,
        home_score: null, away_score: null, goals: [], is_best: true },
    { id: 2, home_team_id: 3, away_team_id: 4, date: '2026-04-25T17:30:00', status: 'past', week: 1, home_score: 3,
        away_score: 2, goals: [{ scorer: 'Роман Сидоров', minute: 12, assist: 'Евгений Кузнецов' }, { scorer: 'Роман Сидоров',
            minute: 28, assist: null }, { scorer: 'Игрок Уральские Рыси', minute: 35, assist: 'Капитан Команды' },
        { scorer: 'Роман Сидоров', minute: 52, assist: null }, { scorer: 'Игрок Уральские Рыси', minute: 58,
            assist: null }
        ], is_best: true },
    { id: 3, home_team_id: 5, away_team_id: 6, date: '2026-04-27T20:00:00', status: 'upcoming', week: 2,
        home_score: null, away_score: null, goals: [], is_best: false },
    { id: 4, home_team_id: 7, away_team_id: 8, date: '2026-04-24T16:00:00', status: 'past', week: 1, home_score: 4,
        away_score: 5, goals: [{ scorer: 'Игрок Кубанские Грифоны', minute: 5, assist: null }, { scorer: 'Игрок Невские Львы',
            minute: 14, assist: null }, { scorer: 'Игрок Кубанские Грифоны', minute: 22, assist: null }, { scorer: 'Игрок Невские Львы',
            minute: 31, assist: null }, { scorer: 'Игрок Невские Львы', minute: 44, assist: null }, { scorer: 'Игрок Кубанские Грифоны',
            minute: 50, assist: null }, { scorer: 'Игрок Невские Львы', minute: 55, assist: null }, { scorer: 'Игрок Невские Львы',
            minute: 59, assist: null }, { scorer: 'Игрок Кубанские Грифоны', minute: 60,
        assist: null }], is_best: true },
    { id: 5, home_team_id: 1, away_team_id: 5, date: '2026-04-28T19:30:00', status: 'upcoming', week: 2,
        home_score: null, away_score: null, goals: [], is_best: false },
    { id: 6, home_team_id: 2, away_team_id: 3, date: '2026-04-23T18:00:00', status: 'past', week: 1, home_score: 2,
        away_score: 1, goals: [{ scorer: 'Артём Громов', minute: 18, assist: 'Сергей Фёдоров' }, { scorer: 'Артём Громов',
            minute: 42, assist: null }, { scorer: 'Роман Сидоров', minute: 55, assist: 'Евгений Кузнецов' }],
        is_best: false },
    { id: 7, home_team_id: 4, away_team_id: 6, date: '2026-04-29T20:30:00', status: 'upcoming', week: 3,
        home_score: null, away_score: null, goals: [], is_best: false },
    { id: 8, home_team_id: 8, away_team_id: 7, date: '2026-04-22T15:00:00', status: 'past', week: 1, home_score: 1,
        away_score: 3, goals: [{ scorer: 'Игрок Невские Львы', minute: 25, assist: null }, { scorer: 'Игрок Кубанские Грифоны',
            minute: 38, assist: null }, { scorer: 'Игрок Кубанские Грифоны', minute: 47, assist: null },
        { scorer: 'Игрок Кубанские Грифоны', minute: 53, assist: null }], is_best: false },
];

const newsData = [
    { id: 1, title: 'Финал сезона приближается!', date: '2026-04-20', image_emoji: '🏆',
        excerpt: 'До финала плей-офф осталось всего две недели. Борьба за кубок обещает быть жаркой.' },
    { id: 2, title: 'Новый рекорд посещаемости', date: '2026-04-18', image_emoji: '🎉',
        excerpt: 'Матч "Белые Медведи" — "Красные Ястребы" собрал рекордные 1200 зрителей на трибунах.' },
    { id: 3, title: 'Обновление правил лиги', date: '2026-04-15', image_emoji: '📋',
        excerpt: 'Совет лиги утвердил новые правила по составу команд и лимиту на легионеров с сезона 2026/27.' },
    { id: 4, title: 'Лучший игрок месяца — Артём Громов', date: '2026-04-10', image_emoji: '⭐',
        excerpt: 'Нападающий "Красных Ястребов" признан лучшим игроком апреля по версии болельщиков и экспертов.' },
];

const faqData = [
    { q: 'Как создать команду для участия в ЛХЛ?',
        a: 'Соберите минимум 15 игроков, выберите название и подайте заявку через форму на сайте. Совет лиги рассмотрит её в течение 14 дней.' },
    { q: 'Как вступить в существующую команду?',
        a: 'Свяжитесь с капитаном команды через контакты на странице команды или посетите открытую тренировку.' },
    { q: 'Где найти расписание матчей?', a: 'Расписание доступно в разделе "Матчи". Вы можете фильтровать по неделям и командам.' },
    { q: 'Какие требования к экипировке?', a: 'Все игроки должны иметь шлем, щитки, перчатки и коньки. Рекомендуется полная защита.' },
    { q: 'Сколько длится сезон?', a: 'Регулярный сезон длится 8 недель, затем следуют 3 недели плей-офф.' },
];

const testimonialsData = [
    { name: 'Алексей С.', photo_emoji: '🧔', quote: 'ЛХЛ — это невероятный опыт! Атмосфера на матчах просто потрясающая. Горжусь, что играю здесь.' },
    { name: 'Мария К.', photo_emoji: '👩‍🦰',
    quote: 'Прихожу на каждый матч "Белых Медведей". Организация на высшем уровне, настоящий праздник хоккея!' },
    { name: 'Дмитрий В.', photo_emoji: '👨', quote: 'Создал свою команду в ЛХЛ два года назад. Это лучший способ держать себя в форме и находить друзей.' },
];

// ==================== STATE ====================
let currentPage = 'home';
let currentTeamSlug = null;
let homeMatchTab = 'upcoming';
let matchStatusFilter = 'all';
let adminSection = 'dashboard';
let expandedMatches = {};

// ==================== NAVIGATION ====================
function navigateTo(page, data = null) {
    currentPage = page;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById('page-' + page);
    if (targetPage) targetPage.classList.add('active');

    // Update nav links
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navLink = document.querySelector(`.nav-links a[data-page="${page}"]`);
    if (navLink) navLink.classList.add('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle sub-pages
    if (page === 'team-detail' && data) {
        currentTeamSlug = data.slug;
        renderTeamDetail(data);
    }
    if (page === 'teams') renderTeamsPage();
    if (page === 'matches') renderMatchesPage();
    if (page === 'admin') renderAdminPage();
    if (page === 'home') renderHomePage();

    // Close mobile menu
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('expanded')) {
        navLinks.classList.remove('expanded');
        navLinks.classList.add('collapsed');
    }
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('expanded') || !navLinks.classList.contains('collapsed') && navLinks
        .offsetParent !== null && window.innerWidth <= 768) {
        navLinks.classList.toggle('expanded');
        navLinks.classList.toggle('collapsed');
    } else if (window.innerWidth <= 768) {
        navLinks.classList.add('expanded');
        navLinks.classList.remove('collapsed');
    }
}

// ==================== RENDER HOME ====================
function renderHomePage() {
    // News grid
    const newsGrid = document.getElementById('homeNewsGrid');
    newsGrid.innerHTML = newsData.slice(0, 3).map(n => `
    <div class="glass-card news-card">
      <div class="news-card-img" style="font-size:3.5rem;">${n.image_emoji}</div>
      <div class="news-card-body">
        <span class="news-date">${n.date}</span>
        <h3>${n.title}</h3>
        <p>${n.excerpt}</p>
        <button class="btn btn-outline btn-sm">Читать</button>
      </div>
    </div>`).join('');

    // Standings table
    const standingsTable = document.getElementById('homeStandingsTable');
    const top6 = [...teamsData].sort((a, b) => b.points - a.points).slice(0, 6);
    standingsTable.innerHTML = `
    <thead><tr><th>#</th><th>Команда</th><th>И</th><th>В</th><th>П</th><th>ОТ</th><th>Очки</th></tr></thead>
    <tbody>${top6.map((t,i) => `
      <tr class="${i<3?'leader-row':''}">
        <td>${i+1}</td>
        <td><span class="team-dot" style="background:${t.colors.split(',')[0]};"></span><span style="cursor:pointer;text-decoration:underline;text-underline-offset:3px;" onclick="navigateTo('team-detail',teamsData.find(x=>x.slug==='${t.slug}'))">${t.name}</span></td>
        <td>${t.wins+t.losses+t.otl}</td><td>${t.wins}</td><td>${t.losses}</td><td>${t.otl}</td><td><strong>${t.points}</strong></td>
      </tr>`).join('')}</tbody>`;

    // Teams scroll
    const teamsScroll = document.getElementById('teamsScroll');
    teamsScroll.innerHTML = teamsData.map(t => `
    <div class="team-scroll-item" onclick="navigateTo('team-detail',teamsData.find(x=>x.slug==='${t.slug}'))">
      <div class="team-scroll-logo" style="background:linear-gradient(135deg,${t.colors.split(',')[0]},${t.colors.split(',')[1]||t.colors.split(',')[0]});">${t.name.charAt(0)}</div>
      <span class="team-scroll-name">${t.name}</span>
    </div>`).join('');

    // Matches feed
    switchHomeMatchTab(homeMatchTab, document.querySelector('#homeMatchesFeed .tab-btn.active') || document
        .querySelector('#homeMatchesFeed .tab-btn'));

    // Testimonials
    document.getElementById('testimonialsGrid').innerHTML = testimonialsData.map(t => `
    <div class="glass-card" style="padding:20px;text-align:center;">
      <div style="font-size:3rem;">${t.photo_emoji}</div>
      <p style="font-style:italic;color:var(--text-secondary);margin:8px 0;">«${t.quote}»</p>
      <strong>${t.name}</strong>
    </div>`).join('');

    // FAQ
    document.getElementById('homeFaq').innerHTML = faqData.map(f => `
    <details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`).join('');
}

function switchHomeMatchTab(status, btn) {
    homeMatchTab = status;
    document.querySelectorAll('#homeMatchesFeed .tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const feedList = document.getElementById('homeMatchFeedList');
    const filtered = matchesData.filter(m => status === 'upcoming' ? m.status === 'upcoming' : m.status === 'past')
        .slice(0, 5);
    feedList.innerHTML = filtered.map(m => renderMatchFeedItem(m)).join('');
    // Re-bind click events
    feedList.querySelectorAll('.match-feed-item').forEach(el => {
        el.addEventListener('click', function() {
            const mid = this.dataset.matchId;
            toggleMatchDetail(mid, this);
        });
    });
}

function renderMatchFeedItem(m) {
    const ht = teamsData.find(t => t.id === m.home_team_id);
    const at = teamsData.find(t => t.id === m.away_team_id);
    const scoreDisplay = m.status === 'past' ? `${m.home_score} : ${m.away_score}` : '— : —';
    const dateStr = new Date(m.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short',
        hour: '2-digit', minute: '2-digit' });
    return `
    <div class="match-feed-item glass-card" data-match-id="${m.id}" style="cursor:pointer;">
      <span style="font-size:0.75rem;color:var(--text-muted);min-width:60px;">${dateStr}</span>
      <span class="match-teams">${ht?.name||'?'} — ${at?.name||'?'}</span>
      <span class="match-score" style="color:${m.status==='past'?'var(--accent-cyan)':'var(--accent-gold)'};">${scoreDisplay}</span>
      <span style="font-size:0.7rem;color:var(--text-muted);">${m.status==='past'?'Завершён':'Предстоит'}</span>
    </div>
    <div class="match-detail-expand" id="matchDetail-${m.id}">
      ${m.goals.length>0?m.goals.map(g=>`⚡ ${g.minute}' — ${g.scorer}${g.assist?' (асс. '+g.assist+')':''}`).join('<br>'):'Детали пока недоступны.'}
    </div>`;
}

function toggleMatchDetail(matchId, feedItemEl) {
    const detailEl = document.getElementById('matchDetail-' + matchId);
    if (!detailEl) return;
    const isOpen = detailEl.classList.contains('open');
    // Close all
    document.querySelectorAll('.match-detail-expand.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) {
        detailEl.classList.add('open');
    }
}

// ==================== RENDER TEAMS PAGE ====================
function renderTeamsPage() {
    const grid = document.getElementById('teamsCatalogGrid');
    grid.innerHTML = teamsData.map(t => `
    <div class="glass-card" style="padding:22px;cursor:pointer;text-align:center;" onclick="navigateTo('team-detail',teamsData.find(x=>x.slug==='${t.slug}'))">
      <div style="width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,${t.colors.split(',')[0]},${t.colors.split(',')[1]||t.colors.split(',')[0]});display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.5rem;color:#fff;margin:0 auto 12px;box-shadow:0 6px 20px rgba(0,0,0,0.4);">${t.name.charAt(0)}</div>
      <h3>${t.name}</h3>
      <p style="color:var(--text-muted);font-size:0.85rem;">📍 ${t.city}</p>
      <p style="color:var(--text-muted);font-size:0.8rem;">👥 ${t.players} игроков</p>
      <button class="btn btn-outline btn-sm" style="margin-top:8px;">Подробнее</button>
    </div>`).join('');
    document.getElementById('teamsFaq').innerHTML = faqData.slice(0, 3).map(f => `
    <details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`).join('');
}

// ==================== RENDER TEAM DETAIL ====================
function renderTeamDetail(team) {
    currentTeamSlug = team.slug;
    document.getElementById('teamHeroBlock').innerHTML = `
    <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
      <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,${team.colors.split(',')[0]},${team.colors.split(',')[1]||team.colors.split(',')[0]});display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.8rem;color:#fff;box-shadow:0 8px 28px rgba(0,0,0,0.5);flex-shrink:0;">${team.name.charAt(0)}</div>
      <div>
        <h1 style="font-size:2rem;">${team.name}</h1>
        <p style="color:var(--text-secondary);">📍 ${team.city} | 🎨 ${team.colors.split(',')[0]} | 🏆 Позиция: #${team.position} | Очки: ${team.points} | Победы: ${team.wins}</p>
        <button class="btn btn-outline btn-sm" style="margin-top:4px;">📞 Контакт</button>
      </div>
    </div>`;

    // Tab navigation
    document.querySelectorAll('#teamTabsNav .team-tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            document.querySelectorAll('#teamTabsNav .team-tab-btn').forEach(b => b.classList
                .remove('active'));
            this.classList.add('active');
            document.querySelectorAll('#page-team-detail .team-tab-content').forEach(c => c
                .classList.remove('active'));
            document.getElementById('teamTab' + tab.charAt(0).toUpperCase() + tab.slice(1))
                .classList.add('active');
            if (tab === 'roster') renderTeamRoster(team);
            if (tab === 'matches') renderTeamMatches(team);
            if (tab === 'stats') renderTeamStats(team);
        });
    });

    // Overview tab
    document.getElementById('teamTabOverview').innerHTML = `
    <p>${team.description}</p>
    <p style="margin-top:8px;"><strong>Достижения:</strong> ${team.achievements}</p>
    <p><strong>Год основания:</strong> ${team.yearFounded} | <strong>Тренер:</strong> ${team.coach}</p>
    <p><strong>Цвета:</strong> ${team.colors}</p>
    ${team.socials?`<p>🌐 Соцсети: <a href="${team.socials.vk}" style="color:var(--accent-blue);">ВК</a> | <a href="${team.socials.tg}" style="color:var(--accent-blue);">Telegram</a></p>`:''}`;
    document.getElementById('teamTabOverview').classList.add('active');
    document.getElementById('teamTabRoster').classList.remove('active');
    document.getElementById('teamTabMatches').classList.remove('active');
    document.getElementById('teamTabStats').classList.remove('active');
    document.querySelectorAll('#teamTabsNav .team-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('#teamTabsNav .team-tab-btn[data-tab="overview"]').classList.add('active');

    // FAQ
    document.getElementById('teamFaqSection').innerHTML =
        '<div class="section-header"><h2>❓ Популярные вопросы</h2></div>' + faqData.slice(0, 3).map(f =>
            `<details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`).join('');
}

function renderTeamRoster(team) {
    const players = playersData[team.slug] || [];
    document.getElementById('teamTabRoster').innerHTML = players.map(p => `
    <div class="player-row glass-card-static" style="margin-bottom:6px;">
      <div class="player-avatar" style="background:${p.avatar_color};">${p.name.charAt(0)}</div>
      <div class="player-info"><span class="player-name">#${p.number} ${p.name}</span><span class="player-meta"> | ${p.position} | ${p.age} лет | ${p.nationality}</span></div>
    </div>`).join('') || '<p>Состав пока не загружен.</p>';
}

function renderTeamMatches(team) {
    const teamMatches = matchesData.filter(m => m.home_team_id === team.id || m.away_team_id === team.id);
    document.getElementById('teamTabMatches').innerHTML = teamMatches.map(m => {
        const ht = teamsData.find(t => t.id === m.home_team_id);
        const at = teamsData.find(t => t.id === m.away_team_id);
        const scoreDisplay = m.status === 'past' ? `${m.home_score}:${m.away_score}` : '—:—';
        const dateStr = new Date(m.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short',
            hour: '2-digit', minute: '2-digit' });
        return `
      <div class="match-feed-item glass-card" data-match-id="tm${m.id}" style="cursor:pointer;" onclick="toggleMatchDetail('tm${m.id}',this)">
        <span>${dateStr}</span>
        <span class="match-teams">${ht?.name||'?'} — ${at?.name||'?'}</span>
        <span class="match-score">${scoreDisplay}</span>
        <span>${m.status==='past'?'Завершён':'Предстоит'}</span>
      </div>
      <div class="match-detail-expand" id="matchDetail-tm${m.id}">${m.goals.length>0?m.goals.map(g=>`⚡ ${g.minute}' — ${g.scorer}${g.assist?' (асс. '+g.assist+')':''}`).join('<br>'):'Детали пока недоступны.'}</div>`;
    }).join('') || '<p>Матчи не найдены.</p>';
}

function renderTeamStats(team) {
    const players = playersData[team.slug] || [];
    document.getElementById('teamTabStats').innerHTML = `
    <p><strong>Общая статистика команды за сезон:</strong> Игры: ${team.wins+team.losses+team.otl} | Победы: ${team.wins} | Очки: ${team.points} | Шайб забито: ${team.gf} | Пропущено: ${team.ga}</p>
    <h4 style="margin-top:14px;">Статистика игроков:</h4>
    ${players.map(p=>`<div class="player-row glass-card-static"><span>#${p.number} ${p.name}</span><span>Голы: ${p.goals}</span><span>Передачи: ${p.assists}</span><span>Штраф: ${p.pim} мин</span></div>`).join('')}`;
}

// ==================== RENDER MATCHES PAGE ====================
function renderMatchesPage() {
    filterMatches();
    // Best matches
    const best = matchesData.filter(m => m.is_best && m.status === 'past').slice(0, 3);
    document.getElementById('bestMatchesBlock').innerHTML = best.map(m => {
        const ht = teamsData.find(t => t.id === m.home_team_id);
        const at = teamsData.find(t => t.id === m.away_team_id);
        return `<div class="glass-card" style="padding:16px;margin-bottom:8px;"><strong>${ht?.name} ${m.home_score}:${m.away_score} ${at?.name}</strong> — ${m.goals.length} голов | ${new Date(m.date).toLocaleDateString('ru-RU')}</div>`;
    }).join('') || '<p>Пока нет данных.</p>';
}

function setMatchStatusFilter(status, btn) {
    matchStatusFilter = status;
    document.querySelectorAll('#page-matches .filter-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    filterMatches();
}

function filterMatches() {
    const weekVal = document.getElementById('matchWeekFilter')?.value || 'all';
    const searchVal = (document.getElementById('matchTeamSearch')?.value || '').toLowerCase();
    let filtered = matchesData;
    if (weekVal !== 'all') filtered = filtered.filter(m => m.week === parseInt(weekVal));
    if (matchStatusFilter !== 'all') filtered = filtered.filter(m => m.status === matchStatusFilter);
    if (searchVal) {
        filtered = filtered.filter(m => {
            const ht = teamsData.find(t => t.id === m.home_team_id);
            const at = teamsData.find(t => t.id === m.away_team_id);
            return (ht?.name.toLowerCase().includes(searchVal)) || (at?.name.toLowerCase().includes(
                searchVal));
        });
    }
    const container = document.getElementById('matchesTableContainer');
    container.innerHTML = filtered.map(m => {
        const ht = teamsData.find(t => t.id === m.home_team_id);
        const at = teamsData.find(t => t.id === m.away_team_id);
        const scoreDisplay = m.status === 'past' ? `${m.home_score}:${m.away_score}` : '—:—';
        const dateStr = new Date(m.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short',
            hour: '2-digit', minute: '2-digit' });
        return `
      <div class="match-feed-item glass-card" data-match-id="mp${m.id}" style="cursor:pointer;" onclick="toggleMatchDetail('mp${m.id}',this)">
        <span style="min-width:80px;">Неделя ${m.week}</span>
        <span class="match-teams">${ht?.name||'?'} — ${at?.name||'?'}</span>
        <span class="match-score">${scoreDisplay}</span>
        <span>${dateStr}</span>
        <span style="font-size:0.75rem;">${m.status==='past'?'Завершён':'Предстоит'}</span>
      </div>
      <div class="match-detail-expand" id="matchDetail-mp${m.id}">${m.goals.length>0?m.goals.map(g=>`⚡ ${g.minute}' — ${g.scorer}${g.assist?' (асс. '+g.assist+')':''}`).join('<br>'):'Детали пока недоступны.'}</div>`;
    }).join('') || '<p style="padding:20px;color:var(--text-muted);">Матчи не найдены по заданным фильтрам.</p>';
}

// ==================== RENDER ADMIN PAGE ====================
function renderAdminPage() {
    switchAdminSection('dashboard', document.querySelector('#adminSidebar nav a[data-admin-section="dashboard"]'));
}

function switchAdminSection(section, linkEl) {
    adminSection = section;
    document.querySelectorAll('#adminSidebar nav a').forEach(a => a.classList.remove('active'));
    if (linkEl) linkEl.classList.add('active');
    const contentArea = document.getElementById('adminContentArea');

    const totalGoals = matchesData.filter(m => m.status === 'past').reduce((sum, m) => sum + (m.home_score || 0) + (
        m.away_score || 0), 0);

    if (section === 'dashboard') {
        contentArea.innerHTML = `
      <div class="metric-cards">
        <div class="metric-card glass-card"><div class="metric-icon">🛡</div><div class="metric-value">${teamsData.length}</div><div class="metric-label">Команд</div></div>
        <div class="metric-card glass-card"><div class="metric-icon">👤</div><div class="metric-value">${teamsData.reduce((s,t)=>s+t.players,0)}</div><div class="metric-label">Игроков</div></div>
        <div class="metric-card glass-card"><div class="metric-icon">📅</div><div class="metric-value">${matchesData.filter(m=>m.status==='past').length}</div><div class="metric-label">Сыгранных матчей</div></div>
        <div class="metric-card glass-card"><div class="metric-icon">📰</div><div class="metric-value">${newsData.length}</div><div class="metric-label">Новостей</div></div>
        <div class="metric-card glass-card"><div class="metric-icon">🥅</div><div class="metric-value">${totalGoals}</div><div class="metric-label">Всего голов</div></div>
      </div>
      <h3>⚡ Быстрые действия</h3>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;">
        <button class="btn btn-primary btn-sm">+ Новость</button>
        <button class="btn btn-primary btn-sm">+ Матч</button>
        <button class="btn btn-outline btn-sm">+ Команду</button>
        <button class="btn btn-outline btn-sm">+ Игрока</button>
      </div>
      <h4>📋 Последние действия:</h4>
      <p style="color:var(--text-muted);">• Новость: "${newsData[0].title}" — ${newsData[0].date}</p>
      <p style="color:var(--text-muted);">• Ближайший матч: ${new Date(matchesData.find(m=>m.status==='upcoming').date).toLocaleDateString('ru-RU')}</p>
      <p style="color:var(--text-muted);">• Изменения в составах: обновлены данные игроков</p>
      <div class="glass-card" style="padding:14px;margin-top:12px;background:rgba(240,185,11,0.08);">
        <strong>💡 Совет:</strong> Проверьте расписание на следующую неделю — есть нераспределённые матчи.
      </div>`;
    } else if (section === 'news') {
        contentArea.innerHTML = '<h3>📰 Управление новостями</h3>' + newsData.map(n =>
            `<div class="glass-card" style="padding:14px;margin-bottom:8px;"><strong>${n.title}</strong> — ${n.date} <button class="btn btn-outline btn-sm" style="float:right;">Редактировать</button></div>`
            ).join('');
    } else if (section === 'matches') {
        contentArea.innerHTML = '<h3>📅 Управление матчами</h3>' + matchesData.slice(0, 5).map(m =>
            `<div class="glass-card" style="padding:14px;margin-bottom:8px;">Матч #${m.id} — Неделя ${m.week} <button class="btn btn-outline btn-sm" style="float:right;">Редактировать</button></div>`
            ).join('');
    } else if (section === 'teams') {
        contentArea.innerHTML = '<h3>🛡 Управление командами</h3>' + teamsData.map(t =>
            `<div class="glass-card" style="padding:14px;margin-bottom:8px;"><strong>${t.name}</strong> — ${t.city} <button class="btn btn-outline btn-sm" style="float:right;">Редактировать</button></div>`
            ).join('');
    } else if (section === 'players') {
        const allPlayers = Object.values(playersData).flat().slice(0, 8);
        contentArea.innerHTML = '<h3>👤 Управление игроками</h3>' + allPlayers.map(p =>
            `<div class="glass-card" style="padding:14px;margin-bottom:8px;">${p.name} — ${p.position} <button class="btn btn-outline btn-sm" style="float:right;">Редактировать</button></div>`
            ).join('');
    } else if (section === 'standings') {
        contentArea.innerHTML = '<h3>📊 Турнирная таблица</h3>' + [...teamsData].sort((a, b) => b.points - a.points)
            .map((t, i) =>
                `<div class="glass-card" style="padding:14px;margin-bottom:8px;">#${i+1} ${t.name} — ${t.points} очков</div>`
                ).join('');
    }
}

// ==================== COUNTDOWN ====================
function updateCountdown() {
    const upcomingMatch = matchesData.find(m => m.status === 'upcoming');
    if (!upcomingMatch) return;
    const targetDate = new Date(upcomingMatch.date).getTime();
    const ht = teamsData.find(t => t.id === upcomingMatch.home_team_id);
    const at = teamsData.find(t => t.id === upcomingMatch.away_team_id);
    document.getElementById('countdownMatchInfo').textContent = `${ht?.name||'?'} — ${at?.name||'?'} | ${new Date(upcomingMatch.date).toLocaleDateString('ru-RU',{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'})}`;

    const now = Date.now();
    let diff = targetDate - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
}

// ==================== NEWSLETTER ====================
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value.trim();
    if (email && email.includes('@') && email.includes('.')) {
        showToast('✅ Спасибо! Подтверждение отправлено на ' + email);
        document.getElementById('newsletterEmail').value = '';
    } else {
        showToast('⚠️ Пожалуйста, введите корректный e-mail.');
    }
}

function scrollToNewsletter() {
    const el = document.getElementById('newsletterSection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    if (currentPage !== 'home') navigateTo('home');
    setTimeout(() => {
        const el2 = document.getElementById('newsletterSection');
        if (el2) el2.scrollIntoView({ behavior: 'smooth' });
    }, 400);
}

// ==================== TOAST ====================
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s'; }, 2500);
    setTimeout(() => toast.remove(), 2900);
}

// ==================== INIT ====================
function init() {
    renderHomePage();
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // Handle initial hash
    const hash = window.location.hash.replace('#', '');
    if (hash === 'teams') navigateTo('teams');
    else if (hash === 'matches') navigateTo('matches');
    else if (hash === 'admin') navigateTo('admin');
    else navigateTo('home');

    // Update hash on navigation
    window.addEventListener('hashchange', () => {
        const h = window.location.hash.replace('#', '');
        if (h === 'teams') navigateTo('teams');
        else if (h === 'matches') navigateTo('matches');
        else if (h === 'admin') navigateTo('admin');
        else if (h === 'home') navigateTo('home');
    });

    // Set initial hash
    if (!window.location.hash) {
        window.location.hash = '#home';
    }
}

// Override navigateTo to update hash
const originalNavigateTo = navigateTo;
navigateTo = function(page, data) {
    window.location.hash = '#' + (page === 'team-detail' ? 'teams' : page);
    originalNavigateTo(page, data);
    if (page === 'team-detail' && data) {
        // Store team slug for persistence
        sessionStorage.setItem('currentTeamSlug', data.slug);
    }
};

document.addEventListener('DOMContentLoaded', init);

// Handle team-detail page on load from hash
window.addEventListener('load', () => {
    const storedSlug = sessionStorage.getItem('currentTeamSlug');
    if (storedSlug && window.location.hash === '#teams') {
        const team = teamsData.find(t => t.slug === storedSlug);
        if (team) {
            setTimeout(() => navigateTo('team-detail', team), 100);
        }
    }
});

console.log('🏒 ЛХЛ — Любительская Хоккейная Лига. Сайт загружен!');
console.log('📄 Страницы: Главная, Команды, Матчи, Админ-панель');
console.log('🎨 Стиль: glassmorphism, KHL accent colors, Exo 2 font');