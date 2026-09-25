document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        window.location.href = 'index.html';
        return;
    }

    const project = MY_GAMES.find(g => g.id === projectId);

    if (!project) {
        window.location.href = 'index.html';
        return;
    }

    const getLangValue = (obj, key) => {
        return (typeof currentLanguage !== 'undefined' && currentLanguage === 'en' && obj[key + '_en']) ? obj[key + '_en'] : obj[key];
    };

    const renderTags = (tags) => tags.map(tag => `<span class="tag ${tag.class}">${tag.name}</span>`).join('');

    function renderProjectDetails() {
        // We use translations object from i18n.js if needed
        const lang = (typeof currentLanguage !== 'undefined') ? currentLanguage : 'es';
        const tDuration = lang === 'en' ? 'Duration' : 'Duración';
        const tStatus = lang === 'en' ? 'Status' : 'Estado';
        const tType = lang === 'en' ? 'Type' : 'Tipo';
        const tPlay = lang === 'en' ? 'Play Now →' : 'Jugar Ahora →';
        const tBack = lang === 'en' ? '← Back to Portfolio' : '← Volver al Portfolio';

        document.querySelector('.project-back').textContent = tBack;
        
        document.title = `Abelirre | ${getLangValue(project, 'title')}`;
        document.getElementById('project-title').textContent = getLangValue(project, 'title');
        
        // Background Image
        document.getElementById('project-bg').src = project.image || `https://placehold.co/1920x1080/2a2a3d/fff?text=${encodeURIComponent(project.title)}`;

        document.getElementById('project-tags-container').innerHTML = renderTags(project.tags);

        document.getElementById('project-extended-desc').innerHTML = getLangValue(project, 'extendedDescription') || getLangValue(project, 'description');

        const statsHtml = `
            <div class="game-stats-row" style="flex-direction: column; gap: 20px; border-top: none; padding-top: 0;">
                <div class="game-stat" style="width: 100%;">
                    <span class="game-stat-title">${tDuration}</span>
                    <span class="game-stat-value">${getLangValue(project, 'duration')}</span>
                </div>
                <div class="game-stat" style="width: 100%;">
                    <span class="game-stat-title">${tStatus}</span>
                    <span class="game-stat-value">${getLangValue(project, 'status')}</span>
                </div>
                <div class="game-stat" style="width: 100%;">
                    <span class="game-stat-title">${tType}</span>
                    <span class="game-stat-value">${project.type}</span>
                </div>
            </div>
        `;
        document.getElementById('project-stats').innerHTML = statsHtml;

        if (project.link && project.link !== '#') {
            document.getElementById('project-actions').innerHTML = `
                <a href="${project.link}" target="_blank" class="btn btn-primary" style="width: 100%; display: block; text-align: center;">
                    ${tPlay}
                </a>
            `;
        } else {
            document.getElementById('project-actions').innerHTML = '';
        }
    }

    // Since i18n triggers immediately on load, we can render right away
    renderProjectDetails();
    
    // And listen to language changes
    window.addEventListener('languageChanged', renderProjectDetails);
});
