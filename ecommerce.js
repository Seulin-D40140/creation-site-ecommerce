
//variables....................................................................................................................
let categories = document.querySelectorAll('.cat')
let principaldiv = document.querySelector('.principalcontainer')
let games = [];


//class........................................................................................................................
class Game //class
{
    constructor( name , price , cat , plateform)
    {
        this.name = name
        this.price = price
        this.cat = cat
        this.plateform = plateform
    }

}

//instanciation article..........................................................................................................
let tlou1 = new Game("The last of us1" , 60 , "Action/aventure" , "Playstation")
let tlou2 = new Game("The last of us2" , 90 , "Action/aventure" , "Playstation")
let hzd = new Game("Horizon zero dawn" , 49 ,"Action/aventure" , "Playstation")
let daysgone = new Game("Days gone" , 35 , "Action/aventure" , "Playstation")

let halo = new Game("Halo" , 29 , "Action/aventure" , "Xbox")
let Gow = new Game("Gear of war" , 59 , "Action/aventure" , "Xbox")
let fh4 = new Game("Forza 4" , 49 , "course" , "Xbox")
let fh5 = new Game("Forza 5" , 55 , "course" , "Xbox")

let mario = new Game("Mario" , 19 , "course" , "Nintendo")
let pokemon = new Game("Pokemon or" , 29 , "Rpg" , "Nintendo")
let zeldabotw = new Game("Zelda breath of the wild" , 49 , "Action/aventure Rpg" , "Nintendo")
let zeldatp = new Game("Zelda twilight princess" , 15 , "Action/aventure Rpg" , "Nintendo")

let codmw3 = new Game("Call of mw3" , 120 , "Fps" , "Playstation Xbox Nintendo")
let codbo4 = new Game("Call of bo4" , 25 , "Fps" , "Playstation Xbox Nintendo")
let nfs = new Game("Need for speed unbound" , 70 , "course" , "Playstation Xbox Nintendo")
let thecrew = new Game("The crew motorfest" , 12 , "course" , "Playstation Xbox")
let forza3 = new Game("Forza 3" , 12 , "course" , "Xbox")
let thedivision = new Game("The division 2" , 20 , "rpg" , "Playstation Xbox Nintendo")


//ajout objet/article tableau.....................................................................................................

//add(thedivision)
//add(forza3)
add(tlou1)
add(tlou2)
add(hzd)
add(daysgone)

add(halo)
add(Gow)
add(fh4)
add(fh5)

add(mario)
add(pokemon)
add(zeldabotw)
add(zeldatp)

add(codmw3)
add(codbo4)
add(nfs)
add(thecrew)

function add(obj)
{ //fonction ajout article
    games.push(obj)
}

//fonction card....................................................................................................................
function createCard(name , price)
{
    return `<div class="card block max-w-[20rem] m-5 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                    class="rounded-t-lg"
                    src="img/images/${name}.jpg" width="100%"
                    alt="" />
                </div>
                <div class="p-6">
                    <p class="text-base text-neutral-600 dark:text-neutral-200 min-h-20">
                    ${name}
                    </p>
                    <div class="flex justify-between">
                        <div><p>prix : ${price}€</p></div>
                        <button class="addcart w-24"><img src="img/others/addtocart.png" alt=""></button>
                    </div>
                </div>
            </div>`
}

//code.............................................................................................................................................................

//afficher toutes les card des jeux...................................................................................................
games.forEach(game => principaldiv.innerHTML += createCard(game.name , game.price))

// fonction trie par categorie
categories.forEach( cat => cat.addEventListener("click" , 
function()
{
    principaldiv.innerHTML = ""

    games.forEach(game => { 
    {
        if(game.plateform.includes(cat.innerText) || game.cat.includes(cat.innerText))
        {
            console.log(game)
            principaldiv.innerHTML += createCard(game.name , game.price)
        }
        else if (cat.innerText == "All")
        {
            principaldiv.innerHTML += createCard(game.name , game.price)
        }
    }})
}))





