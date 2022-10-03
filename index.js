const button = document.querySelector('button');
const todo = document.querySelector('#todo');
const counter = document.querySelector('#counter');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const counter = document.querySelector('#counter');

  console.log(counter.textContent);
  todo.innerHTML += `<li>${name} <span class="uk-align-right" onclick="remove(this)">X</span></li>`;
  counter.innerHTML = parseInt(counter.textContent) + 1;
});

function remove(element) {
  element.parentNode.remove();
  counter.innerHTML = parseInt(counter.textContent) - 1;
}
