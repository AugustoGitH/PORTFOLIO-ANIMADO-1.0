const apresentarH1 = document.querySelector("#apresentH1")


document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener("scroll", ()=>{
        naveLine()
    })
    digitarH1()
    atualizaWinCards(projetos)
    setQuantityProjects()
})



function naveLine(){
    const naveIcon = document.querySelector(".fogueteGuia")
    let positionString = String(parseInt(window.scrollY) + 270)
    naveIcon.style.top = positionString +"px"
}


function digitarH1(){
    apresentarH1.innerHTML = ""
    digitarInner("Olá meu nome é Augusto")
    .then(()=>{
        digitarInner("Sou Desenvolvedor Front-End").then(()=>{
            digitarInner("e Web Designer :)").then(()=>{
                let stringArray = "Olá meu nome é Augusto".split("")
                stringArray.forEach((letter, i)=> setTimeout(()=> apresentarH1.innerHTML += letter, 100* i))
            })
        })
    })
}

const editContainer = {
    remove: (containers, effect)=>{
        let container = document.querySelector(containers)
        if(effect === "default") return container.remove()
        if(effect === "translate") return container.style.transform = "translate(2000px)"
    }
}

function digitarInner(string){
    return new Promise((res)=>{
        let stringArray = string.split("")
        setTimeout(()=>{
            apresentarH1.innerHTML = ""
            stringArray.forEach((letter, i)=> setTimeout(()=> apresentarH1.innerHTML += letter, 100* i))
        }, 1000)
        setTimeout(()=>{
            stringArray.forEach((letter, i)=>{
                setTimeout(()=>{
                    stringArray.pop()
                    let ArrayConvert = stringArray.toString().replace(/,/g,"")
                    apresentarH1.innerHTML = ArrayConvert
                }, 100* i)
            })
        }, 4500)
        setTimeout(res, 7100)
    })
    
}
function setQuantityProjects(){
    let displayValue = projetos.length >= 10 ? "00" + projetos.length : "000" + projetos.length
    document.querySelector(".display_quantityProjetos").innerHTML = `PROJETOS REALIZADOS => <span>${displayValue}</span>`
}

function criarProjetos(obj){
    let containerPort = document.querySelector(".container_portfolio")
    let card = document.createElement("div")
    card.id = obj.id
    card.classList.add(obj.classColor, "cards_sites")
    containerPort.appendChild(card)

    card.addEventListener("click", ev=>{
        if(!document.querySelector(".pop_project")) return criarPopInfo(projetos[ev.target.parentNode.id])
        else{
            editContainer.remove(".pop_project", "default")    
            criarPopInfo(projetos[ev.target.parentNode.id])
        }
    })
    let img = document.createElement("img")
    card.appendChild(img)
    img.src = "/Assets/Projects_Imgs/"+ obj.name_img + ".png"
}
function addProjectsWindow(array){
    array.forEach((el)=> criarProjetos(el))
    verify_buttonVisibility()
}

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
    editContainer.remove(".pop_project", "translate")
    fecha_pop.addEventListener("click", ()=> editContainer.remove(".pop_project", "translate"))

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
        if(obj.video.activated) return abrirVideoRep(obj)
        else{
            a.href = obj.url
            a.target = "_blank"
            editContainer.remove(".pop_project", "default")
        }
    })


    let ul = document.createElement("ul")
    article.appendChild(ul)

    obj.techs.forEach((tech)=> ul.innerHTML += "<i class='bx bxl-"+ tech +"'></i>")

    h1.innerHTML = obj.name
    img.src = "/Assets/Persons_Gif/panda.gif"

    setTimeout(()=> document.querySelector(".pop_project").style.transform = "translate(0px)", 100)
    
}


function abrirVideoRep(obj){
    editContainer.remove(".pop_project", "default")
    let video_port = document.createElement("div")
    video_port.classList.add("video_port")
    document.body.appendChild(video_port)
    video_port.innerHTML = `<iframe id="iframe" src=${obj.video.url_video } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    let buttonSair = document.createElement("p")
    buttonSair.classList.add("buttonSairIf")
    buttonSair.innerHTML = "Sair"
    video_port.appendChild(buttonSair)
    buttonSair.addEventListener("click", ()=> video_port.remove())
}



function limparCards(){
    let cards = document.querySelectorAll(".cards_sites")
    cards.forEach(card=> card.remove())
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
    let arrayNew = projetos.filter(el=> el.class == elementFilter)
    addProjectsWindow(arrayNew)
}


function checkSonic(el){
    let buttonFilter = document.querySelectorAll(".butfil")
    buttonFilter.forEach(el=> el.classList.remove("tremer"))
    el.classList.add("tremer")
}




function openInfos_tech(tech_id){
    let containerInfos = document.createElement("div")
    containerInfos.classList.add("containerInfos", "translateY")

    document.body.classList.add("blockScroll")

    let titleH2 = document.createElement("h2")
    let infosP = document.createElement("p")

    let article = document.createElement("article")

    let button_sair = document.createElement("button")
    button_sair.innerText = "Fechar"
    article.appendChild(button_sair)

    button_sair.addEventListener("click", ()=>{
        containerInfos.classList.add("translateY")
        document.body.classList.remove("blockScroll")
        setTimeout(()=> document.body.removeChild(containerInfos), 300)
    })

    let inf_tech = tech_infos.filter(obj_tech=> obj_tech.id.toLowerCase() === tech_id.toLowerCase())



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

    document.body.appendChild(containerInfos)
    setTimeout(()=> containerInfos.classList.remove("translateY"), 200)
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

function verify_buttonVisibility(){
    let cards = document.querySelectorAll(".cards_sites")
    let verMaisButton = document.querySelector(".visibility_port")
    let containerPort = document.querySelector(".container_portfolio")
    if(cards.length < 4){
        verMaisButton.style.display = "none"
        containerPort.classList.remove("visibilityHiddenCont")
    }else{
        verMaisButton.style.display = "flex"
        containerPort.classList.add("visibilityHiddenCont")
    }
}
