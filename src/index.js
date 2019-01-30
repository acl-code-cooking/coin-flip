import catOrDog from './cat-or-dog.js';
const pickForm = document.getElementById('pick-form');

pickForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('form submitted');
    const randomNumber = Math.random();
    console.log(randomNumber);

    //after we get to this point call catOrDog() no params and console.log it
    const animal = catOrDog(randomNumber);
    console.log(animal);

});
