
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close' ){
        this.parentNode.className = 'skills_content skills_open'
    }
}


skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)

})



const tabs = document.querySelectorAll('[data-target]')
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')

        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    
    })
})



const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', ()=> {
        modal(i)
    })
})
    
modalCloses.forEach((modalCloses) => {
    modalCloses.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })

    })

})


/*-==================== PORTFOLIO 2 ====================-*/


let swiperPortfolio = new Swiper('.portfolio_container', {
    cssMode:true,
    loop: true,

    navigation:{
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let swiperTestimonial = new Swiper('.testimonial_container', {
    loop: true,
    grabCursor:true,
    spaceBetween:48,

    navigation:{
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets:true,
    },
    breakPoint:{
        568:{
            slidesPerView: 2,
        }
    }
});



const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >=80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')

    if(this.scrollY >=80) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'

const getCurrentIcon = () =>  themeButton.classList.contains(iconTheme) ? 'uil-moon':'util-sun'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
