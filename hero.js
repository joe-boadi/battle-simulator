// Create superhero object
const superhero = {
    full_name: "Joe Orion",
    secretIdentity: "Coding",
    powers: ['Reading documentation', 'Communicating'],
    weakness: ['lazy', 'sleep']
}
// console.log(superhero)
// Methods to superhero object
superhero.usePower = function(powerName){
    console.log(`${this.full_name} is using ${powerName}`)
}

superhero.revealIdentity = function(){
    console.log(`The secret identity of ${this.full_name} is ${this.secretIdentity}`)
}
//TEST Methods
// superhero.usePower('Reading')
// superhero.revealIdentity()

// Constructor
function Superhero(full_name, secretIdentity, powers, weakness) {
    this.full_name = full_name
    this.secretIdentity = secretIdentity
    this.powers = powers
    this.weakness = weakness
}

Superhero.prototype.usePowers = function(powerName){
    console.log(`${this.full_name} is using the ${powerName} power!`)
}
// A superhero instance
const firstSuperHero = new Superhero('Kwadjo Boadi', 'Joe Orion', ['Engineering', 'Singing'], 'Emotion')
// console.log(firstSuperHero)

//Prototypal Inheritance
// Supervillian constructor
function Supervillain(full_name, secretIdentity, powers, weakness, evil) {
    Superhero.call(this, full_name, secretIdentity, powers, weakness)
    this.evil = evil
}

//Method inheritance
Supervillain.prototype = Object.create(Superhero.prototype)
Supervillain.prototype.constructor = Supervillain //constructor of supervillian

// Method for supervillian
Supervillain.prototype.planExecute = function(){
    console.log(`${this.full_name} is executing his evil plan: ${this.evil}`)
}

//create supervillian
const firstSupervillian = new Supervillain('Adwoa', 'Unknown', ['Money', 'Influence'], 'Intellect', 'Gossip')
// console.log(firstSupervillian)
// firstSupervillian.planExecute()
// firstSupervillian.usePowers('Gossip')

const someCharacters = [
    new Superhero('Superman', 'Clark Kent', ['Flight', 'X-ray vision'], 'Kryptonite'),
    new Superhero('Batman', 'Bruce Wayne', ['Martial arts', 'Detective skills'], 'None'),
    new Supervillain('Lex Luthor', 'Lex', ['Genius intellect', 'Resourceful'], 'Superman', 'World domination'),
    new Supervillain('Thanos', 'Unknown', ['Infinity stones', 'Super strength'], 'Overconfidence', 'Universe-wide destruction')
]

const superheroCharacter = someCharacters.filter(superheroCharacter => Superhero.full_name)
// console.log(superheroCharacter)