const naveIcon = document.querySelector(".fogueteGuia")
const liner = document.querySelector(".lineNav")
const presentationH1 = document.querySelector("#apresentH1")



document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener("scroll", naveLine)
    digitarH1()
    atualizaWinCards(projetos)
})



function naveLine(){
    let positionString = String(parseInt(window.scrollY) + 270)
    naveIcon.style.top = positionString +"px"
}


function digitarH1(){
    presentationH1.innerHTML = ""
    digitarInner("Olá meu nome é Augusto")
    .then(()=>{
        digitarInner("Sou Desenvolvedor Front-End").then(()=>{
            digitarInner("e Web Designer :)").then(()=>{
                let stringArray = "Olá meu nome é Augusto".split("")
                stringArray.forEach((letter, i)=> setTimeout(()=> presentationH1.innerHTML += letter, 100* i))
            })
        })
    })
}

function digitarInner(string){
    return new Promise(res=>{
        let stringArray = string.split("")
        setTimeout(()=>{
            presentationH1.innerHTML = ""
            stringArray.forEach((letter, i)=> setTimeout(()=> presentationH1.innerHTML += letter, 100* i))
        }, 1000)
        setTimeout(()=>{
            stringArray.forEach((letter, i)=>{
                setTimeout(()=>{
                    stringArray.pop()
                    let ArrayConvert = stringArray.toString().replace(/,/g,"")
                    presentationH1.innerHTML = ArrayConvert
                }, 100* i)
            })
        }, 4500)
        setTimeout(res, 7100)
    })
    
}


function criarProjetos(obj){
    const containerPort = document.querySelector(".container_portfolio")

    let cardEstruturaHTML = `
        <div onclick="createPopUpInfo(this)" id="${obj.id}" class="${obj.classColor} cards_sites">
            <img src="/Assets/Projects_Imgs/${obj.name_img}.png"
        </div>
    `
    containerPort.innerHTML += cardEstruturaHTML
}

function addProjectsWindow(array){ 
    array.forEach(el=> criarProjetos(el)) 
    visibility_button()
}


function createPopUpInfo(popUp){
    if(document.querySelector(".pop_project")) document.querySelector(".pop_project").remove()
    let obj = projetos[popUp.id]

    let returnTechs = ()=>{
        let techsHTML = ""
        obj.techs.forEach(tech=> techsHTML += `<i class='bx bxl-${tech}'></i>`)
        return techsHTML
    }

    let estruturaPopUpHTML = `
        <div class="pop_project">
            <div class="pop_proj-content">
                <button onclick="Container.back('translate', '.pop_project', false)" class="fecha_pop"><i class="bx bx-right-arrow-alt"></i></button>
                <article>
                    <h1>${obj.name}</h1>
                    <a onclick="abrirVideoRep('${popUp.id}')" target="_blank" ${!obj.video.activated ? `href="${obj.url}"` : ""}>${obj.video.activated ? "Assistir" : "Visitar"}</a>
                    <uL>
                    ${returnTechs()}
                    </ul>
                </article>
                <img src="/Assets/Persons_Gif/panda.gif">
            </div>
        </div>
    `
    document.body.innerHTML += estruturaPopUpHTML
    setTimeout(()=> document.querySelector(".pop_project").style.transform = "translate(0px)", 100)
    
}

const Container = {
    
    back(method, container, all){
        if(method === "translate" && all){
            document.querySelectorAll(container).forEach(content=>{
                content.style.transform = "translate(2000px)"
                setTimeout(()=> content.remove(), 2000)
            })
        }
        if(method === "default" && all) document.querySelectorAll(container).forEach(content=> content.remove())
        if(method === "translate" && !all) document.querySelector(container).style.transform = "translate(2000px)"
        if(method === "default" && !all) document.querySelector(container).remove()
    }
}




function abrirVideoRep(id){
    let obj = projetos[id]
    if(!obj.video.activated) return false
    
    console.log(obj.video.url_video )
    let estruturaVideoHTML = `
    <div class="video_port">
        <iframe id="iframe" src=${obj.video.url_video } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p onclick="Container.back('default', '.video_port', false)" class="buttonSairIf">Sair</p>
    </div>
    `
    document.body.innerHTML += estruturaVideoHTML
}




function atualizaWinCards(array){
    Container.back("default", ".cards_sites", true)
    addProjectsWindow(array)
}

function filterTodos(el){
    checkSonic(el)
    atualizaWinCards(projetos)
}
function filterProjects(el, elementFilter){
    checkSonic(el)
    Container.back("default", ".cards_sites", true)
    let arrayNew = projetos.filter(el=> el.class == elementFilter)
    addProjectsWindow(arrayNew)
}


function checkSonic(el){
    let buttonFilter = document.querySelectorAll(".butfil")
    buttonFilter.forEach(el=> el.classList.remove("tremer"))
    el.classList.add("tremer")
}




function openInfos_tech(tech_id){

    let inf_tech = tech_infos.filter(obj_tech=> obj_tech.id.toLowerCase() === tech_id.toLowerCase())[0]


    let estruturaPopUpTechsHTML = `
        <div class="containerInfos">
            <h2>Mas o'que é ${inf_tech.name}?</h2>
            <p>${inf_tech.infos}</p>
            <article>
                <button onclick="Container.back('default', '.containerInfos', false)">Fechar</button>
                <a target="_blank" href="${inf_tech.link}">Saiba mais</a>
            </article>
        </div>
    
    `
    document.body.innerHTML += estruturaPopUpTechsHTML


}
function visibility_button(){
    let visibility_port = document.querySelector(".visibility_port")
    
    if(visibility_port){
        visibility_port.remove()
    }
    
    let portfolio_content = document.querySelector(".Portifolio_content")
    let projects = document.querySelectorAll(".cards_sites")

    let buttonEstruturaHTML = `
    <span class="visibility_port">
        <div onclick="visibilityProjects(this)">
            <p class="visibility_display">Ver mais</p>
            <i class='bx bx-down-arrow-alt icon_indication' ></i>
        </div>
    </span>
    `
    if(projects.length > 4) portfolio_content.innerHTML += buttonEstruturaHTML
    

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

