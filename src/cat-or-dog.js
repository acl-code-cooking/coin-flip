function catOrDog(randomNumber) {
    let animal = '';
    if(randomNumber < 0.5) {
        animal = 'cat';
    } else {
        animal = 'dog';
    }
    return animal;
}

export default catOrDog;
