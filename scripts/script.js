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

    // FETCH YOUTUBE VIDEOS (YouTube Data API v3 oficial con soporte de caché)
    const ytContainer = document.getElementById('youtube-container');
    const UPLOADS_PLAYLIST_ID = YOUTUBE_CHANNEL_ID.replace(/^UC/, 'UU');
    const YT_VIDEOS_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=4&key=${API_KEY}`;
    const YT_CACHE_KEY = 'cached_youtube_videos_v1';
    const YT_CACHE_EXPIRY = 60 * 60 * 1000; // 1 hora de caché en localStorage para optimizar cuota y velocidad

    let loadedVideos = null;

    const renderYouTubeVideos = (videos) => {
        if (!ytContainer || !videos || videos.length === 0) {
            if (ytContainer) {
                ytContainer.innerHTML = `<p class="text-center">${typeof currentLanguage !== 'undefined' && currentLanguage === 'en' ? 'Could not load videos.' : 'No se pudieron cargar los vídeos.'}</p>`;
            }
            return;
        }

        const isEn = typeof currentLanguage !== 'undefined' && currentLanguage === 'en';
        ytContainer.innerHTML = videos.map(video => {
            const snippet = video.snippet;
            const videoId = snippet.resourceId ? snippet.resourceId.videoId : '';
            const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
            const thumbnail = snippet.thumbnails?.maxres?.url || snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
            const pubDate = new Date(snippet.publishedAt).toLocaleDateString(isEn ? 'en-US' : 'es-ES');

            return `
            <div class="project-card animate-on-scroll">
                <div class="card-media">
                    <a href="${videoLink}" target="_blank" rel="noopener noreferrer" style="display:block; width:100%; height:100%; position:relative;">
                        <img src="${thumbnail}" alt="${snippet.title}" style="width:100%; height:100%; object-fit:cover; display:block;">
                        <div class="play-overlay">▶</div>
                    </a>
                </div>
                <div class="card-content">
                    <h3 class="card-title" style="font-size: 1rem; line-height: 1.3; margin-bottom: 10px;">${snippet.title}</h3>
                    <p class="card-desc">${isEn ? 'Published on: ' : 'Publicado el: '}${pubDate}</p>
                    <a href="${videoLink}" target="_blank" rel="noopener noreferrer" class="card-link">${isEn ? 'Watch on YouTube →' : 'Ver en YouTube →'}</a>
                </div>
            </div>
            `;
        }).join('');

        observeAnimations();
    };

    if (ytContainer) {
        // 1. Intentar cargar desde caché para carga instantánea
        try {
            const cached = localStorage.getItem(YT_CACHE_KEY);
            if (cached) {
                const parsed = JSON.parse(cached);
                if (Date.now() - parsed.timestamp < YT_CACHE_EXPIRY && Array.isArray(parsed.data)) {
                    loadedVideos = parsed.data;
                    renderYouTubeVideos(loadedVideos);
                }
            }
        } catch (e) {
            console.warn('No se pudo acceder al almacenamiento local:', e);
        }

        // 2. Si no hay caché válida o ha expirado, consultar la API oficial
        if (!loadedVideos && API_KEY) {
            fetch(YT_VIDEOS_URL)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`YouTube API error: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.items && data.items.length > 0) {
                        loadedVideos = data.items;
                        renderYouTubeVideos(loadedVideos);
                        try {
                            localStorage.setItem(YT_CACHE_KEY, JSON.stringify({
                                data: loadedVideos,
                                timestamp: Date.now()
                            }));
                        } catch (e) { /* localStorage deshabilitado o lleno */ }
                    } else {
                        ytContainer.innerHTML = `<p class="text-center">${typeof currentLanguage !== 'undefined' && currentLanguage === 'en' ? 'Could not load videos.' : 'No se pudieron cargar los vídeos.'}</p>`;
                    }
                })
                .catch(error => {
                    console.error('Error cargando YouTube:', error);
                    ytContainer.innerHTML = `<p class="text-center">${typeof currentLanguage !== 'undefined' && currentLanguage === 'en' ? 'YouTube connection error.' : 'Error de conexión con YouTube.'}</p>`;
                });
        }

        // 3. Re-renderizar si el usuario cambia de idioma
        window.addEventListener('languageChanged', () => {
            if (loadedVideos) {
                renderYouTubeVideos(loadedVideos);
            }
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

                    const subsEl = document.getElementById('stat-subs');
                    const viewsEl = document.getElementById('stat-views');
                    const videosEl = document.getElementById('stat-videos');
                    const hoursEl = document.getElementById('stat-hours');

                    if (subsEl) subsEl.setAttribute('data-target', stats.subscriberCount);
                    if (viewsEl) viewsEl.setAttribute('data-target', stats.viewCount);
                    if (videosEl) videosEl.setAttribute('data-target', stats.videoCount);
                    if (hoursEl) hoursEl.setAttribute('data-target', MANUAL_WATCH_HOURS);

                    [subsEl, viewsEl, videosEl, hoursEl].forEach(el => {
                        if (el && el.classList.contains('visible') && el.innerText === '0') {
                            runCountUp(el);
                        }
                    });
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

    // NAVBAR HIDE/SHOW ON SCROLL
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        
        // Prevent hiding when menu is open
        const isMenuOpen = document.querySelector('.nav-menu.active');
        if (isMenuOpen) return;

        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }
        lastScrollY = window.scrollY;
    }, { passive: true });

});