


const buttons = document.querySelectorAll('.articles');
const contents = document.querySelectorAll('.hidden');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('articles_first');
    });
    button.classList.add('articles_first');
    contents.forEach(content => {
      content.classList.remove('detailed_article');
    });
    contents[index].classList.add('detailed_article');
  });
});


  