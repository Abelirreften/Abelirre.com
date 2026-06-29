document.addEventListener('DOMContentLoaded', () => {

    // 1. CONFIGURACIÓN
    const YOUTUBE_CHANNEL_ID = "UCEfEyfnWI3GBCrByIXBnMEw"; // ID YouTube
    const API_KEY = "AIzaSyA9IqIgrr_-VsaGevqxSDi9sEUbXUbGULg";

    // 2. DATOS DE JUEGOS Y PROYECTOS
    const MY_GAMES = [
        {
            title: "Proyecto Final de Grado",
            description: "Juego en desarrollo. Metroidvania basado en 'Mistborn' de Brandon Sanderson y Blasphemous II.",
            extendedDescription: "Este es el trabajo de final de grado en el que estoy poniendo en práctica todos los conocimientos adquiridos durante los últimos años. El proyecto busca crear un metroidvania único, centrado en una atmósfera cuidada, unas mecánicas innovadoras basadas en el sistema alomántico de 'Mistborn' y un estilo artístico que fusione la crudeza de Blasphemous II con la elegancia de la ambientación creada por Sanderson. Actualmente en estado de conceptualización.",
            image: "assets/images/Proximamente_TFG.png",
            link: "#",
            isFeatured: true,
            isInDevelopment: true,
            tags: [{ name: "Unity", class: "t-unity" }, { name: "2D", class: "t-2d" }, { name: "Metroidvania", class: "t-metroidvania" }],
            duration: "-",
            status: "En desarrollo",
            type: "TFG"
        },
        {
            title: "They Wont Retain Me",
            description: "El infierno no quiere que escapes. Sobrevive a hordas de pecadores y demonios mientras construyes builds cada vez más poderosas.",
            image: "assets/images/TWRM_Portada.png",
            link: "https://lucas25gg.itch.io/they-wont-retain-me",
            isFeatured: false,
            isInDevelopment: false,
            tags: [{ name: "Unreal Engine", class: "t-unreal" }, { name: "3D", class: "t-3d" }, { name: "Acción", class: "t-accion" }, { name: "Survivor-like", class: "t-platformer" }],
            duration: "3 meses",
            status: "Acabado",
            type: "Uni Project"
        },
        {
            title: "Blood Runner",
            description: "Un platformer 2D pixel art con enemigos y mucho frenetismo. Proyecto universitario.",
            image: "assets/images/BloodRunner_Portada.png",
            link: "https://abelirre.itch.io/bloodrunner",
            isFeatured: false,
            isInDevelopment: false,
            tags: [{ name: "Godot", class: "t-godot" }, { name: "2D", class: "t-2d" }, { name: "Pixel Art", class: "t-pixel" }, { name: "Plataformas", class: "t-platformer" }],
            duration: "3 meses",
            status: "Acabado",
            type: "Uni Project"
        },
        {
            title: "Desinformator",
            description: "Juego 3D en primera persona en el que el jugador está en un sótano intentando desinformar al mundo entero.",
            image: "assets/images/Desinformator_Portada.png",
            link: "https://abelirre.itch.io/desinformator",
            isFeatured: false,
            isInDevelopment: false,
            tags: [{ name: "Godot", class: "t-godot" }, { name: "3D", class: "t-3d" }, { name: "Estrategia", class: "t-estrategia" }],
            duration: "1 mes",
            status: "Acabado",
            type: "JAM"
        },
        {
            title: "The Warehouse",
            description: "Adéntrate en un almacén aislado en las montañas y descubre los secretos más oscuros que allí se guardan.",
            image: "assets/images/TheWarehouse_Portada.png",
            link: "https://abelirre.itch.io/the-warehouse",
            isFeatured: false,
            isInDevelopment: false,
            tags: [{ name: "Unity", class: "t-unity" }, { name: "3D", class: "t-3d" }, { name: "Aventura", class: "t-aventura" }, { name: "Terror", class: "t-terror" }],
            duration: "2 meses",
            status: "Acabado",
            type: "Uni Project"
        },
    ];

    // RENDER PROYECTOS
    const gamesContainer = document.getElementById('games-container');
    const featuredContainer = document.getElementById('featured-project-container');

    const renderTags = (tags) => tags.map(tag => `<span class="tag ${tag.class}">${tag.name}</span>`).join('');
    const renderWip = (isWip) => isWip ? `<div class="ribbon-wrapper"><div class="ribbon">WIP</div></div>` : '';

    const renderStatsRow = (game) => `
        <div class="game-stats-row">
            <div class="game-stat">
                <span class="game-stat-title">Duración</span>
                <span class="game-stat-value">${game.duration}</span>
            </div>
            <div class="game-stat">
                <span class="game-stat-title">Estado</span>
                <span class="game-stat-value">${game.status}</span>
            </div>
            <div class="game-stat">
                <span class="game-stat-title">Tipo</span>
                <span class="game-stat-value">${game.type}</span>
            </div>
        </div>
    `;

    // FUNCIÓN PARA EXPANDIR PROYECTO PRINCIPAL
    window.toggleFeaturedDesc = function () {
        const descDiv = document.getElementById('featured-extended-desc');
        const btn = document.getElementById('featured-btn');
        if (descDiv.style.display === 'none' || descDiv.style.display === '') {
            descDiv.style.display = 'block';
            btn.innerHTML = 'Ver menos ↑';
        } else {
            descDiv.style.display = 'none';
            btn.innerHTML = 'Saber Más →';
        }
    };

    if (featuredContainer) {
        const featuredProject = MY_GAMES.find(g => g.isFeatured);
        if (featuredProject) {
            featuredContainer.innerHTML = `
                <div class="featured-project">
                    ${renderWip(featuredProject.isInDevelopment)}
                    <div class="featured-media">
                        <img src="${featuredProject.image}" alt="${featuredProject.title}" onerror="this.style.display='none';">
                    </div>
                    <div class="featured-content">
                        <span class="featured-label">Proyecto Principal</span>
                        <h3 style="font-size: 2rem; margin-bottom: 10px;">${featuredProject.title}</h3>
                        <div class="project-tags">
                            ${renderTags(featuredProject.tags)}
                        </div>
                        <p style="color: var(--text-secondary); margin-bottom: 15px;">${featuredProject.description}</p>
                        
                        ${renderStatsRow(featuredProject)}
                        
                        <div id="featured-extended-desc" class="extended-desc">
                            ${featuredProject.extendedDescription || 'Más detalles próximamente...'}
                        </div>
                        
                        <button id="featured-btn" onclick="toggleFeaturedDesc()" class="btn btn-primary" style="align-self: flex-start; margin-top: 10px;">Saber Más →</button>
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
                    <img src="${game.image}" alt="${game.title}" onerror="this.style.display='none';this.parentElement.style.background='#2a2a3d'">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${game.title}</h3>
                    <div class="project-tags">
                        ${renderTags(game.tags)}
                    </div>
                    <p class="card-desc">${game.description}</p>
                    
                    ${renderStatsRow(game)}
                    
                    <a href="${game.link}" target="_blank" class="card-link" style="margin-top: auto;">Jugar Ahora →</a>
                </div>
            </div>
        `).join('');
    }

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

    // ANIMACIONES SCROLL Y COUNTUP
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Si es un número estadístico, dispara el CountUp
                if (entry.target.classList.contains('stat-number')) {
                    runCountUp(entry.target);
                    observer.unobserve(entry.target); // Solo animar una vez
                }
            }
        });
    }, observerOptions);

    function observeAnimations() {
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
        document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
    }
    observeAnimations();

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