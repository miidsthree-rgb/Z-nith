// ==========================================
// CONFIGURATION DE LA FACTION ZÉNITH
// ==========================================
// Vous pouvez modifier toutes les informations ci-dessous très facilement.
// Veillez simplement à respecter les guillemets, les crochets [] et les accolades {} !

const FACTION_CONFIG = {
    // 1. Informations Générales
    general: {
        nom: "ZÉNITH",
        slogan: "Tous pour la fac",
        description: "Nous somme des tryhardeur chill qui joue collectif.",
        lienDiscord: "https://discord.gg/HWvuAA5hh", // Mettez votre lien Discord ici
        lienYoutube: "#",
        lienTwitter: "#",
    },

    // 2. Statistiques de la Faction (affichées dans la section Présentation)
    stats: [
        { label: "Membres", valeur: "14" },
        { label: "Détermination", valeur: "100%" },
        { label: "Monnaie Faction", valeur: "40k" }
    ],

    // 3. Roster (Liste des membres de la faction)
    // Rangs disponibles : "chef", "officier", "membre", "recrue"
    // Rôles pour le filtrage : "chef", "farmeur", "pvp", "builder"
    roster: [
        {
            nom: "DragnireMax",
            rang: "chef",
            role: "chef",
            specialite: "Fondateur & Stratège",
            minecraftSeed: "DragnireMax",
            discord: "dragniremax23",
        },
        {
            nom: "NKLM_RACOON",
            rang: "chef",
            role: "chef",
            specialite: "Fondateur & PvP-Man",
            minecraftSeed: "NKLM_RACOON",
            discord: "r.a.c.o.o.n"
        },
        {
            nom: "LWXY134",
            rang: "chef",
            role: "chef",
            specialite: "Fondateur & Recruteur",
            minecraftSeed: "LWXY134",
            discord: "lwxy134"
        }
    ],

    // 4. Objectifs de la Saison (Barres de progression)
    objectives: [
        {
            titre: "Niveau de Faction Max",
            icone: "fa-trophy",
            pourcentage: 85,
            statut: "Progression"
        },
        {
            titre: "Base Claims Securisée (AP)",
            icone: "fa-shield-halved",
            pourcentage: 100,
            statut: "Terminé"
        },
        {
            titre: "Coffres Full Paladium",
            icone: "fa-gem",
            pourcentage: 60,
            statut: "En cours"
        },
        {
            titre: "Contrôle des Outposts",
            icone: "fa-crosshairs",
            pourcentage: 40,
            statut: "En cours"
        }
    ],

    // 5. Galerie d'images (Screenshots)
    gallery: [
        {
            titre: "Forteresse du Zénith (AP)",
            tag: "Base Claims",
            image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?q=80&width=600&auto=format&fit=crop"
        },
        {
            titre: "Pillage Légendaire",
            tag: "Pillage",
            image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&width=600&auto=format&fit=crop"
        },
        {
            titre: "Combat PvP à l'Outpost",
            tag: "Combat PvP",
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&width=600&auto=format&fit=crop"
        }
    ]
};