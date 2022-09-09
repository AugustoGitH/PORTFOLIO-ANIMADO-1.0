const naveIcon = document.querySelector(".fogueteGuia")
const liner = document.querySelector(".lineNav")
const apresentH1 = document.querySelector("#apresentH1")


document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener("scroll", ()=>{
        naveline()
    })
    digitarH1()
    atualizaWinCards(projetos)
})
function naveline(){
    let postionint = parseInt(window.scrollY) + 300
    let positionString = String(parseInt(window.scrollY) + 270)
    
    naveIcon.style.top = positionString +"px"

}
function digitarH1(){

    digitarInner("Olá meu nome é Augusto", 0.3, 4.3)
    digitarInner("Sou Desenvolvedor Front-End", 7, 10)
    digitarInner("e Web Designer :)", 13, 15)
    setTimeout(()=>{
        let stringArray = "Olá meu nome é Augusto".split("")
        stringArray.forEach((letter, i)=>{
            setTimeout(()=>{
                apresentH1.innerHTML += letter
            }, 100* i)
        })
    }, 18000)
    
}

function digitarInner(string, time1, time2){
    let stringArray = string.split("")
    setTimeout(()=>{
        apresentH1.innerHTML = ""
    
        stringArray.forEach((letter, i)=>{
            setTimeout(()=>{
                apresentH1.innerHTML += letter
            }, 100* i)
        })
    }, time1*1000)
    setTimeout(()=>{
        stringArray.forEach((letter, i)=>{
            setTimeout(()=>{
                stringArray.pop()
                let ArrayConvert = stringArray.toString().replace(/,/g,"")
                apresentH1.innerHTML = ArrayConvert
            }, 100* i)
        })
    }, time2*1000)
    
}
const containerPort = document.querySelector(".container_portfolio")
const PagesClone = "Pages Clone"
const AppJs = "App Js"
const LadingPages = "Lading Pages"
const projetos = [
    {
        id: 0,
        name: "Clone Netflix",
        class: PagesClone,
        classColor: "borderNetF",
        url: "https://cerulean-choux-b17bcc.netlify.app",
        ativo: true,
        techs: ["html5", "css3", "javascript"],
        personG: {
            nome: "megamanGif",
            widht: "170px"
        }
    },
    {
        id: 1,
        name: "Gerador de Senhas",
        class: AppJs,
        classColor: "borderGerad",
        url: "https://stirring-biscochitos-33f31d.netlify.app",
        ativo: true,
        techs: ["html5", "css3", "javascript"],
        personG: {
            nome: "LuigiGif",
            widht: "100px"
        }
    },
    {
        id: 2,
        name: "Lading Page Imobiliaria",
        class: LadingPages,
        classColor: "borderIMob",
        url: "",
        ativo: false,
        techs: ["html5", "css3", "javascript"],
        personG: {
            nome: "sonicGif",
            widht: "150px"
        }
    },
    {
        id: 3,
        name: "Lading Page Roupas",
        class: LadingPages,
        classColor: "borderRoup",
        url: "https://fastidious-zabaione-407f85.netlify.app",
        ativo: true,
        techs: ["html5", "css3", "javascript"],
        personG: {
            nome: "zeldaGif",
            widht: "150px"
        }
    },
    {
        id: 4,
        name: "Jogo da Velha",
        class: AppJs,
        classColor: "borderVelh",
        url: "https://keen-baklava-394a7c.netlify.app",
        ativo: true,
        techs: ["html5", "css3", "javascript"],
        personG: {
            nome: "marioGif",
            widht: "120px"
        }
    }
]


function criarprojetos(obj){
    let card = document.createElement("div")
    card.id = obj.id
    card.classList.add(obj.classColor, "cards_sites")
    containerPort.appendChild(card)

    card.addEventListener("click", (ev)=>{
        if(!document.querySelector(".poopInfos")){
            criarpoopInfo(projetos[ev.target.parentNode.id])
            
        }
        else{
            document.querySelector(".poopInfos").remove()        
            
            criarpoopInfo(projetos[ev.target.parentNode.id])
        }
    })

    let img = document.createElement("img")
    card.appendChild(img)
    img.src = "/Assets/Projects_Imgs/"+ obj.name + ".png"
}
function addProjectsWindow(array){
    array.forEach((el)=>{
        criarprojetos(el)
    })
}

function criarpoopInfo(obj){
    let poopInfos = document.createElement("div")
    poopInfos.classList.add("poopInfos")
    document.body.appendChild(poopInfos)

    

    let poop_content = document.createElement("div")
    poop_content.classList.add("poop_content")
    poopInfos.appendChild(poop_content)

    let iconArrow = document.createElement("i")
    iconArrow.classList.add("bx", "bx-chevrons-right", "recolherIcon")
    poop_content.appendChild(iconArrow)

    iconArrow.addEventListener("click", ()=>{
        document.querySelector(".poopInfos").style.transform = "translate(2000px)"
    })

    let part01Poop = document.createElement("div")
    part01Poop.classList.add("part01Poop")
    poop_content.appendChild(part01Poop)

    let img = document.createElement("img")
    poop_content.appendChild(img)

    let span = document.createElement("span")
    part01Poop.appendChild(span)

    let h1 = document.createElement("h1")
    h1.classList.add("nomeProject")
    span.appendChild(h1)

    let iconVerify = document.createElement("i")
    if(obj.ativo == true){
        iconVerify.classList.add("bx", "bx-check")

    }
    if(obj.ativo == false){
        iconVerify.classList.add("bx", "bx-x")
    }
    span.appendChild(iconVerify)

    let a = document.createElement("a")
    part01Poop.appendChild(a)
    a.innerHTML = "Visitar"
    a.addEventListener("click", ()=>{
        document.querySelector(".poopInfos").remove()
    })

    let ul = document.createElement("ul")
    part01Poop.appendChild(ul)

    obj.techs.forEach((tech)=>{
        ul.innerHTML += "<i class='bx bxl-"+tech+"'></i>"
    })


    h1.innerHTML = obj.name.toUpperCase()
    a.href = obj.url
    a.target = "_blank"
    img.src = "/Assets/Persons_Gif/"+ obj.personG.nome + ".gif"
    img.style.width = obj.personG.widht

    setTimeout(()=>{
        document.querySelector(".poopInfos").style.transform = "translate(0px)"

    }, 100)
}






function limparCards(){
    let cards = document.querySelectorAll(".cards_sites")
    cards.forEach((card)=>{
        card.remove()
    })
}
function atualizaWinCards(array){
    limparCards()
    addProjectsWindow(array)
}
function filterTodos(el){
    ckecksonic(el)
    atualizaWinCards(projetos)
}

function filterappJs(el, elementFilter){
    ckecksonic(el)
    limparCards()
    let func = function(el){
        return el.class == elementFilter
    }
    let arrayNew = projetos.filter(func)
    addProjectsWindow(arrayNew)
}

function ckecksonic(el){
    let butfil = document.querySelectorAll(".butfil")
    let sonic = document.querySelector(".sonic")
    let positionel = el. getBoundingClientRect()
    console.log(positionel)
    // if(el.id == "todos"){
    //     sonic.style.left = "20px"
    // }
    // if(el.id == "appjs"){
    //     sonic.style.left = "140px"
    // }if(el.id == "pagesclone"){
    //     sonic.style.left = "290px"
    // }
    // if(el.id == "ladingpages"){
    //     sonic.style.left = "500px"
    // }
    butfil.forEach((el)=>{
        el.classList.remove("tremer")
    })
    el.classList.add("tremer")
    console.log(el.id)
    
}