const search = document.querySelector('.search');
const searchButton = document.querySelector('.a_lupa');

searchButton.addEventListener('click', function () {
    search.style.display = 'block';
    search.focus();
    searchButton.style.display = 'none';
    search.classList.add('search_animation_enter');

})

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        search.style.display = 'none';
        searchButton.style.display = 'block';
        searchButton.classList.add('search_animation_exit');
    }
})