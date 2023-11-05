window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    }); 
    
    const home_btn = document.querySelector('#home_');
    home_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    }); 

    const paragraph = document.getElementById('long-paragraph');
    const words = paragraph.innerText.split(' ');

    paragraph.innerHTML = words.map(word => {
        const randomClass = `glow-word-${Math.floor(Math.random() * 7) + 1}`;
        return `<span class="${randomClass}">${word}</span>`;
    }).join(' ');
}