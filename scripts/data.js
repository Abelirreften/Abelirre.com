const MY_GAMES = [
    {
        id: "tfg",
        title: "Proyecto Final de Grado",
        title_en: "Final Degree Project",
        description: "Juego en desarrollo. Metroidvania basado en 'Mistborn' de Brandon Sanderson y Blasphemous II.",
        description_en: "Game in development. Metroidvania based on Brandon Sanderson's 'Mistborn' and Blasphemous II.",

        extendedDescription: `Este es el trabajo de final de grado en el que estoy poniendo en práctica todos los conocimientos adquiridos durante los últimos años. 
        <br>
        El proyecto busca crear un metroidvania único, centrado en una atmósfera cuidada, unas mecánicas innovadoras basadas en el sistema alomántico de la saga Mistborn ('Nacidos de la Bruma' de Brandon Sanderson) y un estilo artístico 
        que fusione la crudeza de Blasphemous II con la elegancia de la ambientación creada por Sanderson.
        <br><br>
        Actualmente en estado de conceptualización.`,

        extendedDescription_en: `This is the final degree project where I am putting into practice all the knowledge acquired during the last few years.
        <br><br>
        The project seeks to create a unique metroidvania, focused on a carefully crafted atmosphere, innovative mechanics based on the allomantic system of 'Mistborn' and an art style that merges the rawness of Blasphemous II with the elegance of Sanderson's setting.
        <br><br>
        Currently in the conceptualization stage.`,

        image: "assets/images/Proximamente_TFG.png",
        link: "#",
        isFeatured: true,
        isInDevelopment: true,
        tags: [{ name: "Unity", class: "t-unity" }, { name: "2D", class: "t-2d" }, { name: "Metroidvania", class: "t-metroidvania" }],
        duration: "-",
        duration_en: "-",
        status: "En desarrollo",
        status_en: "In development",
        trailer: "",
        screenshots: ["assets/images/Proximamente_TFG.png"],
        role: {
            title: "Productor, Director Creativo, Artista 2D y Programador",
            description: `En este proyecto me encargo de la producción, el arte 2D y la programación. 
            <br>
            Somos un equipo de dos desarrolladores y ambos vamos a tener que absorber partes de otros roles, pero mi fuerte será el arte 2D y la direccón creatvia del proyecto.
            Mi compañero se encargará principalmente de la programación y del diseño de niveles. Aunque ambos estamos muy implicados en todo el diseño de sistemas de juego y en
            crear unas bases sólidas a partir de las cuales construir el juego.
            `
        },
        role_en: {
            title: "Producer, Creative Director, 2D Artist and Programmer",
            description: `In this project, I am in charge of production, 2D art and programming. 
            <br>
            We are a team of two developers and both of us will have to absorb parts of other roles, but my strength will be the 2D art and the creative direction of the project.
            <br><br>
            My partner will be mainly in charge of programming and level design. Although both of us are very involved in all the design of game systems and in creating a solid foundation from which to build the game.
            `
        },
        skillsLearned: "",
        skillsLearned_en: "",
        techChallenges: [
            { tag: "Físicas 2D", description: "Movimiento fluído del personaje e interacción con el mundo." },
            { tag: "Máquina de estados", description: "Diseño e implementación de una máquina de estados para el personajes. La máquina de estados se divide en dos partes: una controla el movimiento y otra las físicas del sistema alomántico de poderes." }
        ],
        techChallenges_en: [
            { tag: "2D Physics", description: "Smooth movement of the character and interaction with the world." },
            { tag: "State machines", description: "Design and implementation of state machines for the characters. The state machine is divided into two parts: one controls the movement and the other controls the physics of the allomantic power system." }
        ],

        type: "TFG"
    },
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    {
        id: "twrm",
        title: "They Wont Retain Me",
        title_en: "They Wont Retain Me",
        description: "El infierno no quiere que escapes. Sobrevive a hordas de pecadores mientras consigues habilidades cada vez más poderosas.",
        description_en: "Hell doesn't want you to escape. Survive hordes of sinners while getting stronger and stronger abilities.",

        extendedDescription: `They Wont Retain Me es un intenso shooter roguelite donde un pecador violento lucha por escapar de los Círculos del Infierno, 
        masacrando hordas demoníacas con un arsenal evolutivo para alcanzar la superficie.
        <br><br>
        En They Won't Retain Me, controlas a un pecador bendecido por los Dioses para redimirse. Basado en el Infierno de Dante, deberás matar a otros pecadores y demonios que quieren acabar contigo y escalar
        por los diferentes Círculos del Infierno hasta alcanzar la superficie. Para ello, deberás usar tus armas, con las que conseguirás experiencia, subirás de nivel y podrás seleccionar una 
        mejora (o Bendición de los Dioses) de entre tres aleatorias. Estas mejoras subirán tus estadísticas y desbloquearán habilidades nuevas. Hordas interminables intentarán frenarte y solo tu habilidad e inteligencia podrá mantenerte con vida.`,

        extendedDescription_en: `They Wont Retain Me is an intense shooter rogelite where a violent sinner fights to escape from the Circles of Hell, 
        massacring demonic hordes with an evolutionary arsenal to reach the surface.
        <br><br>
        In They Won't Retain Me, you control a sinner blessed by the Gods to redeem themselves. Based on Dante's Inferno, you will have to kill other sinners and demons that want to destroy you and climb
        through the different Circles of Hell to reach the surface. To achieve this, you will have to use your weapons, with which you will gain experience, level up and be able to select an upgrade 
        (or Blessing of the Gods) from three random ones. These upgrades will increase your statistics and unlock new abilities. Endless hordes will try to stop you and only your skill and intelligence will keep you alive.`,

        image: "assets/images/TWRM_Portada.png",
        coverImage: "assets/images/TWRM_Juego/TWRM_Portada_ST.png",
        link: "https://abelirre.itch.io/they-wont-retain-me",
        isFeatured: false,
        isInDevelopment: false,
        tags: [{ name: "Unreal Engine", class: "t-unreal" }, { name: "3D", class: "t-3d" }, { name: "Acción", class: "t-accion" }, { name: "Survivor-like", class: "t-platformer" }],
        duration: "3 meses",
        duration_en: "3 months",
        status: "Acabado",
        status_en: "Finished",
        trailer: "https://www.youtube.com/watch?v=jxKPpaJmL7o",

        screenshots: [
            {
                src: "assets/images/TWRM_Portada.png",
                caption: "Portada",
                caption_en: "Cover"
            },
            {
                src: "https://img.itch.zone/aW1hZ2UvNDc0MDY4OC8yODI2MjAxNS5wbmc=/original/lMZ%2Fby.png",
                caption: "Horda de enemigos",
                caption_en: "Horde of enemies"
            },
            {
                src: "https://img.itch.zone/aW1hZ2UvNDc0MDY4OC8yODI2MjAxNC5wbmc=/original/gSFRu6.png",
                caption: "Bolas de fuego",
                caption_en: "Fireballs"
            },
            {
                src: "https://img.itch.zone/aW1hZ2UvNDc0MDY4OC8yODI2MjAyMC5wbmc=/original/8MnMTW.png",
                caption: "Habilidades a elegir",
                caption_en: "Abilities to choose"
            }
        ],
        role: {
            title: "Artista 3D",
            description: `En este proyecto he sido uno de los artistas 3D principales, encargado de la creación del personaje protagonista y de las armas que usa. 
            Los modelos los he hecho desde cero: para el personaje basándome en las referencias de nuestra artista de conceptos y para las armas creando los conceptos yo mismo. 
            Además, he ayudado a riggear y preparar a los enemigos para su implementación en Unreal Engine.
            <br><br>
            Mi flujo de trabajo ha consistido en los siguientes pasos:
            <br>• Crear un moodboard del estilo artístico que va a tener el juego: personaje, armas, enemigos, escenarios, iluminación, decoraciones, etc.
            <br>• Usar las referencias creadas por la concept artist o crearlas yo mismo usando PureRef para el moodboard y Photoshop para crear los conceptos.
            <br>• Analizar el proceso de traducir un dibujo 2D a un modelo 3D y detallar lo que debo tener en cuenta para una buena adaptación.
            <br>• Modelar el personaje y armas en Blender utilizando las referencias, basando todo el proceso en el uso de geometría adaptada al motor gráfico (Unreal Engine), evitando el uso de Ngons y polígonos que puedan dar problemas en el proceso de animación.
            <br>• Realizar un despliegue de UVs correcto, limpio y fácil de entender. Dando prioridad a las zonas que requieran mayor detalle o que se vean más de cerca.
            <br>• Texturizar los modelos usando Photoshop y las propias herramientas de Blender. En mi caso dibujando a mano (usando tableta gráfica) para colorear y detallar las texturas.
            <br>• Riggear el personaje y prepararlo para su posterior animación.

            <br><br>
            Por último, me encargué de la creación del logo del estudio usando Photoshop e Inkscape y del trailer del juego utilizando el contenido creado por todo el equipo y Adobe Premiere Pro para la edición; 
            además de crear todos los assets promocionales del juego (portadas, textos, banners, etc).
            `
        },
        roleImage: [
            {
                src: "assets/images/TWRM_Juego/TWRM_escp_FULL.png",
                caption: "Modelo High Polly de la escopeta.",
                caption_en: "High Polly model of the shootgun."
            },
            {
                src: "assets/images/TWRM_Juego/TWRM_lwp_escp_FULL.png",
                caption: "Modelo Low Polly de la escopeta.",
                caption_en: "Low Polly model of the shootgun."
            },
            {
                src: "assets/images/TWRM_Juego/TWRM_HD_ch_FULL.png",
                caption: "Texturas HD del personaje.",
                caption_en: "HD Textures of the character."
            },
            {
                src: "assets/images/TWRM_Juego/TWRM_PX_ch_Full.png",
                caption: "Texturas Pixel Art del personaje.",
                caption_en: "Pixel Art Textures of the character."
            },
            {
                src: "assets/images/TWRM_Juego/TWRM_Retp_Ch.png",
                caption: "UVs del personaje.",
                caption_en: "Character UVs."
            },
            {
                src: "assets/images/TWRM_Juego/TWRM_pist_FULL.png",
                caption: "Modelo Low Polly de la pistola.",
                caption_en: "Low Polly model of the pistol."
            },
            {
                src: "assets/images/TWRM_Juego/TWRM_Rig_FULL.png",
                caption: "Rig del personaje y enemigo pecador.",
                caption_en: "Character and sinner enemy rig."
            },
            {
                src: "assets/images/TWRM_Juego/TWRM_Concept.png",
                caption: "Concept art del personaje y armas.",
                caption_en: "Character and weapons concept art."
            },
            {
                src: "assets/images/TWRM_Juego/TWRM_CnC_Logo.png",
                caption: "Logo del estudio.",
                caption_en: "Studio logo."
            },
        ],
        role_en: {
            title: "3D Artist",
            description: `In this project, I was one of the main 3D artists, responsible for creating the main character and the weapons. 
            I have created the models from scratch: for the character based on our concept artist's references and for the weapons creating the concepts myself. 
            Additionally, I helped with rigging and preparing the enemies for implementation in Unreal Engine.
            <br><br>
            My workflow consisted of the following steps:
            <br>• Use the references created by the concept artist or create them myself using PureRef for the moodboard and Photoshop to create the concepts.
            <br>• Analyze the process of translating a 2D drawing into a 3D model and detail what I need to consider for a good adaptation.
            <br>• Model the character and weapons in Blender using the references, basing the entire process on the use of geometry adapted to the game engine (Unreal Engine), avoiding the use of Ngons and polygons that may cause problems in the animation process.
            <br>• Perform a correct, clean and easy-to-understand UV layout. Prioritizing areas that require more detail or that are seen more closely.
            <br>• Texture the models using Photoshop and Blender's own tools. In my case, drawing by hand (using a graphics tablet) to color and detail the textures.
            <br>• Rig the character and prepare it for later animation.
            `
        },
        skillsLearned: `
        • Uso de Photoshop y PureRef para la investigación y creación de referencias y conceptos (moodboard).
        <br>• Modelado 3D en Blender para personajes y armas.
        <br>• Retopología limpia y texturizado.
        <br>• Rigging limpio y preparado para su implementación en Unreal Engine.
        <br>• Creación del logo del estudio mediante Photoshop`,
        skillsImage: [

        ],
        skillsLearned_en: `
        • Use of Photoshop and PureRef for investigation and creation of concept art and references (moodboard).
        <br>• 3D modeling in Blender for characters and weapons.
        <br>• Clean retopology and texturing.<br>• Clean rigging ready for implementation in Unreal Engine.
        <br>• Creation of the studio logo using Photoshop`,
        techChallenges: [
            { tag: "Modelado 3D", description: "• Modelado de personajes desde una referencia de concept art: adaptar un dibujo 2D a un modelo 3D. <br>• Geometría limpia sin Ngons." },
            { tag: "UV y Texturizado", description: "• Realización de un layout de UVs limpio y bien estructurado.<br>• Texturizado de personajes y armas tanto en HD como en versiones pixeladas." },
            { tag: "Rigging", description: "• Creación de un rigging funcional y optimizado del personaje para su posterior animación." }
        ],
        techChallenges_en: [
            { tag: "3D Modeling", description: "• Modeling of characters and weapons from a concept art reference. Adapting a 2D drawing to a 3D model. <br>• Clean geometry without Ngons." },
            { tag: "UV and Texturing", description: "• Creation of a clean and well-structured UV layout.<br>• Texturing of characters and weapons in both HD and pixel versions." },
            { tag: "Rigging", description: "• Creation of a functional and optimized rigging of the character for its later animation." }
        ],

        type: "Uni Project"
    },
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    {
        id: "bloodrunner",
        title: "Blood Runner",
        title_en: "Blood Runner",
        description: "Un platformer 2D pixel art con enemigos y mucho frenetismo. Supera niveles antes de quedarte sin sangre.",
        description_en: "A fast-paced 2D pixel art platformer with enemies. Beat levels before you run out of blood.",

        extendedDescription: `BloodRunner es un juego 2D pixel art de plataformas desarrollado en Godot Engine. El jugador se enfrenta a enemigos mientras recorre niveles frenéticos, 
        con el objetivo de llegar al final antes de quedarse sin sangre.
        <br>
        El protagonista, un asesino con implantes cibernéticos, es manipulado por una Inteligencia Artificial misteriosa para cumplir sus objetivos a cambio de información sobre su pasado y su familia.
        Debe introducirse en edificios infestados de enemigos para lograr acabar con ellos y llegar hasta el Jefe Final.
        <br>
        Si no derrota enemigos y absorbe su sangre, se quedará sin fuerzas y será derrotado. Por lo que debe estar en constante movimiento y en busca de enemigos a los que matar.`,

        extendedDescription_en: `BloodRunner is a 2D pixel art platformer game developed in Godot Engine. The player faces enemies while traversing frenetic levels, with the goal of reaching the end before running out of blood.
        
        The protagonist, a killer with cybernetic implants, is manipulated by a mysterious Artificial Intelligence to achieve his goals in exchange for information about his past and family.
        He must enter buildings infested with enemies to defeat them and reach the Final Boss.
        
        If he doesn't defeat enemies and absorb their blood, he will run out of strength and be defeated. So he must be constantly moving and looking for enemies to kill.`,

        image: "assets/images/BloodRunner_Portada.png",
        coverImage: "assets/images/BloodRunner/BR_Portada.png",
        link: "https://abelirre.itch.io/bloodrunner",
        isFeatured: false,
        isInDevelopment: false,
        tags: [{ name: "Godot", class: "t-godot" }, { name: "2D", class: "t-2d" }, { name: "Pixel Art", class: "t-pixel" }, { name: "Plataformas", class: "t-platformer" }],
        duration: "3 meses",
        duration_en: "3 months",
        status: "Acabado",
        status_en: "Finished",
        trailer: "https://www.youtube.com/watch?v=TWycHvq6Py8",

        screenshots: [

            {
                src: "https://img.itch.zone/aW1hZ2UvMzU5MTUyMy8yMTM3ODI0Ny5wbmc=/original/NxyUw2.png",
                caption: "Boss Final",
                caption_en: "Final Boss"
            },

            {
                src: "https://img.itch.zone/aW1hZ2UvMzU5MTUyMy8yMTM3ODI0OC5wbmc=/original/%2Fd%2Bwl3.png",
                caption: "Jugador recolectando sangre",
                caption_en: "Player collecting blood"
            },

            {
                src: "assets/images/BloodRunner/BR_Limus1.png",
                caption: "Viaje en limusina",
                caption_en: "Limo ride"
            },

            {
                src: "https://img.itch.zone/aW1hZ2UvMzU5MTUyMy8yMTM3ODI1MS5wbmc=/original/4mjeiA.png",
                caption: "Jugador cayendo de un edificio",
                caption_en: "Player falling from a building"
            },

            {
                src: "https://img.itch.zone/aW1hZ2UvMzU5MTUyMy8yMTM3ODI1Mi5wbmc=/original/sWFMHZ.png",
                caption: "Jugador atacando",
                caption_en: "Player attacking"
            },

            {
                src: "https://img.itch.zone/aW1hZ2UvMzU5MTUyMy8yMTY5MjU3NC5wbmc=/original/O2fnC1.png",
                caption: "Proyectiles",
                caption_en: "Projectiles"
            }
        ],

        role: {
            title: "Artista 2D Pixel Art",
            description: `En este proyecto he sido uno de los principales artistas 2D. Mi rol ha consistido en crear y animar todos los enemigos del juego.
            <br><br>Mi flujo de trabajo consiste en:
            <br>• Buscar referencias para los enemigos y diseñar un personaje que cumpla con las necesidades del proyecto.
            <br>• Establecer una paleta de colores y crear al personaje en pixel art dando prioridad al tamaño del pixel art y a los detalles más relevantes que deben destacar.
            <br>• Crear el contorno del personaje con distintos colores para entender la silueta y el funcionamiento de las animaciones.
            <br>• Animar la silueta colorida siguiendo las técnicas de animación para pixel art (squash and stretch, anticipation, overlap, etc.) para que las animaciones sean fluidas y atractivas.
            <br>• Una vez terminadas las animaciones, dar detalle al personaje y pulir las animaciones para su exportación.
            
            <br><br>Además, me he encargado del fondo de las cinemáticas y los niveles (ciudad morada) y de toda la interfaz de usuario (UI), incluyendo los iconos de las habilidades y los menús del juego.
            <br><br>Y por último, el trailer del juego fue responsabilidad mía: desde la idea y planificación hasta la producción, grabación de gameplay, logotipos e imágenes, selección de música y edición en Premiere Pro.`
        },
        role_en: {
            title: "2D Pixel Artist",
            description: `In this project I have been one of the main 2D artists. My role has been to create and animate all the enemies in the game.
            <br><br>My workflow consists of:
            <br>• Search for references for the enemies and design a character that meets the needs of the project.
            <br>• Establish a color palette and create the character in pixel art giving priority to the size of the pixel art and the most relevant details that should stand out.
            <br>• Create the outline of the character with different colors to understand the silhouette and the functioning of the animations.
            <br>• Animate the colored silhouette following the animation techniques for pixel art (squash and stretch, anticipation, overlap, etc.) so that the animations are fluid and attractive.
            <br>• Once the animations are finished, give detail to the character and polish the animations for export.
            
            <br><br>Also, I have been in charge of the background of the cinematics and the levels (purple city) and all the user interface (UI), including the ability icons and the game menus.
            <br><br>And finally, the game trailer was my responsibility: from the idea and planning to the production, gameplay recording, logos and images, music selection and editing in Premiere Pro.`
        },
        roleImage: [

            {
                src: "assets/images/BloodRunner/BR_En1_Proceso.png",
                caption: "Proceso de animación",
                caption_en: "Animation process",
            },

            {
                src: "assets/images/BloodRunner/BR_En1_CP.png",
                caption: "Paleta de colores del juego",
                caption_en: "Game color palette",
            },

            {
                src: "assets/images/BloodRunner/BR_En1_Color_Andar.gif",
                caption: "Boceto de animación 1º enemigo",
                caption_en: "1st enemy animation sketch",
            },

            {
                src: "assets/images/BloodRunner/BR_En1_FULL.gif",
                caption: "Animación final 1º enemigo",
                caption_en: "1st enemy final animation",
            },

            {
                src: "assets/images/BloodRunner/BR_En2_FULL.gif",
                caption: "Animación final 2º enemigo",
                caption_en: "2nd enemy final animation",
            },

            {
                src: "assets/images/BloodRunner/BR_Torreta_FULL.gif",
                caption: "Animación de la torreta",
                caption_en: "Turret animation",
            },

            {
                src: "assets/images/BloodRunner/BR_Fondo.png",
                caption: "Fondo de las cinemáticas",
                caption_en: "Cinematics background",
            },

            {
                src: "assets/images/BloodRunner/BR_Menu1.png",
                caption: "Interfaz de usuario (UI)",
                caption_en: "User Interface (UI)",
            },

            {
                src: "assets/images/BloodRunner/BR_Menu2.png",
                caption: "Diseño de menús y banners",
                caption_en: "Menus and banners design",
            },

            {
                src: "assets/images/BloodRunner/BR_PrPro.png",
                caption: "Proceso de creación del tráiler",
                caption_en: "Trailer cinematic creation process",
            },
        ],
        skillsImage: "",
        skillsLearned: `• Uso de Aseprite y Photoshop como programas de pixel art.
        <br>• Creación de fondos pixel art y escalado a 4K con Photoshop para adaptarse a distintas resoluciones.
        <br>• Uso de Adobe Premiere Pro para edición de vídeo y creación de tráileres.
        <br>• Animación 2D para videojuegos, aplicando técnicas como squash & stretch, anticipation y overlap.
        <br>• Creación de personajes y assets para videojuegos 2D.
        <br>• Diseño de interfaz de usuario (UI) para videojuegos.
        <br>• Uso de Godot Engine para la creación de videojuegos 2D.`,
        skillsLearned_en: `• Use of Aseprite and Photoshop as pixel art programs.
        <br>• Creation of pixel art backgrounds and scaling to 4K with Photoshop to adapt to different resolutions.
        <br>• Use of Adobe Premiere Pro for video editing and trailer creation.
        <br>• 2D animation for video games, applying techniques such as squash & stretch, anticipation and overlap.
        <br>• Creation of characters and assets for 2D video games.
        <br>• User interface (UI) design for video games.
        <br>• Use of Godot Engine for 2D video game creation.`,
        techChallenges: [
            { tag: "Pixel Art 2D", description: "• Creación de personajes y assets para videojuegos 2D.<br>• Separación por capas del sprite.<br>• Resoluciones y cantidad de detalles a tener en cuenta en el sprite." },
            { tag: "Principios de Animación", description: "• Animación de personajes 2D pixel art, aplicando técnicas como squash & stretch, anticipation y overlap." },
            { tag: "Trailer", description: "• Guion, estructura y edición del trailer del juego, creando el contenido audiovisual con Adobe Premiere Pro." }
        ],
        techChallenges_en: [
            { tag: "Pixel Art 2D", description: "• Creation of characters and assets for 2D video games.<br>• Separation by layers of the sprite.<br>• Resolutions and amount of details to take into account in the sprite." },
            { tag: "Animation Principles", description: "Animation of 2D pixel art characters, applying techniques such as squash & stretch, anticipation and overlap." },
            { tag: "Trailer", description: "• Script, structure and editing of the game trailer, creating the audiovisual content with Adobe Premiere Pro." }
        ],

        type: "Uni Project"
    },
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    {
        id: "desinformator",
        title: "Desinformator",
        title_en: "Desinformator",
        description: "Juego 3D en primera persona en el que el jugador está en un sótano intentando desinformar al mundo entero.",
        description_en: "3D first-person game where the player is in a basement trying to misinform the whole world.",

        extendedDescription: `DESINFORMATOR es un juego 3D en primera persona en el que el jugador está en un sótano intentando desinformar al mundo entero.
        <br><br>
        En cada run/nivel te contratan clientes para que alteres información en base a sus intereses. Tu trabajo es modificar los medios de comunicación para que las masas crean lo que tus clientes quieren. 
        Habrá métricas de credibilidad para ver si tu trabajo está siendo efectivo o no.
        <br><br>
        Es un proyecto muy pequeño y en una versión muy temprana, pero me ha servido para aprender sobre Godot Engine, sobre crear un concepto de juego en poco tiempo y darle vida prototipando rápidamente.`,

        extendedDescription_en: `DESINFORMATOR is a 3D first-person game where the player is in a basement trying to misinform the whole world.
        <br><br>
        In each run/level you will be hired by clients to alter information based on their interests. Your job is to modify the media to make the masses believe what your clients want. 
        There will be credibility metrics to see if your work is being effective or not.
        <br><br>
        It is a very small project and in a very early version, but it has helped me to learn about Godot Engine, about creating a game concept in a short time and bringing it to life by prototyping quickly.`,

        image: "assets/images/Desinformator_Portada.png",
        coverImage: "assets/images/Desinformator/DIF_Portada.png",
        link: "https://abelirre.itch.io/desinformator",
        isFeatured: false,
        isInDevelopment: false,
        tags: [{ name: "Godot", class: "t-godot" }, { name: "3D", class: "t-3d" }, { name: "Estrategia", class: "t-estrategia" }],
        duration: "7 días",
        duration_en: "7 days",
        status: "Acabado",
        status_en: "Finished",
        trailer: "",
        screenshots: [

            {
                src: "https://img.itch.zone/aW1hZ2UvMzg1MzEwMi8yMjk4NDA1OS5wbmc=/original/2M74TV.png",
                caption: "Menu principal",
                caption_en: "Main menu",
            },
            {
                src: "https://img.itch.zone/aW1hZ2UvMzg1MzEwMi8yMjk4NDA3NC5wbmc=/original/QFD%2F4n.png",
                caption: "Escritorio del jugador",
                caption_en: "Player's desktop",
            },
            {
                src: "https://img.itch.zone/aW1hZ2UvMzg1MzEwMi8yMjk4NDA4MS5wbmc=/original/mQvwqE.png",
                caption: "Radio, impresora y teléfono",
                caption_en: "Radio, printer and phone",
            },
            {
                src: "https://img.itch.zone/aW1hZ2UvMzg1MzEwMi8yMjk4NDA4Ny5wbmc=/original/XHO2X%2B.png",
                caption: "Misión a cumplir",
                caption_en: "Mission to accomplish",
            },
            {
                src: "https://img.itch.zone/aW1hZ2UvMzg1MzEwMi8yMjk4NDA5MS5wbmc=/original/tk7lpB.png",
                caption: "Estadísticas del jugador",
                caption_en: "Player's stats",
            },
            {
                src: "assets/images/Desinformator/DIF_Action.png",
                caption: "Acciones disponibles",
                caption_en: "Actions available",
            },
            {
                src: "assets/images/Desinformator/DIF_Action2.png",
                caption: "Acciones disponibles 2",
                caption_en: "Actions available 2",
            },
            {
                src: "assets/images/Desinformator/DIF_Cama.png",
                caption: "Cama para cambiar de día",
                caption_en: "Bed to change the day",
            },
        ],
        roleImage: [
            {
                src: "assets/images/Desinformator/DIF_Motor.png",
                caption: "Motor del juego",
                caption_en: "Game engine",
            },
            {
                src: "assets/images/Desinformator/DIF_Radio.png",
                caption: "Radio Prefab",
                caption_en: "Radio Prefab",
            },
            {
                src: "assets/images/Desinformator/DIF_Shaders.png",
                caption: "Programación de shaders",
                caption_en: "Coding Shaders",
            },
            {
                src: "assets/images/Desinformator/DIF_UI.png",
                caption: "UI con filtros de imagen",
                caption_en: "UI with Image Filters",
            },
        ],
        role: {
            title: "Artista 3D, Productor.",
            description: `En este breve proyecto mi rol fue diseñar, modelar y texturizar todo lo que se ve en el juego: desde los modelos 3D hasta la iluminación.
            <br><br>
            Mi trabajo fue pensar qué elementos tenía que haber en el escenario y crearlos. Usé Blender para modelar y texturizar assets desde cero y también usé assets externos que adapté al estilo del juego.
            <br>Además, me encargué de la iluminación del sótano con intención de crear un ambiente claustrofóbico, agobiante y brusco. Ayudé con el prosprocesado de imagen y los shaders del juego.
            Me encargué de todo el contenido visual que se ve en el juego y del arte promocional (la portada, el logo, los menús, etc).
            <br>Por otro lado, tuve que encargarme del audio y música del juego y su implementación. Y por último, me encargué de preparar varios prefabs dentro de Godot para que los programadores pudieran usarlos con facilidad. 
            Ejemplos son la impresora, la radio o el ordenador.
            <br><br>
            Otro rol que tuve que asumir fue el de productor. Este juego lo hicimos entre tres amigos para una GameJam y todos estuvimos implicados en tareas de producción y otros roles. Pero, al ser yo el único estudiando
            desarrollo de videojuegos, decidimos que las decisiones de diseño y desarrollo recayesen en gran medida en mí.`
        },
        role_en: {
            title: "3D Artist",
            description: `In this short proyect, my role was to design, model and texture everything that is seen in the game: from the 3D models to the lighting.
            <br><br>
            My job was to think about what elements had to be in the scene and create them. I used Blender to model and texture assets from scratch and also used external assets that I adapted to the game's style.
            <br>I was also in charge of the lighting of the basement with the intention of creating a claustrophobic, oppressive and abrupt atmosphere. I helped with the image post-processing and the game's shaders.
            <br>I was in charge of all the visual content that is seen in the game and the promotional art (the cover, the logo, the menus, etc).
            <br>On the other hand, I had to take care of the audio and music of the game and its implementation. And finally, I was in charge of preparing several prefabs within Godot so that the programmers could use them easily. 
            Examples are the printer, the radio or the computer.
            <br><br>
            Another role I had to take on was that of producer. This game was made by three friends for a GameJam and we were all involved in production tasks and other roles. But, as I was the only one studying
            video game development, we decided that the design and development decisions would fall largely on me.`
        },
        skillsImage: "",
        skillsLearned: `• Generar una idea de juego rápidamente.
        <br>• Prototipar e iterar un concepto y aprender a descartar ideas que no son óptimas.
        <br>• Godot Engine en 3D.<br>• GDScript.<br>• Creación de Shaders.
        <br>• Coordinar un equipo pequeño de 3 personas.
        <br>• Modelado y texturizado 3D en Blender.
        <br>• Iluminación y postprocesado de imagen.
        <br>• Diseño de UI.`,
        skillsLearned_en: `• Rapidly generate a game idea.
        <br>• Prototype and iterate on a concept and learn to discard ideas that are not optimal.
        <br>• Godot Engine in 3D.<br>• GDScript.<br>• Shader Creation.
        <br>• Coordinate a small team of 3 people.
        <br>• 3D modeling and texturing in Blender.
        <br>• Lighting and image post-processing.
        <br>• UI Design.`,
        techChallenges: [
            { tag: "Interacciones con objetos", description: "En este propyecto todo se basa en la interacción del jugador con objetos del entorno. Por lo tanto, ha sido uno de los mayores desafíos. Hay que manejar textos e interfaces, sonidos, animaciones, eventos, etc." },
            { tag: "Shaders", description: "Aprendí el lenguaje que usa Godot para los shaders desde cero y apliqué los conocimientos que tenía sobre shaders que aprendí en Física del videojuego." },
            { tag: "Producción", description: "Coordinación de un equipo de 3 personas para un proyecto de 7 días. Tomar buenas decisiones, ser efectivos y no atascarnos con aspectos del juego que no eran tan importantes." },
            { tag: "Creación de Assets", description: "Diseñar el escenario, crear los assets desde cero y adaptar otros assets externos al estilo visual de Desinformator." },
            { tag: "Iluminación", description: "Aunque la iluminación de este juego es simple, está pensada para destacar lo que es relevante y generar una atmósfera claustrofóbica, brusca y 'sucia'." }
        ],
        techChallenges_en: [
            { tag: "Objects Interactions", description: "In this project everything is based on the player's interaction with objects in the environment. Therefore, it has been one of the biggest challenges. We have to manage texts and interfaces, sounds, animations, events, etc." },
            { tag: "Shaders", description: "I learned the language Godot uses for shaders from scratch and applied the knowledge I had about shaders that I learned in Game Physics." },
            { tag: "Production", description: "Coordinating a team of 3 people for a 7-day project. Making good decisions, being effective and not getting stuck on aspects of the game that were not very important." },
            { tag: "Asset Creation", description: "Designing the scene, creating assets from scratch and adapting other external assets to Desinformator's visual style." },
            { tag: "Lighting", description: "Although the lighting in this game is simple, it is designed to highlight what is relevant and generate a claustrophobic, abrupt and 'dirty' atmosphere." }
        ],

        type: "GAMEJAM"
    },
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    {
        id: "warehouse",
        title: "The Warehouse",
        title_en: "The Warehouse",
        description: "Adéntrate en un almacén aislado en las montañas y descubre los secretos más oscuros que allí se guardan.",
        description_en: "Venture into an isolated warehouse in the mountains and discover the darkest secrets kept there.",

        extendedDescription: `Este proyecto es un juego de puzzle (laberinto) en primera persona, donde el jugador explora un almacén abandonado en las montañas.
        El juego se desarrolla en un entorno cerrado y claustrofóbico, donde el jugador debe encontrar la forma de salir del almacén y descubrir secretos ocultos.
        <br><br>
        Es un juego simple que programé durante la asignatura de Motores II, donde aprendí por primera vez a usar Unity. Es un prototipo dedicado a aprender las bases de Unity, C# y desarrollo de videojuegos en 3D.`,
        extendedDescription_en: `This project is a first-person puzzle (maze) game where the player explores an abandoned warehouse in the mountains.
        The game takes place in a closed and claustrophobic environment, where the player must find a way to escape the warehouse and discover hidden secrets.
        <br><br>
        It is a simple game that I programmed during the II Engines course, where I learned to use Unity for the first time. It is a prototype dedicated to learning the basics of Unity, C# and 3D game development.`,

        image: "assets/images/TheWarehouse_Portada.png",
        coverImage: "assets/images/TheWarehouse/TW_Portada2.png",

        link: "https://abelirre.itch.io/the-warehouse",
        isFeatured: false,
        isInDevelopment: false,
        tags: [{ name: "Unity", class: "t-unity" }, { name: "3D", class: "t-3d" }, { name: "Aventura", class: "t-aventura" }, { name: "Terror", class: "t-terror" }],
        duration: "2 meses",
        duration_en: "2 months",
        status: "Acabado",
        status_en: "Finished",
        trailer: "",

        screenshots: [
            {
                src: "assets/images/TheWarehouse/TW_Portada.png",
                caption: "Menú inicial",
                caption_en: "Start Menu"
            },
            {
                src: "assets/images/TheWarehouse/TW_Menu.png",
                caption: "Menú de opciones",
                caption_en: "Options Menu"
            },
            {
                src: "assets/images/TheWarehouse/TW_Robot.png",
                caption: "Robot patrullando",
                caption_en: "Patroling robot"
            },
            {
                src: "assets/images/TheWarehouse/TW_Spawn.png",
                caption: "Inicio del nivel",
                caption_en: "Level Start"
            },
            {
                src: "assets/images/TheWarehouse/TW_Start.png",
                caption: "Exterior del almacén",
                caption_en: "Warehouse exterior"
            },
            {
                src: "assets/images/TheWarehouse/TW_Trap1.png",
                caption: "Tirachinas de aviones de papel",
                caption_en: "Paper airplane slingshot"
            },
            {
                src: "assets/images/TheWarehouse/TW_Trap2.png",
                caption: "Láser-Medidor de distancias",
                caption_en: "Laser-Distance Meter"
            },
            {
                src: "assets/images/TheWarehouse/TW_Trap3.png",
                caption: "Yunque que cae al pisar un botón",
                caption_en: "Anvil falling on a button press"
            },
            {
                src: "assets/images/TheWarehouse/TW_Laberinto.png",
                caption: "Laberinto desde arriba",
                caption_en: "Maze from above"
            },
            {
                src: "assets/images/TheWarehouse/TW_PA.png",
                caption: "Puerta azul",
                caption_en: "Blue door"
            },
            {
                src: "assets/images/TheWarehouse/TW_BA.png",
                caption: "Botón que abre la puerta azul",
                caption_en: "Button that opens blue door"
            },
            {
                src: "assets/images/TheWarehouse/TW_Exit.png",
                caption: "Puerta de salida",
                caption_en: "Exit door"
            },
            {
                src: "assets/images/TheWarehouse/TW_Room.png",
                caption: "Sala misteriosa",
                caption_en: "Mysterious room"
            },
            {
                src: "assets/images/TheWarehouse/TW_Secret.png",
                caption: "El secreto del almacén",
                caption_en: "The warehouse secret"
            },
        ],


        roleImage: "",
        role: {
            title: "Programador, Diseñador de Niveles",
            description: `En este proyecto mi prioridad fue entender los fundamentos de Unity y, sobre todo, aprender a programar con C#.
            Tuve que diseñar un laberinto usando assets, crear un nivel interesante, programar diferentes interacciones con el entorno como puertas que se abren al pulsar un botón, trampas de distintos tipos.
            También me encargué de programar un enemigo con una máquina de estados y con un sistema de Path Finding usando navmesh. El enemigo tiene estados de patrulla, detección y ataque.
            Los assets que usé son todos externos.`
        },
        role_en: {
            title: "Programmer, Level Designer",
            description: `In this project my priority was to understand the fundamentals of Unity and, above all, to learn to program with C#.
            I had to design a maze using assets, create an interesting level, program different interactions with the environment such as doors that open when a button is pressed, different types of traps.
            I was also in charge of programming an enemy with a state machine and a Path Finding system using navmesh. The enemy has patrol, detection and attack states.
            The assets I used are all external.`
        },
        skillsImage: [
            {
                src: "assets/images/TheWarehouse/TW_Unity.png",
                caption: "Juego en Unity",
                caption_en: "Game in Unity"
            },
            {
                src: "assets/images/TheWarehouse/TW_Player_Controller.png",
                caption: "Controlador del personaje",
                caption_en: "Player controller"
            },
            {
                src: "assets/images/TheWarehouse/TW_State_Machine.png",
                caption: "Máquina de estados del enemigo",
                caption_en: "Enemy state machine"
            },
            {
                src: "assets/images/TheWarehouse/TW_UI.png",
                caption: "Interfaces de usuario",
                caption_en: "User interfaces"
            },
            {
                src: "assets/images/TheWarehouse/TW_Waypoints.png",
                caption: "Waypoints para el enemigo",
                caption_en: "Enemy waypoints"
            }
        ],

        skillsLearned: `
            • Unity y programación con C#.
            <br>• Diseño de niveles y entornos.
            <br>• Diseño de puzzles y mecánicas de juego.
            <br>• Programación de interacciones con objetos mediante Raycasts.
            <br>• Programación de eventos y secuencias de juego.
            <br>• Máquina de estados para el enemigo.
            <br>• Sistema de Path Finding (NavMesh).
            <br>• Creación de trampas usando físicas de Unity (Rigidbodies, Triggers, etc).
            <br>• Sistema de vida y daño para el personaje con barra de vida.
            <br>• Iluminación a tiempo real y baking de luces (Lightmaps).
            <br>• Optimización de modelos (Texturas, Level Of Details 'LOD', Colisiones, etc).
            <br>• Implementación de sonidos.
            <br>• Interfaces para los menús, HUD, barra de vida, etc.`,

        skillsLearned_en: `
            • Unity and C# programming.
            <br>• Level and environment design.
            <br>• Puzzle and game mechanics design.
            <br>• Programming of interactions with objects using Raycasts.
            <br>• Programming of events and game sequences.
            <br>• State machine for the enemy.
            <br>• Path Finding system (NavMesh).
            <br>• Trap creation using Unity physics (Rigidbodies, Triggers, etc).
            <br>• Life and damage system for the character with health bar.
            <br>• Real-time lighting and light baking (Lightmaps).
            <br>• Model optimization (Textures, Level Of Details 'LOD', Collisions, etc).
            <br>• Sound implementation.
            <br>• User Interfaces for menus, HUD, health bar, etc.`,

        techChallenges: [
            { tag: "Físicas 3D", description: "• Uso de RigidBody 3D para mover al personaje por físicas.<br>• Uso de físicas para las trampas (Yunque, aviones de papel)." },
            { tag: "NavMesh", image: "", description: "Sistema de Path Finding para el enemigo." },
            { tag: "Máquina de Estados", description: "Implementación de una máquina de estados para el enemigo, con estados de patrulla, búsqueda, seguimiento y ataque." },
            { tag: "Colisiones", description: "Detección y optimización de las colisiones para evitar fallos y tener un buen funcionamiento con el RigidBody del personaje." },
            { tag: "Triggers y Raycasts", description: "Uso de Triggers y Raycasts para detectar las trampas, el área de visión del enemigo y las interacciones del personaje." },
            { tag: "Optimización", description: "Optimizar los modelos con LODs, los tamaños y compresiones de las texturas, y la iluminación con Lightmaps y Baking." },
            { tag: "Optimización Web", description: "El juego está optimizado para poder funcionar en navegador." }

        ],
        techChallenges_en: [
            { tag: "Physics 3D", description: "Use of RigidBody 3D to move the character using physics.<br>• Use of physics for traps (Anvil, paper airplanes)." },
            { tag: "NavMesh", description: "Path Finding system for the enemy." },
            { tag: "State Machine", description: "Implementation of a state machine for the enemy, with patrol, search, pursuit and attack states." },
            { tag: "Collisions", description: "Detection and optimization of collisions to avoid failures and have a good functioning with the character's RigidBody." },
            { tag: "Triggers and Raycasts", description: "Use of Triggers and Raycasts to detect traps, the enemy's field of vision and the character's interactions." },
            { tag: "Optimization", description: "Optimization of models with LODs, sizes and compressions of textures, and lighting with Lightmaps and Baking." },
            { tag: "Web Optimization", description: "The game is optimized to run in a web browser." }
        ],

        type: "Uni Project"
    },
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    {
        id: "knightAdventure",
        title: "A Knight Adventure",
        title_en: "A Knight Adventure",
        description: "Un caballero debe superar distintos niveles y enemigos hasta llegar a la meta final. Juego de plataformas 2D para navegador.",
        description_en: "A knight must overcome different levels and enemies to reach the final goal. 2D platformer game for web browsers.",

        extendedDescription: `Un caballero debe superar distintos niveles y enemigos hasta llegar a la meta final.
        <br><br>
        El objetivo de este proyecto ha sido aprender los lenguajes HTML5, CSS, JavaScript y el motor / librería Phaser y entender cómo crear unas físicas simples 
        (gravedad, saltos, colisiones, etc), animaciones y un sistema de control para un juego pensado para navegador. Ha sido mi primera vez creando un juego de 
        navegador y mi primer contacto con los lenguajes web.
        <br><br>
        El juego lo desarrollé en dos semanas aproximadamente. Mis herramientas principales para desarrollarlo han sido:
        <br>• HTML5
        <br>• CSS
        <br>• JavaScript
        <br>• Phaser
        <br>• Tiled para crear los niveles`,

        extendedDescription_en: `A knight must overcome different levels and enemies to reach the final goal.
        <br><br>
        The objective of this project has been to learn HTML5, CSS, JavaScript and the Phaser engine / library and understand how to create simple physics
        (gravity, jumps, collisions, etc), animations and a control system for a game designed for the browser. It has been my first time creating a browser game and my first contact with web languages.
        <br><br>
        I developed the game in approximately two weeks. My main tools for developing it have been:
        <br>• HTML5
        <br>• CSS
        <br>• JavaScript
        <br>• Phaser
        <br>• Tiled to create the levels`,

        image: "assets/images/KnightAdventure/KA_Portada.png",
        coverImage: "assets/images/KnightAdventure/KA_Cover.png",

        link: "https://abelirre.itch.io/a-knight-adventure",
        isFeatured: false,
        isInDevelopment: false,
        tags: [{ name: "Phaser, JavaScript, HTML5", class: "t-phaser" }, { name: "2D", class: "t-2d" }, { name: "Pixel Art", class: "t-pixel" }, { name: "Plataformas", class: "t-platformer" }],
        duration: "2 semanas",
        duration_en: "2 weeks",
        status: "Acabado",
        status_en: "Finished",
        trailer: "",

        screenshots: [
            {
                src: "assets/images/KnightAdventure/KA_Img1.png",
                caption: "Inicio del nivel",
                caption_en: "Level Start"
            },
            {
                src: "assets/images/KnightAdventure/KA_Img2.png",
                caption: "Nivel de desierto",
                caption_en: "Desert Level"
            },
            {
                src: "assets/images/KnightAdventure/KA_Img3.png",
                caption: "Nivel de hielo",
                caption_en: "Ice Level"
            },
            {
                src: "assets/images/KnightAdventure/KA_Img4.png",
                caption: "Nivel de fuego",
                caption_en: "Fire Level"
            },
        ],


        roleImage: "",
        role: {
            title: "Programador, Diseñador de Niveles",
            description: `Toda la programación del juego está hecha por mi, al igual que los niveles. Muchos de los assets son externos aunque algunos son creados por mi 
            (los pinchos, las columnas naranjas del bioma de fuego, las rocas agrietadas grises y las columnas con pinchos del bioma de fuego).`
        },
        role_en: {
            title: "Programmer, Level Designer",
            description: `All the programming in the game is done by me, as well as the levels. Many of the assets are external, although some are created by me
            (the spikes, the orange columns in the fire biome, the grey cracked rocks and the columns with spikes in the fire biome).`
        },
        skillsImage: [
            {
                src: "https://img.itch.zone/aW1hZ2UvMjg3NjgvNjcwOTYyLnBuZw==/original/JCgaka.png",
                caption: "Tiled (Imagen de google)",
                caption_en: "Tiled (Image from Google)"
            },
        ],

        skillsLearned: `
            • HTML5, CSS y JavaScript.
            <br>• Phaser.
            <br>• Tiled y su sistema de Tilemaps.
            <br>• IDs de tiles y cómo usarlos.
            <br>• Físicas 2D (gravedad, colisiones, saltos, etc).
            <br>• Animaciones y uso de spritesheets.
            <br>• Implementación de sonidos.
            <br>• Sistemas de control básicos para juegos de navegador.`,

        skillsLearned_en: `
            • HTML5, CSS and JavaScript.
            <br>• Phaser.
            <br>• Tiled and its Tilemap system.
            <br>• Tile IDs and how to use them.
            <br>• 2D Physics (gravity, collisions, jumps, etc).
            <br>• Animations and use of spritesheets.
            <br>• Sound implementation.
            <br>• Basic control systems for browser games.`,

        techChallenges: [
            { tag: "Físicas 2D", description: "Implementar la gravedad, saltos y colisiones para el personaje y enemigos." },
            { tag: "Tilemaps", description: "• Creación del Tilemap con Tiled y uso de IDs de los tiles para detectar qué tiles hacen daño al jugador y cuales no.<br>• Capas de tiles para decoración (árboles y arbustos) y 'suelo' del nivel" },
            { tag: "Colisiones", description: "Detección de las colisiones con los enemigos, el suelo y los tiles concretos que dañan al jugador." },
            { tag: "Optimización Web", description: "El juego está pensado para funcionar en navegador y ser ligero." }

        ],
        techChallenges_en: [
            { tag: "2D Physics", description: "Implement the gravity, jumps and collisions for the character and enemies." },
            { tag: "Tilemaps", description: "• Creation of Tilemap with Tiled and use of tile IDs to detect which tiles damage the player and which do not.<br>• Tile layers for decoration (trees and bushes) and the level's 'ground'." },
            { tag: "Collisions", description: "Detection of collisions with enemies, ground and specific tiles that damage the player." },
            { tag: "Web Optimization", description: "The game is designed to run in a web browser and be light." }

        ],

        type: "Uni Project"
    },
];
