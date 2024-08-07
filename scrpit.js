let menuIcon = document.querySelector('#menu-icom');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let  navLinks = document.querySelectorAll('header #navbar-contant .bt');


window.onscroll = () => {
    section.forEach(sec =>
        {
            let top = window.screenY;
            let offset = sec.offsetTop -150;
            let hight = sec.offsetHeight;
            let id = sec.getAttribute;

            if(top >= offset && top  < offset + height){
                navLinks.forEach(links =>
                    {
                        links.classList.remove('#active');
                        document.querySelector('header nav a [herf*=' + id + ']').classList.add
                        ('active')
                    } )
            }
        })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


