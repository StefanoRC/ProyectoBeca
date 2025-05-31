// src/data/games.js
export const games = [
  {
    id: "minecraft",
    name: "Minecraft",
    image: "/assets/img/minecraft-cover.jpg",
    scoreToUnlock: 12,
    questions: [
      {
        question: "¿Cuál es el enemigo más común en Minecraft?",
        options: ["Creeper", "Zombie", "Enderman", "Spider"],
        answer: "Zombie",
      },
      {
        question: "¿Con qué mineral no puedes crear herramientas ni armadura?",
        options: ["Diamante", "Oro", "Hierro", "Esmeralda"],
        answer: "Esmeralda",
      },
      {
        question: "¿Qué necesitas para encantar un objeto?",
        options: ["Mesa de encantamientos", "Yunque", "Forja", "Horno"],
        answer: "Mesa de encantamientos",
      },
      {
        question: "¿Cuál es el objetivo principal del juego?",
        options: ["Construir una casa", "Derrotar al Ender Dragon", "Explorar cuevas", "Cultivar"],
        answer: "Derrotar al Ender Dragon",
      },
      {
        question: "¿Qué bloque se usa para hacer un portal al Nether?",
        options: ["Obsidiana", "Diamante", "Ladrillo de piedra", "Redstone"],
        answer: "Obsidiana",
      },
      {
        question: "¿Qué criatura nocturna explota al acercarse?",
        options: ["Creeper", "Zombie", "Esqueleto", "Araña"],
        answer: "Creeper",
      },
      {
        question: "¿Cómo se llama el mundo alternativo de Minecraft?",
        options: ["El Nether", "El End", "El Aether", "El Más Allá"],
        answer: "El Nether",
      },
      {
        question: "¿Qué herramienta se usa para minar diamantes?",
        options: ["Pico de piedra", "Pico de hierro", "Pico de oro", "Pico de madera"],
        answer: "Pico de hierro",
      },
      {
        question: "¿Qué animal se puede domesticar con huesos?",
        options: ["Gato", "Perro", "Caballo", "Lobo"],
        answer: "Lobo",
      },
      {
        question: "¿Qué item se usa para hacer pan?",
        options: ["Trigo", "Cereales", "Arroz", "Maíz"],
        answer: "Trigo",
      },
      {
        question: "¿En qué bioma se encuentran las mansiones?",
        options: ["Planicies", "Bosque", "Taiga", "Desierto"],
        answer: "Bosque",
      },
      {
        question: "¿Qué criatura es conocida por robar bloques?",
        options: ["Creeper", "Enderman", "Zombie Pigman", "Araña"],
        answer: "Enderman",
      },
      {
        question: "¿Qué se necesita para hacer un portal al End?",
        options: ["Ojos de Ender", "Perlas de Ender", "Cristales de Ender", "Fragmentos de Ender"],
        answer: "Ojos de Ender",
      },
      {
        question: "¿Qué bloque se usa para hacer una cama?",
        options: ["Bloques de diamantes", "Lana", "Piedra", "Hilo"],
        answer: "Lana",
      },
      {
        question: "¿Qué criatura se puede encontrar en el Nether y es hostil?",
        options: ["Ghast", "Enderman", "Creeper", "Zombie"],
        answer: "Ghast",
      },
      {
        question: "¿Qué se usa para criar vacas?",
        options: ["Trigo", "Zanahorias", "Semillas de calabaza", "Manzanas"],
        answer: "Trigo",
      },
      {
        question: "¿Qué bloque se usa para hacer un horno?",
        options: ["Piedra", "Ladrillo de piedra", "Obsidiana", "Hierro"],
        answer: "Piedra",
      }
    ],
  },
  
  {
    id: "warcraft3",
    name: "Warcraft 3",
    image: "/assets/img/warcraft3-cover.jpg",
    scoreToUnlock: 12,
    questions: [
      {
        question: "¿Quién es el líder de los Orcos en Warcraft 3?",
        options: ["Thrall", "Grom Hellscream", "Cairne Bloodhoof", "Rexxar"],
        answer: "Thrall",
      },
      {
        question: "¿Qué raza utiliza los Necromancers como unidad en Warcraft 3?",
        options: ["Humanos", "Orcos", "No-muertos", "Elfos nocturnos"],
        answer: "No-muertos",
      },
      {
        question: "¿Cómo se llama el artefacto que Arthas obtiene al convertirse en Caballero de la Muerte?",
        options: ["Frostmourne", "Ashbringer", "Doomhammer", "Skull of Gul'dan"],
        answer: "Frostmourne",
      },
      {
        question: "¿Qué recurso adicional, además del oro, es necesario para construir edificios y entrenar unidades?",
        options: ["Cristales", "Madera", "Hierro", "Piedra"],
        answer: "Madera",
      },
      {
        question: "¿Cuál es el nombre del árbol gigante que los Elfos Nocturnos usan como base principal?",
        options: ["Árbol de la Eternidad", "Árbol de la Vida", "Árbol del Conocimiento", "Árbol del Mundo"],
        answer: "Árbol de la Vida",
      },
      {
        question: "¿Qué personaje se convierte en el Rey Exánime en Warcraft 3?",
        options: ["Arthas", "Kel'Thuzad", "Ner'zhul", "Illidan"],
        answer: "Arthas",
      },
      {
        question: "¿Cuál es el nombre de la expansión de Warcraft 3?",
        options: ["Frozen Throne", "Legacy of the Void", "Reforged", "Blood War"],
        answer: "Frozen Throne",
      },
      {
        question: "¿Qué héroe usa el hechizo 'Resurrección' en Warcraft 3?",
        options: ["Paladín", "Archimago", "Caballero de la Muerte", "Druida de la Garra"],
        answer: "Paladín",
      },
      {
        question: "¿Quién es el maestro de Arthas en su transformación como Caballero de la Muerte?",
        options: ["Kel'Thuzad", "Anub'arak", "Illidan", "Mal'Ganis"],
        answer: "Mal'Ganis",
      },
      {
        question: "¿Qué unidad de los No-muertos puede construir estructuras?",
        options: ["Necrófago", "Acolito", "Banshee", "Lich"],
        answer: "Acolito",
      },
      {
        question: "¿Cómo se llama la capital de los Humanos en Warcraft 3?",
        options: ["Lordaeron", "Stormwind", "Stratholme", "Dalaran"],
        answer: "Lordaeron",
      },
      {
        question: "¿Qué raza tiene Chimeras como unidad voladora poderosa?",
        options: ["Elfos nocturnos", "Orcos", "Humanos", "No-muertos"],
        answer: "Elfos nocturnos",
      },
      {
        question: "¿Cómo se llama la región helada donde Arthas encuentra Frostmourne?",
        options: ["Rasganorte", "Quel'Thalas", "Stranglethorn", "Azshara"],
        answer: "Rasganorte",
      },
      {
        question: "¿Qué unidad de los Orcos puede convertirse en invisible?",
        options: ["Asesino Sombrío", "Jinete de Murciélagos", "Chamán", "Ladrón"],
        answer: "Asesino Sombrío",
      },
      {
        question: "¿Quién traiciona a los Humanos en Warcraft 3?",
        options: ["Arthas", "Jaina Proudmoore", "Uther", "Kael'thas"],
        answer: "Arthas",
      },
      {
        question: "¿Cómo se llama el maestro del Rey Exánime en Warcraft 3?",
        options: ["Kel'Thuzad", "Ner'zhul", "Illidan", "Mannoroth"],
        answer: "Ner'zhul",
      },

      {
        question: "¿Qué unidad puede lanzar Polimorfia en Warcraft 3?",
        options: ["Archimago", "Hechicera", "Chamán", "Brujo"],
        answer: "Hechicera",
      },
    ],
  },


];
