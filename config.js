// ==========================================
// CONFIGURATION DE LA FACTION ZÉNITH
// ==========================================
// Vous pouvez modifier toutes les informations ci-dessous très facilement.
// Veillez simplement à respecter les guillemets et les virgules !

const FACTION_CONFIG = {
    // 1. Informations Générales
    general: {
        nom: "ZÉNITH",
        slogan: "Faction Officielle - Paladium V10",
        description: "Atteindre les sommets, dominer le classement et forger notre légende sur le plus grand serveur PvP-Faction moddé francophone.",
        lienDiscord: "https://discord.gg/zenith", // Mettez votre lien Discord ici
        lienYoutube: "#", // Lien Youtube (laisser # si aucun)
        lienTwitter: "#", // Lien Twitter (laisser # si aucun)
    },

    // 2. Statistiques de la Faction (affichées dans la section Présentation)
    stats: [
        { label: "Membres Actifs", valeur: "25" },
        { label: "Classement", valeur: "#04" },
        { label: "Détermination", valeur: "100%" },
        { label: "Monnaie Faction", valeur: "12M" }
    ],

    // 3. Roster (Liste des membres de la faction)
    // Rangs disponibles : "chef", "officier", "membre", "recrue"
    // Rôles pour le filtrage : "chef", "farmeur", "pvp", "builder"
    // Pour l'avatar (minecraftSeed) : vous pouvez mettre un pseudo Minecraft pour générer sa tête automatiquement
    roster: [
        {
            nom: "ShadowPal",
            rang: "chef",
            role: "chef",
            specialite: "Stratège & PvP-Man",
            minecraftSeed: "ShadowChef",
            discord: "shadowchef#1234",
            youtube: "https://youtube.com/c/shadowchef"
        },
        {
            nom: "Aurel_PvP",
            rang: "officier",
            role: "chef",
            specialite: "Co-Leader & Pilleur",
            minecraftSeed: "Aurelius",
            discord: "aurelpvp#5678"
        },
        {
            nom: "Elena_Fm",
            rang: "officier",
            role: "chef",
            specialite: "Relations & Recrutement",
            minecraftSeed: "Elena",
            discord: "elena#9012"
        },
        {
            nom: "FermierFou",
            rang: "membre",
            role: "farmeur",
            specialite: "Farmeur Suprême (Métier Lvl 100)",
            minecraftSeed: "FarmerX",
            discord: "fermierfou#3456"
        },
        {
            nom: "KroNox_",
            rang: "membre",
            role: "pvp",
            specialite: "Machine de Guerre PvP",
            minecraftSeed: "Kratos",
            discord: "kronox#7890"
        },
        {
            nom: "Archytect",
            rang: "membre",
            role: "builder",
            specialite: "Architecte des bases AP",
            minecraftSeed: "Archy",
            discord: "archytect#4321"
        },
        {
            nom: "Tilio_Zenith",
            rang: "recrue",
            role: "farmeur",
            specialite: "Apprenti Farmeur",
            minecraftSeed: "Tilio",
            discord: "tilio#9876"
        }
    ],

    // 4. Objectifs de la Saison (Barres de progression)
    // Mettez le pourcentage sous forme de nombre (ex: 85 pour 85%)
    // Icones possibles (FontAwesome) : "fa-trophy", "fa-shield-halved", "fa-gem", "fa-crosshairs", "fa-sack-dollar", "fa-dragon", "fa-sword", etc.
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
        },
        {
            titre: "Objectif Économique (20M $)",
            icone: "fa-sack-dollar",
            pourcentage: 75,
            statut: "En cours"
        },
        {
            titre: "Vaincre le Boss de Serveur",
            icone: "fa-dragon",
            pourcentage: 100,
            statut: "Terminé"
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
            titre: "Pillage Légendaire - Faction Rivale",
            tag: "Pillage",
            image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&width=600&auto=format&fit=crop"
        },
        {
            titre: "Défense héroïque à l'Outpost Kura",
            tag: "Combat PvP",
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&width=600&auto=format&fit=crop"
        },
        {
            titre: "Notre ferme automatique à Netherite",
            tag: "Farming",
            image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&width=600&auto=format&fit=crop"
        },
        {
            titre: "Photo de groupe fin de V9",
            tag: "Communauté",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&width=600&auto=format&fit=crop"
        },
        {
            titre: "La salle des coffres sécurisée",
            tag: "Richesse",
            image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&width=600&auto=format&fit=crop"
        }
    ]
};
