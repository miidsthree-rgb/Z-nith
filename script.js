document.addEventListener('DOMContentLoaded', () => {

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

    // Close mobile menu when clicking a link
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
       3. SCROLL REVEAL ANIMATION
       ========================================== */
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Reveal element when it is 15% visible from bottom
            if (rect.top <= windowHeight * 0.85) {
                el.classList.add('active');
            }
        });
    };

    // Run once on load and then on scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    /* ==========================================
       4. ROSTER FILTERING
       ========================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const memberCards = document.querySelectorAll('.member-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to current button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            memberCards.forEach(card => {
                const cardRole = card.getAttribute('data-role');
                
                // Reset card transition
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
                    }, 400); // Match CSS transition duration
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

            // Get form fields
            const username = document.getElementById('username').value.trim();
            const age = parseInt(document.getElementById('age').value);
            const role = document.getElementById('role').value;
            const playtime = document.getElementById('playtime').value;
            const discord = document.getElementById('discord').value.trim();
            const motivations = document.getElementById('motivations').value.trim();

            // Simple validation
            if (age < 12) {
                showFormMessage("Erreur : Vous devez avoir au moins 12 ans pour postuler.", "error");
                return;
            }

            // Simulate form submission (e.g. sending to webhook or server)
            const submitBtn = applyForm.querySelector('.form-submit-btn');
            const originalBtnText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = "Transmission en cours...";
            submitBtn.style.opacity = "0.7";

            setTimeout(() => {
                // Mock success response
                showFormMessage(`Merci ${username} ! Votre candidature pour le rôle de ${getFriendlyRoleName(role)} a bien été transmise à nos officiers. Nous vous contacterons sur Discord (${discord}) très prochainement.`, "success");
                
                // Reset form
                applyForm.reset();
                
                // Restore button
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                submitBtn.style.opacity = "1";

                // Scroll to top of form section to see the message
                document.getElementById('recruitment').scrollIntoView({ behavior: 'smooth' });

            }, 2000); // 2 second delay to simulate server call
        });
    }

    function showFormMessage(message, type) {
        formMsg.textContent = message;
        formMsg.className = `form-message ${type}`;
        formMsg.style.display = 'block';
        
        // Hide message after 8 seconds if it's a success
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
