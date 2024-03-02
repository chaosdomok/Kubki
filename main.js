function kubekClick(evt) {
    let level = Number(this.getAttribute('level'));
    level += 24;
    if(level <= 96) {
        this.style.backgroundPosition = '0 ' + level + '%';
        this.setAttribute('level', level);
    } else {
        this.style.cursor = 'not-allowed';
    }
    

}

let kubki = document.querySelectorAll('.kubek');
kubki.forEach( kubek => {
    kubek.addEventListener('click', kubekClick);
})