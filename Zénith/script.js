document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       0. CHARGEMENT DYNAMIQUE DE LA CONFIGURATION
       ========================================== */
    const loadConfiguration = () => {
        if (typeof FACTION_CONFIG === 'undefined') {
            console.warn("FACTION_CONFIG n'est pas définie. Utilisation des données par défaut.");
            return;
        }

        // A. Infos Générales
        const heroTagline = document.getElementById('hero-tagline');
        const heroTitle = document.getElementById('hero-title');
        const heroDesc = document.getElementById('hero-desc');

        if (heroTagline && FACTION_CONFIG.general.slogan) heroTagline.textContent = FACTION_CONFIG.general.slogan;
        if (heroTitle && FACTION_CONFIG.general.nom) heroTitle.textContent = FACTION_CONFIG.general.nom;
        if (heroDesc && FACTION_CONFIG.general.description) heroDesc.textContent = FACTION_CONFIG.general.description;

        // Mettre à jour les liens de réseaux sociaux dans le footer si définis
        const footerDiscord = document.querySelector('footer .fa-discord')?.parentElement;
        const footerYoutube = document.querySelector('footer .fa-youtube')?.parentElement;
        const footerTwitter = document.querySelector('footer .fa-twitter')?.parentElement;

        if (footerDiscord && FACTION_CONFIG.general.lienDiscord) footerDiscord.href = FACTION_CONFIG.general.lienDiscord;
        if (footerYoutube && FACTION_CONFIG.general.lienYoutube) footerYoutube.href = FACTION_CONFIG.general.lienYoutube;
        if (footerTwitter && FACTION_CONFIG.general.lienTwitter) footerTwitter.href = FACTION_CONFIG.general.lienTwitter;

        // B. Statistiques
        const statsContainer = document.getElementById('stats-container');
        if (statsContainer && FACTION_CONFIG.stats) {
            statsContainer.innerHTML = FACTION_CONFIG.stats.map((stat, index) => `
                <div class="glass-card stat-card scroll-reveal ${index % 2 === 1 ? 'delay-200' : ''}">
                    <div class="stat-number">${stat.valeur}</div>
                    <div class="stat-label">${stat.label}</div>
                </div>
            `).join('');
        }

        // C. Roster (Membres)
        const rosterContainer = document.getElementById('roster-container');
        if (rosterContainer && FACTION_CONFIG.roster) {
            const rankClasses = {
                'chef': 'rank-chef',
                'officier': 'rank-officier',
                'membre': 'rank-membre',
                'recrue': 'rank-recrue'
            };
            const friendlyRanks = {
                'chef': 'Chef',
                'officier': 'Officier',
                'membre': 'Membre',
                'recrue': 'Recrue'
            };

            rosterContainer.innerHTML = FACTION_CONFIG.roster.map(member => {
                const rankClass = rankClasses[member.rang] || 'rank-membre';
                const friendlyRank = friendlyRanks[member.rang] || 'Membre';
                const youtubeLink = member.youtube ? `<a href="${member.youtube}" target="_blank" class="member-social-link"><i class="fab fa-youtube"></i></a>` : '';
                
                return `
                    <div class="glass-card member-card" data-role="${member.role}">
                        <div class="member-avatar-wrapper">
                            <div class="member-avatar-bg"></div>
                            <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${member.minecraftSeed}" alt="Avatar de ${member.nom}" class="member-avatar">
                        </div>
                        <span class="member-rank ${rankClass}">${friendlyRank}</span>
                        <h4 class="member-name">${member.nom}</h4>
                        <p class="member-specialty">${member.specialite}</p>
                        <div class="member-socials">
                            <a href="#" title="Discord: ${member.discord}" class="member-social-link"><i class="fab fa-discord"></i></a>
                            ${youtubeLink}
                        </div>
                    </div>
                `;
            }).join('');
        }
    };

    // Charger les éléments
    loadConfiguration();

    /* ==========================================
       1. MOBILE HAMBURGER MENU
       ========================================== */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    /* ==========================================
       2. SCROLL-AWARE NAVBAR
       ========================================== */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ==========================================
       3. SCROLL REVEAL ANIMATION (SÉLECTEURS DYNAMIQUES)
       ========================================== */
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight * 0.85) {
                el.classList.add('active');
            }
        });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
});
