import { v4 as uuidv4 } from 'uuid';

export const serviceNameList =[
    "Développement logiciel",
    "Conception graphique",
    "Formation informatique",
    "Maintenance logiciels et matériels",

]



export const subServiceList = 

{

    development: {
        name:"Développement logiciel",
        description: "Mercury Tech est spécialisée dans le développement de vos logiciels. Nous concevons pour vous des logiciels sur mesure en fonction de vos besoins. Mercury Tech intervient de façon agile dans le développement logiciel, aussi bien pour les entreprises que pour les particuliers. Nos ingénieurs rendent vos rêves réels !",
        image:"/assets/img/services/dev.jpg",
        subText: [
            {
                name:"Développement web",
                _id:"dev1",
                id: uuidv4(),
                specialization:"Développement web",
                description: "Vous êtes à la recherche de solutions informatiques pour votre entreprise et cherchez comment développer votre audience digitale ? Mercury Tech vous apporte des solutions numérisées. Internet est une « planète » ou toute entreprise doit se trouver une place de marque pour ne pas être dépassée par la concurrence. Mercury Tech l’a compris et vous offre le meilleur du développement web et s’occupe de toutes les étapes de sa création. Apte dans tous les domaines d’activité stratégique, Mercury Tech est engagé à faire de votre site web le meilleur outil de valorisation de votre entreprise. Design innovant, ergonomie de qualité Mercury est outillée à concevoir tout type de site internet ‘vitrine, e-commerce, catalogue, blog etc.)."
            },
            {
                name:"Développement d’application mobiles",
                _id:"dev2",
                id: uuidv4(),
                specialization:"Développement d’application mobiles",
                description: "Tout comme les sites web, les applications mobiles constituent un support de prospection et de communication. La puissance de cet outil s’accroit avec le temps et est de plus en plus utilisé par la concurrence. Pour ne pas être en déphasage avec l’ère du numérique, l’équipe de Mercury Tech développe pour vous des applications mobiles fluide, esthétique et utile pour permettre à votre structure de se démarquer de la concurrence. De ce fait, votre application ne sera pas délaissée par le mobinaute mais augmentera le trafic sur vos différentes plateformes digitales. Aussi, votre entreprise restera connectée avec votre cible ce qui facilitera le suivi et la qualité de la relation client."
            },
            {
                name:"Développement d’application desktop ",
                _id:"dev3",
                id: uuidv4(),
                specialization:"Développement d’application desktop",
                description: "Mercury Tech vous propose des solutions desktop conçues et pensées selon vos idées. Grâce à notre équipe, nous réalisons avec succès la conception de votre application desktop. L’évolution des TIC bouleverse la consommation des applications desktop. Mercury Tech vous accompagne dans le développement complet de votre application."
            }],
            products:[
               {name: "Site Vitrine",unitPrice: 150000},
               {name:"Site Web Portfolio" ,unitPrice: 100000},
                {name:"Application Web",unitPrice: 300000},
                {name:"Application Mobile",unitPrice: 300000},
                {name:"Application Desktop",unitPrice: 500000},
            ]
        },
    
    design: {
        
        name:"Conception graphique",
        description: "Parce qu’avoir un beau design est crucial pour votre survie sur le marché, MERCURY TECH vous propose son service de conception graphique. Nous exprimons vos idées par des images afin d’apporter des solutions à vos problèmes. Le design de votre support de communication se doit d’être irréprochable c’est pour cette raison que MERCURY TECH regroupe des graphistes professionnels spécialisés dans les différents domaines du design afin de vous satisfaire et de répondre à vos besoins. De la conception de votre identité visuelle à l’animation en passant par le branding, notre rigueur et notre disponibilité font de nous de la start-up qui repousse les limites de la créativité et de l’innovation.",
        image:"/assets/img/services/design.jpg",
        subText: [
        {
            name:"print design",
            _id:"design1",
            id: uuidv4(),
            specialization:"Graphic-design",
            description: " Conception graphique conçue pour être imprimée sur papier "
        },
        {
            name:"digital design",
            _id:"design2",
            id: uuidv4(),
            specialization:"Illustration-design",
            description: "La conception de visuels destinés à des plates-formes numériques telles que Facebook, Instagram, web, etc."
        },
        {
            name:"UI/UX design",
            _id:"design2",
            id: uuidv4(),
            specialization:"Illustration-design",
            description: "Conception d’interface utilisateur."
        },
        {
            name:"3D-design",
            _id:"design3",
            id: uuidv4(),
            specialization:"3D-design",
            description: " Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec ac viverra ligula, in scelerisque leo. Proin massaquam, ornare in porta quis pellentesque porta rutru erat nec facilisis"
        },
        {
            name:"Motion Graphic",
            _id:"design4",
            id: uuidv4(),
            specialization:"motion-design",
            description: " nous traduisons graphiquement et fidèlement vos valeurs par notre service de motion graphic design, MERCURY TECH redonne vie au graphisme. Mercury Tech étend le graphisme au-delà de l’audiovisuel. Nous vous procurons un habillage typographique mais aussi, une animation d’éléments 2D et 3D allant des interfaces graphiques à l’animation d’illustration (images, vidéos). De ce fait, nous présentons de manière dynamique votre entreprise mais plus loin vos produits avec style et originalité. Par notre service de motion graphisme, nous vous procurons rapidité, dynamisme et esthétique."
        },
    ],
    products:[
        {name:"Flyers ( A2, A3, A4, A5, A6)",unitPrice: 0 },
        {name:"Flyers ( A1 et Plus grand)", unitPrice: 0},
        {name:"Site Portfolio",unitPrice: 0},
        {name:"Site Web Pro (Entreprise)",unitPrice: 0},
        {name:"Application E-commerce",unitPrice: 0},
        {name:"Application Mobile",unitPrice: 0},
        {name:"Application Desktop",unitPrice: 0},
    ]},

    formation:{
        name:"Formation informatique",
        description: "Vous souhaitez apprendre une profession en pratiquant et en étant apte ? Mercury Tech propose à ces apprenants des formations pratiques et un diplôme de qualification professionnel reconnu par l’État. Sur une durée de 12 mois maximum, nous adaptons nos programmes à vos besoins et aussi à votre disponibilité. Nous garantissons à nos apprenants un stage professionnel à la fin de la formation.",
        image:"/assets/img/services/formation.jpg",
        subText: [
            {
                name:"Cours personnalisés",
                _id:"cour1",
                id: uuidv4(),
                specialization: "Cours personnalisés",
                description: "Mercury Tech offre des formations personnalisées adaptées aux besoins de ces apprenants. En cours du soir ou du jour vous pouvez en fonction de votre disponibilité sélectionner votre option"
            },
            {
                name:"Formation de groupe et séminaire",
                _id:"cour2",
                id: uuidv4(),
                specialization:"Formation de groupe et séminaire",
                description:"Parce que faire de vous des pro du numérique est une de nos priorités, Mercury Tech offre des formations à des groupes et des séminaires de formation dans le domaine de l’informatique sur différents modules."
            },
            {
                name:"E-learning",
                _id:"cour3",
                id: uuidv4(),
                specialization:"E-learning",
                description:"Mercury Tech vous propose des cours en ligne et à distance pour faciliter votre apprentissage. Avec des modules alliant théorique et pratique. À la fin de la formation, des attestations sont délivrées aux apprenants."
            },
            {
                name:"Formation d’entreprise",
                _id:"cour4",
                id: uuidv4(),
                specialization:"Formation d’entreprise",
                description:"Cette offre spéciale s’adresse aux entreprises qui souhaitent être mise à niveau sur des logiciels de leur choix. Mercury se propose de donner des formations dans les entreprises afin de faciliter le travail de ces structures qui rencontrent des difficultés."
            }
        ],

        communityTraining: {
            description:"De par son statut d’entreprise sociale, Mercury Tech propose aux jeunes camerounais des formations en informatique gratuite et rémunérées. Ces formations à caractère sociales ont pour but d’encourager les jeunes à la professionnalisation mais aussi d’apporter une participation à la construction de l’édifice d’une Afrique numérisée. Parallèlement aux formations gratuites, Mercury Tech propose des formations bilingues et à la carte en informatique à tous ses apprenants en fonction de leurs besoins.La formation en informatique gratuite et rémunéré de Mercury Tech est offerte aux candidats remplissant les conditions mentionnées sur le lien condition d’admission"
        },
        products:[
            {name:"Formation d’entreprise", unitPrice: 0},
            {name:"E-learning", unitPrice: 0},
            {name:"Formation de groupe et séminaire", unitPrice: 0},
            {name:"Cours personnalisés", unitPrice: 0}
        ]
    },
 
    maintenance: {
        name: "Maintenance logiciels et matériels",
        description: "Mercury Tech vous propose de bénéficier d’un véritable service informatique pour vos appareils tant sur le Hardware que sur le software. Pour une entreprise, la maintenance de votre parc est indispensable à son bon fonctionnement. Nous vous proposons un suivi évaluation de vos équipements afin de participer à l’atteinte de vos objectifs.",
        image:"/assets/img/services/maintenance.jpg",
        subText:[],
        products:[
            {name:"Maintenance Materielle entreprise",unitPrice: 0},
             {name:"Maintenance logiciel entreprise",unitPrice: 0},],
        relatedWorks:[
                "assets/img/tab_img.png",
                "assets/img/tab_img.png",
                "assets/img/tab_img.png",
                "assets/img/tab_img.png",
                "assets/img/tab_img.png",
                "assets/img/tab_img.png",
                "assets/img/tab_img.png",
                "assets/img/tab_img.png",
                "assets/img/tab_img.png",
            ]
    }

}


