addEventListener('DOMContentLoaded', () => {

    const texto = document.getElementById('texto')

    const maquinaEscribir = (text = '', tiempo = 0 , etiqueta = '') => {
        let arrayCaracteres = text.split('')
        etiqueta.innerHTML = ''
        let cont = 0
        etiqueta.innerHTML += 'F'
        let escribir = setInterval(function(){
            etiqueta.innerHTML += arrayCaracteres[cont]
            cont++
            if(cont === arrayCaracteres.length){
                
                cont = 0
                etiqueta.innerHTML = 'F'
            }
        }, tiempo)
    }

    maquinaEscribir("ront end Developer       ", 120,  texto)


    /* ---FIJAR MENU */
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', window.scrollY > 0) 

    })


    /*----MENU INDICATION----*/
    const secciones = document.querySelectorAll('.seccion')
    const menuItems = document.querySelectorAll('.menu-item')

    const functionObserver = entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const itemActual = Array.from(menuItems).find(item => item.dataset.url === entry.target.id)
                itemActual.classList.add('active')
                for (const item of menuItems){
                    if(item != itemActual){
                        item.classList.remove('active')
                    }
                }
            }
        })
    }

    const observer = new IntersectionObserver(functionObserver, {
        root: null,
        rootMargin:'0px',
        threshold: 0.8
    })
        
        secciones.forEach(seccion => observer.observe(seccion))
        console.log(secciones)



    /* --- MENU ACTIVE ---*/

    const toggleButton = document.getElementsByClassName('nav-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]


    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })


    /* --- LANGUAGE ---*/
    


    const toggleLanguageES = document.getElementsByClassName('language-es')[0]
    const toggleLanguageEN = document.getElementsByClassName('language-en')[0]
    
    var espanol = Boolean
    var ingles = Boolean

    if(espanol == true){
        toggleLanguageES.classList.toggle('active')
        
    } else{
        toggleLanguageEN.classList.toggle('active')
    }

    if(ingles == true){
        toggleLanguageEN.classList.toggle('active')
        
    } else{
        toggleLanguageES.classList.toggle('active')
    }

    toggleLanguageES.addEventListener('click', () => {
        location.href="index-es.html"
    })

    toggleLanguageEN.addEventListener('click', () => {
        location.href="index.html"
    })

   



})