const list = document.querySelector('.button_list_tours');
const tours = document.querySelectorAll('.show');
const background = document.querySelector('.list_tours');
    list.addEventListener('click', function open() {
        if (this.textContent == 'Смотреть все') {
            tours.forEach(item => {
                item.classList.remove('show');
            })
            background.style.height = '120vh';
            this.innerHTML = 'Свернуть'; 
        } else if (this.textContent == 'Свернуть') {
                for (let i = tours.length - 4; i <= tours.length - 1; i++) {
                    tours[i].classList.add('show');
                }
                background.style.height = '92vh';
                this.innerHTML = 'Смотреть все';
                this.previousElementSibbling;
        }
})









