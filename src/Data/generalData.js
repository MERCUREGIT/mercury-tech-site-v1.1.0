import { v4 as uuidv4 } from 'uuid';

export const skills = [
    {masteryCount: 75,
    skillName:"Development",
    descrption:"Ut iaculis lectus urna, sit amet porttitor erat auctor at.",
    list:[
        "MERN & MEAN STACK",
        "WORDPRESS",
    ]
    },
    {masteryCount: 95,
    skillName:"Graphics",
    descrption:"Ut iaculis lectus urna, sit amet porttitor erat auctor at.",
    list:[
        "Illustration",
        "WORDPRESS",
    ]
    },
    {masteryCount: 100,
    skillName:"Training",
    descrption:"Ut iaculis lectus urna, sit amet porttitor erat auctor at.",
    list:[
        "Illustration",
        "WORDPRESS",
    ]
    },
    {masteryCount: 95,
    skillName:"React",
    descrption:"Ut iaculis lectus urna, sit amet porttitor erat auctor at.",
    list:[
        "Illustration",
        "WORDPRESS",
    ]
    },
]



export const clients =[
    {
        logo: "assets/img/home-one/Mountain.png",
        descrption: "",
        patnersSiteUrl: "",
        annimationDelay:"0.1s"
    },
    {
        logo: "assets/img/home-one/Coffee.png",
        descrption: "",
        patnersSiteUrl: "",
        annimationDelay:"0.2"
    },
    {
        logo: "assets/img/home-one/Fisherman.png",
        descrption: "",
        patnersSiteUrl: "",
        annimationDelay:"0.4"
    },
    {
        logo: "assets/img/home-one/Mountainbike.png",
        descrption: "",
        patnersSiteUrl: "",
        annimationDelay:"0.5"
    },
   
]


export const teamMembers =[
   { facebook:"",twitter:"",behance:"" ,pininterrest:"", whatsapp:"", name:"NGUM", post:"CEO"},
   { facebook:"",twitter:"",behance:"" ,pininterrest:"", whatsapp:"", name:"BIKOM", post:"CEO"},
   { facebook:"",twitter:"",behance:"" ,pininterrest:"", whatsapp:"", name:"TSANGA", post:"CEO"},
   { facebook:"",twitter:"",behance:"" ,pininterrest:"", whatsapp:"", name:"MERREL", post:"CEO"},
   { facebook:"",twitter:"",behance:"" ,pininterrest:"", whatsapp:"", name:"NGUEMBOU", post:"CEO"}
]


export const homeText ={

    // Qu’est ce qui est spécial chez Mercury Tech
    section1: {
        mainTitle: "Qu’est ce qui est spécial chez Mercury Tech",
        subText: [
                {
                    title: "Jeune et Dynamique",
                    icon:"fas fa-child",
                    id:uuidv4(),
                    mainText: "Mercury Tech est une équipe qualifié, professionnelle mais surtout jeune et dynamique. Notre dynamisme nous pousse à satisfaire les besoins de nos clients au-delà de leurs attentes."
                },
                {
                    title: "Rapide et effectif ",
                    icon:"fas fa-tachometer-alt",
                    id:uuidv4(),
                    mainText: "A Mercury Tech, nous savons que le temps est précieux. C’est pourquoi nous nous concentrons pour respecter les datelines fixés. Par notre efficacité, nous savons comment convaincre et optimiser le résultat attendu."
                },
                {
                    title: "Innovant et expert",
                    icon:"fab fa-internet-explorer",
                    id:uuidv4(),
                    mainText: "Mercury Tech est une équipe qualifié venue de divers horizon. Nous évoluons dans une innovation continue afin d’adapter chaque besoin de nos clients à une prestation différente. Par notre expertise, Mercury Tech vous propose une innovation qui participera à l’atteinte de vos objectifs."
                },
                {
                    title: "Stratégique et adaptatif",
                    icon:"fab fa-gripfire",
                    id:uuidv4(),
                    mainText: "parce que nous savons que la stratégie est la base de toute bonne action, à Mercury Tech, nous concevons pour vous des stratégies qui sauront rehaussées votre entreprise avec une valorisation de votre image de marque et une augmentation de votre chiffre d’affaire."
                },
        ]

    },



    section2:{
        mainTitle:"Nos Meilleur projet",


    }
}


