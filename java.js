const dogs = [
    {
        name: 'Snickers',
        age: 2,
    },
    {
        name: 'Hugo',
        age: 8,
    },
];
// read html
function makeGreen(){
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}



// regular
console.log("hello");


// interpolated
console.log('I am the first %s string!', 'meh');
// OR
let s = 'meh';
console.log(`I am the second ${s} string!`);


// styled
console.log('%c I am some styled text', 'font-size: 1rem; color: purple; background: white; text-shadow: 0px 0px 10px #171717;');

// warning
console.warn("THIS FUNCTION IS THE ISSUE");

// error
console.error("THIS FUNCTION IS THE ISSUE");

// info
console.info("I can see you");

// testing
console.assert(1 == 1, 'That is wrong');                                            // similar to if statment
// OR
console.assert(p.classList.contains("ouch"), "There is no 'ouch' in the p tag!");

// clearning
// console.clear();

// viewing dom elements
console.log(p);
console.dir(p);

// grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);                                                                    
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age}`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.info("%c _____________", "background: red;");
    console.groupEnd(`${dog.name};`);                                                       
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
// 
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');


// timing
console.time('fetch data');
fetch('https://api.github.com/users/webos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetch data');
    });

console.table(dogs);