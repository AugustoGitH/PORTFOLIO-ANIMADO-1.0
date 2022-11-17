const naveIcon = document.querySelector(".fogueteGuia")
const liner = document.querySelector(".lineNav")
const apresentH1 = document.querySelector("#apresentH1")



document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener("scroll", ()=>{
        naveLine()
    })
    digitarH1()
    atualizaWinCards(projetos)
})



function naveLine(){
    let positionString = String(parseInt(window.scrollY) + 270)
    naveIcon.style.top = positionString +"px"
}


// ----------------DIGITAR-MENSAGEM-HOME-----------------
function digitarH1(){
    apresentH1.innerHTML = ""
    digitarInner("Olá meu nome é Augusto")
    .then(()=>{
        digitarInner("Sou Desenvolvedor Front-End").then(()=>{
            digitarInner("e Web Designer :)").then(()=>{
                let stringArray = "Olá meu nome é Augusto".split("")
                stringArray.forEach((letter, i)=>{
                    setTimeout(()=>{
                        apresentH1.innerHTML += letter
                    }, 100* i)
                })
            })
        })
    })
}

function digitarInner(string){
    return new Promise((res)=>{
        let stringArray = string.split("")
        setTimeout(()=>{
            apresentH1.innerHTML = ""
        
            stringArray.forEach((letter, i)=>{
                setTimeout(()=>{
                    apresentH1.innerHTML += letter
                }, 100* i)
            })
        }, 1000)
        setTimeout(()=>{
            stringArray.forEach((letter, i)=>{
                setTimeout(()=>{
                    stringArray.pop()
                    let ArrayConvert = stringArray.toString().replace(/,/g,"")
                    apresentH1.innerHTML = ArrayConvert
                }, 100* i)
            })
        }, 4500)
        setTimeout(res, 7100)
    })
    
}
// ----------------------------------------------------

// ----------------ADICIONAR-PROJETOS-PORTFOLIO-----------------
const containerPort = document.querySelector(".container_portfolio")
function criarProjetos(obj){
    let card = document.createElement("div")
    card.id = obj.id
    card.classList.add(obj.classColor, "cards_sites")
    containerPort.appendChild(card)

    card.addEventListener("click", (ev)=>{
        if(!document.querySelector(".pop_project")){
            criarPopInfo(projetos[ev.target.parentNode.id])
        }
        else{
            document.querySelector(".pop_project").remove()        
            criarPopInfo(projetos[ev.target.parentNode.id])
        }
    })
    let img = document.createElement("img")
    card.appendChild(img)
    img.src = "/Assets/Projects_Imgs/"+ obj.name_img + ".png"
}
function addProjectsWindow(array){
    array.forEach((el)=>{
        criarProjetos(el)
    })
}
// ----------------------------------------------------

// ----------------CRIAR-POP-INFOS-PROJECTS-----------------
function criarPopInfo(obj){

    let pop_project = document.createElement("div")
    pop_project.classList.add("pop_project")
    document.body.appendChild(pop_project)

    let pop_content = document.createElement("div")
    pop_content.classList.add("pop_proj-content")
    pop_project.appendChild(pop_content)

    let fecha_pop = document.createElement("button")
    fecha_pop.classList.add("fecha_pop")
    pop_content.appendChild(fecha_pop)

    let iconArrow = document.createElement("i")
    iconArrow.classList.add("bx", "bx-right-arrow-alt")
    fecha_pop.appendChild(iconArrow)

    fecha_pop.addEventListener("click", ()=>{
        document.querySelector(".pop_project").style.transform = "translate(2000px)"
    })

    let article = document.createElement("article")
    pop_content.appendChild(article)

    let img = document.createElement("img")
    pop_content.appendChild(img)

    let h1 = document.createElement("h1")
    article.appendChild(h1)

    let a = document.createElement("a")
    article.appendChild(a)

    obj.video.activated ? a.innerHTML = "Assistir" : a.innerHTML = "Visitar"


    a.addEventListener("click", ()=>{
        if(obj.video.activated){
            abrirVideoRep(obj)
        }else{
            a.href = obj.url
            a.target = "_blank"
            document.querySelector(".pop_project").remove()
        }
    })


    let ul = document.createElement("ul")
    article.appendChild(ul)

    obj.techs.forEach((tech)=>{
        ul.innerHTML += "<i class='bx bxl-"+tech+"'></i>"
    })

    h1.innerHTML = obj.name
    img.src = "/Assets/Persons_Gif/panda.gif"

    setTimeout(()=>{
        document.querySelector(".pop_project").style.transform = "translate(0px)"
    }, 100)
    
}
// ----------------------------------------------------

// ----------------CRIAR-DIV-IFRAME-----------------
function abrirVideoRep(obj){

    document.querySelector(".pop_project").remove()
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

// ----------------------------------------------------


// ----------------FILTRO PROJECTS-----------------
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
    checkSonic(el)
    atualizaWinCards(projetos)
}
function filterProjects(el, elementFilter){
    checkSonic(el)
    limparCards()
    let arrayNew = projetos.filter(el=>{
        return el.class == elementFilter
    })
    addProjectsWindow(arrayNew)
}
// ----------------------------------------------------

// -----------------CHECK-SONIC----------------------
function checkSonic(el){
    let butfil = document.querySelectorAll(".butfil")
    butfil.forEach((el)=>{
        el.classList.remove("tremer")
    })
    el.classList.add("tremer")
}


// -----------------INFOS-Techs----------------------

function openInfos_tech(tech_id){
    let containerInfos = document.createElement("div")
    containerInfos.classList.add("containerInfos")
    document.body.appendChild(containerInfos)

    document.body.classList.add("blockScroll")

    let titleH2 = document.createElement("h2")
    let infosP = document.createElement("p")

    let article = document.createElement("article")

    let button_sair = document.createElement("button")
    button_sair.innerText = "Fechar"
    article.appendChild(button_sair)

    button_sair.addEventListener("click", ()=>{
        document.body.removeChild(containerInfos)
        document.body.classList.remove("blockScroll")
    })

    let inf_tech = tech_infos.filter(obj_tech=>{
        return  obj_tech.id.toLowerCase() === tech_id.toLowerCase()
    })



    let hiperlink_saibamais = document.createElement("a")
    hiperlink_saibamais.innerText = "Saiba mais"
    hiperlink_saibamais.href = inf_tech[0].link
    hiperlink_saibamais.target = "_blank" 
    article.appendChild(hiperlink_saibamais)


    titleH2.innerText = "Mas o'que é " + inf_tech[0].name + "?"
    infosP.innerHTML = inf_tech[0].infos

    containerInfos.appendChild(titleH2)
    containerInfos.appendChild(infosP)
    containerInfos.appendChild(article)


}

function visibilityProjects(el){
    let containerProjects = document.querySelector(".container_portfolio")
    if(containerProjects.classList.contains("visibilityHiddenCont")){
        containerProjects.classList.remove("visibilityHiddenCont")
        el.querySelector(".visibility_display").innerHTML = "Ver menos"
        el.querySelector(".icon_indication").classList.add("rotateArrowUp")
    }else{
        containerProjects.classList.add("visibilityHiddenCont")
        el.querySelector(".visibility_display").innerHTML = "Ver mais"
        el.querySelector(".icon_indication").classList.remove("rotateArrowUp")
    }
}