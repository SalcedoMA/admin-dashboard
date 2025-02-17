const buttons = document.querySelectorAll('.actions, .notification, .popup');
const search = document.querySelector('.search button');
const cardActions = Array.from(document.querySelectorAll('.card-actions button'));

for (let button of buttons) {
    button.addEventListener('click', event => {
        alert('button[Action]');
      })
}

for (let action of cardActions) {
    action.addEventListener('click', event => {
        action.classList.toggle("active");
      })
}

search.addEventListener('click', event => {
    event.preventDefault();
    alert("imagine it's doing a search ;)");
  })
