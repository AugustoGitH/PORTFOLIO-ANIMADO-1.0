const naveIcon = document.querySelector(".fogueteGuia")
const liner = document.querySelector(".lineNav")
const apresentH1 = document.querySelector("#apresentH1")


// ----------------EVENT-SCROLL-FOGUETE----------------
document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener("scroll", ()=>{
        naveline()
    })
    digitarH1()
    atualizaWinCards(projetos)
})
function naveline(){
    let positionString = String(parseInt(window.scrollY) + 270)
    naveIcon.style.top = positionString +"px"
}
// ----------------------------------------------------

// ----------------DIGITAR-MENSAGEM-HOME-----------------
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
// ----------------------------------------------------

// ----------------ADICIONAR-PROJETOS-PORTIFOLIO-----------------
const containerPort = document.querySelector(".container_portfolio")
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
    img.src = "/Assets/Projects_Imgs/"+ obj.name_img + ".png"
}
function addProjectsWindow(array){
    array.forEach((el)=>{
        criarprojetos(el)
    })
}
// ----------------------------------------------------

// ----------------CRIAR-POOP-INFOS-PROJECTS-----------------
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

    if(obj.video.activated === true){
        a.innerHTML = "Assistir"
    }if(obj.video.activated === false){
        a.innerHTML = "Visitar"
    }
    a.addEventListener("click", ()=>{
        if(obj.video.activated === false){
            a.href = obj.url
            a.target = "_blank"
            document.querySelector(".poopInfos").remove()
        }if(obj.video.activated === true){
            abrirvideoRep(obj)
        }
    })

    let ul = document.createElement("ul")
    part01Poop.appendChild(ul)

    obj.techs.forEach((tech)=>{
        ul.innerHTML += "<i class='bx bxl-"+tech+"'></i>"
    })


    h1.innerHTML = obj.name.toUpperCase()
    img.src = "/Assets/Persons_Gif/panda.gif"
    // img.style.height = obj.personG.widht

    setTimeout(()=>{
        document.querySelector(".poopInfos").style.transform = "translate(0px)"

    }, 100)
}
// ----------------------------------------------------

// ----------------CRIAR-DIV-IFRAME-----------------
function abrirvideoRep(obj){
    document.querySelector(".poopInfos").remove()
    let video_port = document.createElement("div")
    video_port.classList.add("video_port")
    document.body.appendChild(video_port)
    video_port.innerHTML = `<iframe id="iframe" src=${obj.video.url_video } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    let buttonSair = document.createElement("p")
    buttonSair.classList.add("buttonSairIf")
    buttonSair.innerHTML = "Sair"
    video_port.appendChild(buttonSair)
    buttonSair.addEventListener("click", ()=>{
        video_port.remove()
    })
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
// ----------------------------------------------------

// -----------------CHECKED-SONIC----------------------
function ckecksonic(el){
    let butfil = document.querySelectorAll(".butfil")
    butfil.forEach((el)=>{
        el.classList.remove("tremer")
    })
    el.classList.add("tremer")
}



