import catOrDog from './cat-or-dog.js';
const pickForm = document.getElementById('pick-form');
const image = document.getElementById('animal-image');
// const status = document.getElementById('status');
const dogCount = document.getElementById('dog-count');
const catCount = document.getElementById('cat-count');
let cats = 0;
let dogs = 0;

pickForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('form submitted');
    const randomNumber = Math.random();
    console.log(randomNumber);

  //after we get to this point call catOrDog() no params and console.log it
    const animal = catOrDog(randomNumber);
    console.log(animal);

    let imageSource = '';
    if(animal === 'cat') {
        imageSource = '../assets/cat.jpg';
        cats++;
        catCount.textContent = cats;
    } else {
        imageSource = '../assets/dog.jpg';
        dogs++;
        dogCount.textContent = dogs;
    }
  //am i getting an image source
    console.log(imageSource);

  //time to navigate to the assets folder and go into how to make one
  //set the dom node for image to have a source of imageSource
    image.src = imageSource;
    image.classList.remove('hidden');
});
