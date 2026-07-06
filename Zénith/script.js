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

        // D. Objectifs
        const objectivesContainer = document.getElementById('objectives-container');
        if (objectivesContainer && FACTION_CONFIG.objectives) {
            objectivesContainer.innerHTML = FACTION_CONFIG.objectives.map((obj, index) => {
                const delayClass = index % 3 === 1 ? 'delay-100' : (index % 3 === 2 ? 'delay-200' : '');
                const isCompleted = obj.pourcentage === 100;
                const percentageColor = isCompleted ? 'style="color: #2ecc71;"' : '';
                
                return `
                    <div class="glass-card obj-card scroll-reveal ${delayClass}">
                        <div class="obj-header">
                            <span class="obj-icon"><i class="fas ${obj.icone}"></i></span>
                            <h4 class="obj-title">${obj.titre}</h4>
                        </div>
                        <div class="obj-progress-container">
                            <div class="obj-progress-bar" style="width: ${obj.pourcentage}%;"></div>
                        </div>
                        <div class="obj-status">
                            <span>${obj.statut}</span>
                            <span class="obj-percentage" ${percentageColor}>${obj.pourcentage}%</span>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // E. Galerie
        const galleryContainer = document.getElementById('gallery-container');
        if (galleryContainer && FACTION_CONFIG.gallery) {
            galleryContainer.innerHTML = FACTION_CONFIG.gallery.map(item => `
                <div class="gallery-item">
                    <img src="${item.image}" alt="${item.titre}" class="gallery-img">
                    <div class="gallery-overlay">
                        <span class="gallery-tag">${item.tag}</span>
                        <h4 class="gallery-title">${item.titre}</h4>
                    </div>
                </div>
            `).join('');
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
    // On sélectionne après avoir généré les éléments dynamiques !
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

    /* ==========================================
       4. ROSTER FILTERING (SÉLECTEURS DYNAMIQUES)
       ========================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    // On sélectionne les cartes générées dynamiquement !
    const memberCards = document.querySelectorAll('.member-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            memberCards.forEach(card => {
                const cardRole = card.getAttribute('data-role');
                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

                if (filterValue === 'all') {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else if (filterValue === 'chef' && cardRole === 'chef') {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else if (cardRole === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 400);
                }
            });
        });
    });

    /* ==========================================
       5. RECRUITMENT FORM HANDLER
       ========================================== */
    const applyForm = document.getElementById('apply-form');
    const formMsg = document.getElementById('form-msg');

    if (applyForm) {
        applyForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value.trim();
            const age = parseInt(document.getElementById('age').value);
            const role = document.getElementById('role').value;
            const playtime = document.getElementById('playtime').value;
            const discord = document.getElementById('discord').value.trim();
            const motivations = document.getElementById('motivations').value.trim();

            if (age < 12) {
                showFormMessage("Erreur : Vous devez avoir au moins 12 ans pour postuler.", "error");
                return;
            }

            const submitBtn = applyForm.querySelector('.form-submit-btn');
            const originalBtnText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = "Transmission en cours...";
            submitBtn.style.opacity = "0.7";

            setTimeout(() => {
                showFormMessage(`Merci ${username} ! Votre candidature pour le rôle de ${getFriendlyRoleName(role)} a bien été transmise à nos officiers. Nous vous contacterons sur Discord (${discord}) très prochainement.`, "success");
                applyForm.reset();
                
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                submitBtn.style.opacity = "1";

                document.getElementById('recruitment').scrollIntoView({ behavior: 'smooth' });
            }, 2000);
        });
    }

    function showFormMessage(message, type) {
        formMsg.textContent = message;
        formMsg.className = `form-message ${type}`;
        formMsg.style.display = 'block';
        
        if (type === 'success') {
            setTimeout(() => {
                formMsg.style.opacity = '0';
                setTimeout(() => {
                    formMsg.style.display = 'none';
                    formMsg.style.opacity = '1';
                }, 500);
            }, 8000);
        }
    }

    function getFriendlyRoleName(role) {
        const roles = {
            'farmeur': 'Farmeur',
            'pvp': 'Combattant PvP',
            'builder': 'Builder',
            'pilleur': 'Pilleur'
        };
        return roles[role] || role;
    }
});
