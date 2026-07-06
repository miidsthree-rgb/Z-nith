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