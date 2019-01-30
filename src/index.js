import catOrDog from './cat-or-dog.js';
const pickForm = document.getElementById('pick-form');

pickForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('form submitted');
});
