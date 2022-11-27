const PagesClone = "Pages Clone"
const Aplicativos = "Aplicativos"
const LadingPages = "Lading Pages"
const Ecommerce = "Ecommerce"

class Project {
    constructor({id, name, name_img, classe, color, url, video_url, techs, id_github}){
        return {
            id,
            name,
            name_img, 
            class: classe,
            classColor: color, 
            url: video_url ? undefined : url,
            techs,
            video: video_url ? {
                activated: true,
                url_video: video_url
            } : {activated: false},
            id_github
        }
    }
}

const projetos = [
    new Project({
        id: 0,
        name: "E-Commerce Livros / Js Puro",
        name_img: "E-Commerce Livros",
        classe: Ecommerce,
        color: "bordercommerce",
        techs: ["html5", "css3", "javascript"],
        video_url: 'https://www.youtube.com/embed/0eJr3VuCPM0',
        id_github: 535355348
    }),
    new Project({
        id: 1,
        name: "E-Commerce Livros / Nodejs ",
        name_img: "e_commerce Node Ejs",
        classe: Ecommerce,
        color: "bordercommerce",
        url: "https://e-commercenode.herokuapp.com",
        techs: ["html5", "css3", "javascript", "nodejs", "bootstrap"],
        id_github: 543840580
    }),
    new Project({
        id: 2,
        name: "Ficha automática / FireBase",
        name_img: "Ficha automaticaRPG",
        classe: Aplicativos,
        color: "borderficha",
        url: "https://resplendent-clafoutis-4a563c.netlify.app",
        techs: ["html5", "css3", "javascript", "firebase"],
        id_github: 543840580
    }),
    new Project({
        id: 3,
        name: "Ficha automática / MongoDB ",
        name_img: "ficha automaticaRPG nodeJS",
        classe: Aplicativos,
        color: "borderIMob",
        url: "https://fichaauto.herokuapp.com",
        techs: ["html5", "css3", "javascript", "mongodb", "nodejs"],
        id_github: 565903793
    }),
    new Project({
        id: 4,
        name: "Lading Page Barbearia",
        name_img: "Barbearia",
        classe: LadingPages,
        color: "borderNetF",
        url: "https://barbaforteguarapari.com",
        techs: ["html5", "css3", "javascript"],
        id_github: false
    }),
    new Project({
        id: 5,
        name: "E-commerce T-shirt",
        name_img: "tshirt",
        classe: PagesClone,
        color: "borderRoup",
        url: undefined,
        techs: ["html5", "css3", "javascript"],
        id_github: 496773693
    }),
    new Project({
        id: 6,
        name: "Clone Netflix",
        name_img: "Clone Netflix",
        classe: PagesClone,
        color: "borderNetF",
        url: "https://cerulean-choux-b17bcc.netlify.app",
        techs: ["html5", "css3", "javascript"],
        id_github: 496773693
    }),
    new Project({
        id: 7,
        name: "Gerador de Senhas",
        name_img: "Gerador de Senhas",
        classe: Aplicativos,
        color: "borderGerad",
        url: "https://stirring-biscochitos-33f31d.netlify.app",
        techs: ["html5", "css3", "javascript"],
        id_github: 496777585
    }),
    new Project({
        id: 8,
        name: "Calculadora Simples",
        name_img: "Calculadora Simples",
        classe: Aplicativos,
        color: "borderIMob",
        url: "https://visionary-torrone-648cb5.netlify.app",
        techs: ["html5", "css3", "javascript"],
        id_github: 536360180
    }),
    new Project({
        id: 9,
        name: "Lading Page Roupas",
        name_img: "Lading Page Roupas",
        classe: LadingPages,
        color: "borderRoup",
        url: "https://fastidious-zabaione-407f85.netlify.app",
        techs: ["html5", "css3", "javascript"],
        id_github: 496775301
    }),
    new Project({
        id: 10,
        name: "Jogo da Velha",
        name_img: "Jogo da Velha",
        classe: Aplicativos,
        color: "borderVelh",
        url: "https://keen-baklava-394a7c.netlify.app",
        techs: ["html5", "css3", "javascript"],
        id_github: 523709783
    }),
    new Project({
        id: 11,
        name: "Quiz Interativo",
        name_img: "Quiz Interativo",
        classe: Aplicativos,
        color: "bordercommerce",
        url: "https://phenomenal-fudge-4fed79.netlify.app",
        techs: ["html5", "css3", "javascript"],
        id_github: 536814403
    })
]