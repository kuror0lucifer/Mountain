
const items = document.querySelectorAll('.bookmark');

items.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('bookmark_active');
  });
});