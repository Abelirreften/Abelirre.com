document.addEventListener('DOMContentLoaded', () => {

    // 1. CONFIGURACIÓN
    const YOUTUBE_CHANNEL_ID = "UCEfEyfnWI3GBCrByIXBnMEw"; // ID YouTube
    const API_KEY = "AIzaSyA9IqIgrr_-VsaGevqxSDi9sEUbXUbGULg";

    // 2. DATOS DE JUEGOS Y PROYECTOS (Movidos a data.js)

    // RENDER PROYECTOS
    const gamesContainer = document.getElementById('games-container');
    const featuredContainer = document.getElementById('featured-project-container');

    const renderTags = (tags) => tags.map(tag => `<span class="tag ${tag.class}">${tag.name}</span>`).join('');
    const renderWip = (isWip) => isWip ? `<div class="ribbon-wrapper"><div class="ribbon">WIP</div></div>` : '';

    // ANIMACIONES SCROLL Y COUNTUP (Movido arriba para evitar ReferenceError)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Si es un número estadístico, dispara el CountUp
                if (entry.target.classList.contains('stat-number')) {
                    if (typeof runCountUp === 'function') {
                        runCountUp(entry.target);
                    }
                    observer.unobserve(entry.target); // Solo animar una vez
                }
            }
        });
    }, observerOptions);

    function observeAnimations() {
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
        document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
    }

    const getLangValue = (obj, key) => {
        return (typeof currentLanguage !== 'undefined' && currentLanguage === 'en' && obj[key + '_en']) ? obj[key + '_en'] : obj[key];
    };

    const renderStatsRow = (game) => `
        <div class="game-stats-row">
            <div class="game-stat">
                <span class="game-stat-title" data-i18n="stat_duration">${typeof currentLanguage !== 'undefined' && currentLanguage === 'en' ? 'Duration' : 'Duración'}</span>
                <span class="game-stat-value">${getLangValue(game, 'duration')}</span>
            </div>
            <div class="game-stat">
                <span class="game-stat-title" data-i18n="stat_status">${typeof currentLanguage !== 'undefined' && currentLanguage === 'en' ? 'Status' : 'Estado'}</span>
                <span class="game-stat-value">${getLangValue(game, 'status')}</span>
            </div>
            <div class="game-stat">
                <span class="game-stat-title" data-i18n="stat_type">${typeof currentLanguage !== 'undefined' && currentLanguage === 'en' ? 'Type' : 'Tipo'}</span>
                <span class="game-stat-value">${game.type}</span>
            </div>
        </div>
    `;

    function renderProjects() {
        if (featuredContainer) {
            const featuredProject = MY_GAMES.find(g => g.isFeatured);
            if (featuredProject) {
                featuredContainer.innerHTML = `
                    <div class="featured-project">
                        ${renderWip(featuredProject.isInDevelopment)}
                        <div class="featured-media">
                            <img src="${featuredProject.image}" alt="${getLangValue(featuredProject, 'title')}" onerror="this.style.display='none';">
                        </div>
                        <div class="featured-content">
                            <span class="featured-label">${typeof currentLanguage !== 'undefined' && currentLanguage === 'en' ? 'Featured Project' : 'Proyecto Principal'}</span>
                            <h3 style="font-size: 2rem; margin-bottom: 10px;">${getLangValue(featuredProject, 'title')}</h3>
                            <div class="project-tags">
                                ${renderTags(featuredProject.tags)}
                            </div>
                            <p style="color: var(--text-secondary); margin-bottom: 15px;">${getLangValue(featuredProject, 'description')}</p>
                            
                            ${renderStatsRow(featuredProject)}
                            
                            <a href="project.html?id=${featuredProject.id}" class="btn btn-primary" style="align-self: flex-start; margin-top: 10px; font-size: 0.85rem; padding: 10px 24px;">${typeof currentLanguage !== 'undefined' && currentLanguage === 'en' ? 'More info →' : 'Más información →'}</a>
                        </div>
                    </div>
                `;
            }
        }

        if (gamesContainer) {
            const regularGames = MY_GAMES.filter(g => !g.isFeatured);
            gamesContainer.innerHTML = regularGames.map(game => `
                <div class="project-card animate-on-scroll" style="position:relative;">
                    ${renderWip(game.isInDevelopment)}
                    <div class="card-media">
                        <img src="${game.image}" alt="${getLangValue(game, 'title')}" onerror="this.style.display='none';this.parentElement.style.background='#2a2a3d'">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${getLangValue(game, 'title')}</h3>
                        <div class="project-tags">
                            ${renderTags(game.tags)}
                        </div>
                        <p class="card-desc">${getLangValue(game, 'description')}</p>
                        
                        ${renderStatsRow(game)}
                        
                        <div style="margin-top: auto; display: flex; gap: 10px;">
                            <a href="project.html?id=${game.id}" class="btn btn-secondary" style="font-size: 0.85rem; padding: 9px 20px;">${typeof currentLanguage !== 'undefined' && currentLanguage === 'en' ? 'More info' : 'Más información'}</a>
                            <a href="${game.link}" target="_blank" class="card-link" style="display:flex; align-items:center; font-size: 0.85rem;">${typeof currentLanguage !== 'undefined' && currentLanguage === 'en' ? 'Play Now →' : 'Jugar Ahora →'}</a>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Re-bind animations for newly generated items
            if (typeof observeAnimations === 'function') {
                observeAnimations();
            }
        }
    }

    // Call initially
    renderProjects();
    
    // Listen for language changes
    window.addEventListener('languageChanged', renderProjects);

    // FETCH YOUTUBE VIDEOS
    const ytContainer = document.getElementById('youtube-container');
    const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
    const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

    if (ytContainer) {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'ok') {
                    const videos = data.items.slice(0, 4); // Mostrar últimos 4 vídeos para diseño compacto
                    ytContainer.innerHTML = videos.map(video => {
                        const videoId = video.link.split('v=')[1];
                        const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
                        return `
                        <div class="project-card animate-on-scroll">
                            <div class="card-media">
                                <a href="${video.link}" target="_blank" style="display:block; width:100%; height:100%; position:relative;">
                                    <img src="${thumbnail}" alt="${video.title}" style="width:100%; height:100%; object-fit:cover; display:block;">
                                    <div class="play-overlay">▶</div>
                                </a>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title" style="font-size: 1rem; line-height: 1.3; margin-bottom: 10px;">${video.title}</h3>
                                <p class="card-desc">Publicado el: ${new Date(video.pubDate).toLocaleDateString()}</p>
                                <a href="${video.link}" target="_blank" class="card-link">Ver en YouTube →</a>
                            </div>
                        </div>
                        `;
                    }).join('');
                    observeAnimations();
                } else {
                    ytContainer.innerHTML = `<p class="text-center">No se pudieron cargar los vídeos.</p>`;
                }
            })
            .catch(error => {
                console.error('Error cargando YouTube:', error);
                ytContainer.innerHTML = `<p class="text-center">Error de conexión con YouTube.</p>`;
            });
    }

    // YOUTUBE STATS COUNTUP
    const statsContainer = document.querySelector('.stats-grid');
    const MANUAL_WATCH_HOURS = 25700;

    // Función de CountUp
    const runCountUp = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const stepTime = Math.abs(Math.floor(duration / 50)); // 50 frames

        let current = 0;
        const increment = target / 50;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.innerText = new Intl.NumberFormat('es-ES').format(target) + (el.id === 'stat-hours' ? '+' : '');
                clearInterval(timer);
            } else {
                el.innerText = new Intl.NumberFormat('es-ES').format(Math.ceil(current));
            }
        }, stepTime);
    };

    if (statsContainer && API_KEY) {
        const STATS_URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${API_KEY}`;

        fetch(STATS_URL)
            .then(res => res.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const stats = data.items[0].statistics;

                    document.getElementById('stat-subs').setAttribute('data-target', stats.subscriberCount);
                    document.getElementById('stat-views').setAttribute('data-target', stats.viewCount);
                    document.getElementById('stat-videos').setAttribute('data-target', stats.videoCount);
                    document.getElementById('stat-hours').setAttribute('data-target', MANUAL_WATCH_HOURS);
                }
            })
            .catch(err => console.error("Error cargando stats:", err));
    }



    // CONFIG MENU EN MÓVIL
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('active'));
        });
    }
});