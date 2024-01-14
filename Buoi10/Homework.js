const cats = [6, 8, 10, 1, 3, 4, 5, 6];
const human = cats.map(function (cat) {
    if (cat <= 2) return 2 * cat;
    else return cat * 4 + 16;
});

console.log(human);
const adult = human.filter(function (h) {
    return h >= 18;
});

console.log(adult);
const avg =
    adult.reduce(function (preValue, curValue, curIdx) {
        return preValue + curValue
    }, 0) / adult.length;


//2
const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach(function (dog) {
    const recFood = dog.weight ** 0.75 * 28;
    dog.recFood = recFood;
    // dogs[i] = {
    //     recFood,
    //     ...dog,
    // };
});
console.log(dogs);

const sarahDog = dogs.find(function (dog) {
    return dog.owners.includes("Sarah");
});

if (sarahDog.curFood > sarahDog.recFood) {
    console.log("Ăn nhiều");
}
else {
    console.log("Ăn ít");
}

const ownersEatTooMuch = dogs.
    filter((dog) => {
        return dog.curFood > dog.recFood;
    })
    .map((dog) => {
        return dog.owners;
    })
    .flat();

console.log(ownersEatTooMuch);


