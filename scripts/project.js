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
        const renderImage = (imgData, altText) => {
            let src = typeof imgData === 'string' ? imgData : imgData.src;
            let caption = typeof imgData === 'object' ? getLangValue(imgData, 'caption') : '';
            let imgHtml = `<img src="${src}" alt="${altText}" class="lightbox-trigger" data-caption="${caption || ''}">`;
            if (caption) {
                return `<div class="image-caption-container">${imgHtml}<span class="image-caption">${caption}</span></div>`;
            }
            return imgHtml;
        };

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
        const bgImage = document.getElementById('project-bg');
        bgImage.src = project.coverImage || project.image || `https://placehold.co/1920x1080/2a2a3d/fff?text=${encodeURIComponent(project.title)}`;
        bgImage.onerror = function() { this.src = `https://placehold.co/1920x1080/2a2a3d/fff?text=${encodeURIComponent(project.title)}`; };

        document.getElementById('project-tags-container').innerHTML = renderTags(project.tags);

        document.getElementById('project-extended-desc').innerHTML = getLangValue(project, 'extendedDescription') || getLangValue(project, 'description');

        // Trailer
        const trailerContainer = document.getElementById('project-trailer-container');
        if (project.trailer) {
            let videoId = project.trailer;
            if(videoId.includes('v=')) videoId = videoId.split('v=')[1].split('&')[0];
            else if(videoId.includes('youtu.be/')) videoId = videoId.split('youtu.be/')[1].split('?')[0];

            document.getElementById('project-trailer').innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            trailerContainer.style.display = 'block';
        } else {
            trailerContainer.style.display = 'none';
        }

        // Screenshots
        const screenshotsContainer = document.getElementById('project-screenshots-container');
        if (project.screenshots && project.screenshots.length > 0) {
            document.getElementById('project-screenshots').innerHTML = project.screenshots.map(img => renderImage(img, "Screenshot")).join('');
            screenshotsContainer.style.display = 'block';
        } else {
            screenshotsContainer.style.display = 'none';
        }

        // Role
        const roleContainer = document.getElementById('project-role-container');
        const roleData = getLangValue(project, 'role');
        if (roleData && roleData.title) {
            document.getElementById('project-role-title').textContent = roleData.title;
            document.getElementById('project-role-desc').innerHTML = roleData.description;
            const roleImagesContainer = document.getElementById('project-role-images');
            if (project.roleImage) {
                const images = Array.isArray(project.roleImage) ? project.roleImage : [project.roleImage];
                roleImagesContainer.innerHTML = images.map(img => renderImage(img, "Rol Image")).join('');
                roleImagesContainer.style.display = 'grid';
            } else {
                roleImagesContainer.style.display = 'none';
            }
            roleContainer.style.display = 'block';
        } else {
            roleContainer.style.display = 'none';
        }

        // Skills Learned
        const skillsContainer = document.getElementById('project-skills-container');
        const skillsData = getLangValue(project, 'skillsLearned');
        if (skillsData) {
            document.getElementById('project-skills').innerHTML = skillsData;
            const skillsImagesContainer = document.getElementById('project-skills-images');
            if (project.skillsImage) {
                const images = Array.isArray(project.skillsImage) ? project.skillsImage : [project.skillsImage];
                skillsImagesContainer.innerHTML = images.map(img => renderImage(img, "Skills Image")).join('');
                skillsImagesContainer.style.display = 'grid';
            } else {
                skillsImagesContainer.style.display = 'none';
            }
            skillsContainer.style.display = 'block';
        } else {
            skillsContainer.style.display = 'none';
        }

        // Technical Challenges
        const challengesContainer = document.getElementById('project-challenges-container');
        const challengesData = getLangValue(project, 'techChallenges');
        if (challengesData && challengesData.length > 0) {
            document.getElementById('project-challenges').innerHTML = challengesData.map(c => {
                let imagesHtml = '';
                if (c.image) {
                    const images = Array.isArray(c.image) ? c.image : [c.image];
                    imagesHtml = `<div class="images-grid" style="margin-top: 15px;">
                        ${images.map(img => renderImage(img, "Challenge image")).join('')}
                    </div>`;
                }
                return `
                <div class="challenge-item">
                    <span class="challenge-tag">${c.tag}</span>
                    <p style="margin: 0; color: var(--text-secondary); line-height: 1.5; font-size: 0.95rem; margin-top: 10px;">${c.description}</p>
                    ${imagesHtml}
                </div>
            `}).join('');
            challengesContainer.style.display = 'block';
        } else {
            challengesContainer.style.display = 'none';
        }

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

        initLightbox();
    }

    // --- LIGHTBOX LOGIC ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxContent = document.getElementById('lightbox-content');
    
    let currentImages = [];
    let currentIndex = 0;
    let currentZoom = 1;
    
    function initLightbox() {
        const triggers = document.querySelectorAll('.lightbox-trigger');
        currentImages = Array.from(triggers).map(img => ({
            src: img.src,
            caption: img.getAttribute('data-caption') || ''
        }));
        
        // Clear previous listeners to avoid duplicates on language change
        triggers.forEach((trigger, index) => {
            const newTrigger = trigger.cloneNode(true);
            trigger.parentNode.replaceChild(newTrigger, trigger);
            newTrigger.addEventListener('click', () => openLightbox(index));
        });
    }
    
    function openLightbox(index) {
        currentIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        currentZoom = 1;
        applyZoom();
    }
    
    function updateLightboxImage() {
        lightboxImg.src = currentImages[currentIndex].src;
        const captionEl = document.getElementById('lightbox-caption');
        if (captionEl) {
            captionEl.textContent = currentImages[currentIndex].caption;
        }
        currentZoom = 1;
        applyZoom();
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateLightboxImage();
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateLightboxImage();
    }
    
    function applyZoom() {
        lightboxImg.style.transform = `scale(${currentZoom})`;
    }
    
    function zoomIn() {
        if (currentZoom < 4) {
            currentZoom += 0.5;
            applyZoom();
        }
    }
    
    function zoomOut() {
        if (currentZoom > 0.5) {
            currentZoom -= 0.5;
            applyZoom();
        }
    }
    
    if (lightbox) {
        document.getElementById('lb-close').addEventListener('click', closeLightbox);
        document.getElementById('lb-next').addEventListener('click', nextImage);
        document.getElementById('lb-prev').addEventListener('click', prevImage);
        document.getElementById('lb-zoom-in').addEventListener('click', zoomIn);
        document.getElementById('lb-zoom-out').addEventListener('click', zoomOut);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target === lightboxContent) closeLightbox();
        });
        
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === '+' || e.key === 'Add' || e.key === '=') zoomIn();
            if (e.key === '-' || e.key === 'Subtract') zoomOut();
        });
    }

    // Since i18n triggers immediately on load, we can render right away
    renderProjectDetails();
    
    // And listen to language changes
    window.addEventListener('languageChanged', renderProjectDetails);
});
