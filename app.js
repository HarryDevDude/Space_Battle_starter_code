const btn = document.querySelector('button');
const enemy = document.querySelector('.enemyStats')
const player =document.querySelector('.playerStats')
const nameBox = document.querySelector('.nameBox')
const body = document.querySelector('body')
const bodyContainer = document.querySelector('.bodyContainer')
// console.log(body)

console.log(enemy)
// console.log(btn)
// Create USS Schwarzenegger Ship
// Create alien ships
class SpaceShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.alive = true;
    }
    checkShipStatus() {
        if (this.hull <= 0) {
            return this.alive = false;
            
        }
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}





// change
const ussHelloWorld = new SpaceShip('USS Schwarzenegger', 20, 5, .7);
const spaceFleet = []
function addShips(i) {
    spaceFleet.push(new SpaceShip(`AlienShip${i}`, getRandomInt(3, 6), getRandomInt(2, 4), getRandomNum(.6, .8)))
}
for (let i = 0; i < 6; i++) {
    addShips(i);
}
console.log(spaceFleet)
let alienAttacker = spaceFleet.pop()

function getEnemyHull() { enemy.innerText = `Hull : ${alienAttacker.hull}\nFirePower : ${alienAttacker.firepower}\nAccuracy : ${alienAttacker.accuracy}\n` }
getEnemyHull()

function getPlayerHull() {player.innerText = `Hull : ${ussHelloWorld.hull}\nFirePower : 5\nAccuracy : .7\n`}
getPlayerHull()

function getEnemyName(){nameBox.innerText = `${alienAttacker.name}`
}
getEnemyName()


// Our attack
function ussAttack() {
    if (Math.random() <= ussHelloWorld.accuracy) {
        alienAttacker.hull = alienAttacker.hull - ussHelloWorld.firepower;
        getEnemyHull()
        console.log(`You hit them for ${ussHelloWorld.firepower} damage! `)
        
    } else{
        console.log(`You missed!`)}
}
// their? attack
function alienAttack() {
    if (Math.random() <= alienAttacker.accuracy) {
        ussHelloWorld.hull = ussHelloWorld.hull - alienAttacker.firepower;
        getPlayerHull()
        console.log(`Alien hit you for ${alienAttacker.firepower} damage! `)

    }else{
        console.log(`They missed! Nice!`)}
}

// test prompt on defeat :{
 function lose(){

    prompt('Game Over')
    // alert('Game Over')
    body.classList.add("hidden")
    // fail image
    bodyContainer.style.width = "0px"
    console.dir(body)
 }

// kill combat
function combat() {
    // if(alienAttacker.alive === false && spaceFleet === null){
    // console.log(`You win!`)

     if (alienAttacker.alive) {
        // /*test */ while(alienAttacker.alive && ussHelloWorld.alive){
            // if you lost
            if(ussHelloWorld.alive === false){
                lose()
            }
        
        ussAttack();
        alienAttacker.checkShipStatus();
        alienAttack();
        ussHelloWorld.checkShipStatus();
        /*test */
    } else {
        if(spaceFleet.length > 0){
        alienAttacker = spaceFleet.pop();
         }
        else{console.log(`You Win!`)
        // alert('You Win!')
        // prompt('Play again, y/n?')
        // window.location.reload(); 
        }
         /*flanking */
        getEnemyHull()
        console.log(`You destroyed ${alienAttacker.name}! `)
        getEnemyName() /* displays name change per kill*/
        getPrompt()
    
        
       
    }
}

// prompt and re-prompt on wrong answer
function getPrompt(){
    if(ussHelloWorld.alive === false){
    lose()}
    else{
        let promptAnswer = prompt('Continue, y/n?')
        console.log(promptAnswer.toLowerCase())
        if (promptAnswer.toLowerCase() === 'y'){
        }else if(promptAnswer.toLowerCase() === 'n'){ 
          lose()  
          console.log('You Retreated, Game Over')
            // console.log('You lost')
           
        }else{ console.log("Please type 'y' or 'n'")
        getPrompt()
    }
}
}

btn.innerText = "I'll be Back";
btn.style.height = "100px";
btn.style.width = "100px";
btn.style.fontFamily = 'Share Tech Mono', 'monospace';
btn.style.fontWeight = 'bold';
btn.addEventListener('click', combat);