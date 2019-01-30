function catOrDog(randomNumber) {
    let animal = '';
    if(randomNumber < 0.5) {
        animal = 'cat';
    } else {
        animal = 'dog';
    }
    return animal;

    //first create basic function that console logs hello;
}

export default catOrDog;