export const  portfolioCardData =[
    {image:"assets/img/portfolio/portfolio1.jpg",
    project_image_list:["/assets/img/portfolio/p_details_img1.jpg","/assets/img/portfolio/p_details_img2.jpg","/assets/img/portfolio/p_details_img3.jpg"],
    best:false,
    project_id:uuidv4(),
    project_date: Date.now(),
    project_client: "Psychee by NK",
    project_name:"Object Support for House",
    project_category: "Web Design",
    project_description:"Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec acviverra ligula, in scelerisque leo. Proin massa quam, ornare in porta quis pellentesque porta rutrum erat nec facilisis"},
    
    {image:"assets/img/portfolio/portfolio1.jpg",
    project_id:uuidv4(),
    project_image_list:["/assets/img/portfolio/p_details_img1.jpg","/assets/img/portfolio/p_details_img2.jpg","/assets/img/portfolio/p_details_img3.jpg"],
    project_date: Date.now(),
    project_client: "Real de madrid",
    best:true,
    project_name:"Object Support for ssaz",
    project_category: "Mock-Up",
    project_description:"Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec acviverra ligula, in scelerisque leo. Proin massa quam, ornare in porta quis pellentesque porta rutrum erat nec facilisis"},

    {image:"assets/img/portfolio/portfolio1.jpg",
    project_id:uuidv4(),
    project_name:"Object Support for sazsaazdaezd",
    project_image_list:["/assets/img/portfolio/p_details_img1.jpg","/assets/img/portfolio/p_details_img2.jpg","/assets/img/portfolio/p_details_img3.jpg" ],
    project_date: Date.now(),
    best:true,
    project_client: "Photoshop master class",
    project_category: "Video",
    project_description:"Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec acviverra ligula, in scelerisque leo. Proin massa quam, ornare in porta quis pellentesque porta rutrum erat nec facilisis"},
    
    {image:"assets/img/portfolio/portfolio1.jpg",
    project_id:uuidv4(),
    project_name:"Object Support for sazsaazdaezd",
    project_image_list:["/assets/img/portfolio/p_details_img1.jpg","/assets/img/portfolio/p_details_img2.jpg","/assets/img/portfolio/p_details_img3.jpg" ],
    project_date: Date.now(),
    best:false,
    project_client: "Photoshop master class",
    project_category: "Mock-Up",
    project_description:"Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec acviverra ligula, in scelerisque leo. Proin massa quam, ornare in porta quis pellentesque porta rutrum erat nec facilisis"},
   
    {image:"assets/img/portfolio/portfolio1.jpg",
    project_id:uuidv4(),
    project_name:"Object Support for sazsaazdaezd",
    project_image_list:["/assets/img/portfolio/p_details_img1.jpg","/assets/img/portfolio/p_details_img2.jpg","/assets/img/portfolio/p_details_img3.jpg" ],
    project_date: Date.now(),
    best:true,
    project_client: "Photoshop master class",
    project_category: "Web Design",
    project_description:"Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec acviverra ligula, in scelerisque leo. Proin massa quam, ornare in porta quis pellentesque porta rutrum erat nec facilisis"},
    
    {image:"assets/img/portfolio/portfolio1.jpg",
    project_id:uuidv4(),
    project_name:"Object Support for sazsaazdaezd",
    project_image_list:["/assets/img/portfolio/p_details_img1.jpg","/assets/img/portfolio/p_details_img2.jpg","/assets/img/portfolio/p_details_img3.jpg" ],
    project_date: Date.now(),
    best:false,
    project_client: "Photoshop master class",
    project_category: "Video",
    project_description:"Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec acviverra ligula, in scelerisque leo. Proin massa quam, ornare in porta quis pellentesque porta rutrum erat nec facilisis"},
    
    {image:"assets/img/portfolio/portfolio1.jpg",
    project_id:uuidv4(),
    project_name:"Object Support for sazsaazdaezd",
    project_image_list:["/assets/img/portfolio/p_details_img1.jpg","/assets/img/portfolio/p_details_img2.jpg","/assets/img/portfolio/p_details_img3.jpg" ],
    project_date: Date.now(),
    best:false,
    project_client: "Photoshop master class",
    project_category: "Mock-Up",
    project_description:"Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec acviverra ligula, in scelerisque leo. Proin massa quam, ornare in porta quis pellentesque porta rutrum erat nec facilisis"},
    
    {image:"assets/img/portfolio/portfolio1.jpg",
    project_id:uuidv4(),
    project_name:"Object Support for sazsaazdaezd",
    project_image_list:["/assets/img/portfolio/p_details_img1.jpg","/assets/img/portfolio/p_details_img2.jpg","/assets/img/portfolio/p_details_img3.jpg" ],
    project_date: Date.now(),
    best:false,
    project_client: "Photoshop master class",
    project_category: "Mock-Up",
    project_description:"Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec acviverra ligula, in scelerisque leo. Proin massa quam, ornare in porta quis pellentesque porta rutrum erat nec facilisis"},
]

export const catergoryList =[
    {name:"Web Design", id:uuidv4()},
    {name:"Graphic Template", id:uuidv4()},
    {name:"Video", id:uuidv4()},
    {name:"Mock-Up", id:uuidv4()},
    {name:"Mock-Up", id:uuidv4()},
  ]