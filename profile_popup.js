const popup = document.querySelector('.popup_profile');
const profile = document.querySelector('.a_profile');

profile.addEventListener('click', function () {
    if ( popup.style.display === 'none') {
        popup.style.display = 'block';
        popup.classList.remove('popup_animation_exit');
        popup.classList.add('popup_animation_enter');
    } else if (popup.style.display !== 'none'){
        // popup.classList.add('popup_animation_exit');
        // popup.classList.remove('popup_animation_enter');
        popup.style.display = 'none';

    }
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        popup.classList.add('popup_animation_exit');
    }
})
