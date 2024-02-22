
//variables....................................................................................................................

let categories = document.querySelectorAll('.cat')
let principaldiv = document.querySelector('.principalcontainer')
let cartdiv = document.querySelector('cartul')

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

let mario = new Game("Mario" , 19 , "Action/aventure" , "Nintendo")
let pokemon = new Game("Pokemon or" , 29 , "Rpg" , "Nintendo")
let zeldabotw = new Game("Zelda breath of the wild" , 49 , "Action/aventure Rpg" , "Nintendo")
let zeldatp = new Game("Zelda twilight princess" , 15 , "Action/aventure Rpg" , "Nintendo")

let codmw3 = new Game("Call of mw3" , 120 , "Fps" , "Playstation Xbox Nintendo")
let codbo4 = new Game("Call of bo4" , 25 , "Fps" , "Playstation Xbox Nintendo")
let nfs = new Game("Need for speed unbound" , 70 , "course" , "Playstation Xbox Nintendo")
let thecrew = new Game("The crew motorfest" , 12 , "course" , "Playstation Xbox")
let forza3 = new Game("Forza 3" , 12 , "course" , "Xbox")
let thedivision = new Game("The division 2" , 20 , "Rpg" , "Playstation Xbox Nintendo")


//ajout objet/article tableau.....................................................................................................

//add(thedivision)
//add(forza3)
add(tlou1)
add(zeldabotw)
add(fh4)
add(Gow)
add(codbo4)
add(hzd)
add(daysgone)
add(fh5)
add(mario)
add(tlou2)
add(thecrew)
add(zeldatp)
add(codmw3)
add(halo)
add(nfs)
add(pokemon)

function add(obj)
{ //fonction ajout article
    games.push(obj)
}

//fonction card div principal....................................................................................................................

function createCard(name , price , color)
{
    return `<div class="card block max-w-[20rem] bg-${color}-600 max-h-[20rem] m-5 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
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

//afficher toutes les card des jeux...................................................................................................

games.forEach(game => { 
let color = ""
game.plateform == 'Playstation' ? color = 'blue' : game.plateform == 'Xbox' ? color = 'green' : game.plateform == 'Nintendo' ? color = 'red' : color = 'white'

principaldiv.innerHTML += createCard(game.name , game.price , color)})

//fonction trie par categorie.............................................................................................................................................................

categories.forEach( cat => cat.addEventListener("click" , 
function()
{
    principaldiv.innerHTML = ""
    
    games.forEach(game => { 
    {
        let color = ""
        if(game.plateform.includes(cat.innerText) || game.cat.includes(cat.innerText))
        {
            game.plateform == 'Playstation' ? color = 'blue' : game.plateform == 'Xbox' ? color = 'green' : game.plateform == 'Nintendo' ? color = 'red' : color = 'white' 
            principaldiv.innerHTML += createCard(game.name , game.price , color)
        }
        else if (cat.innerText == "All")
        {
            game.plateform == 'Playstation' ? color = 'blue' : game.plateform == 'Xbox' ? color = 'green' : game.plateform == 'Nintendo' ? color = 'red' : color = 'white' 
            principaldiv.innerHTML += createCard(game.name , game.price , color)
        }
    }})
}))


//code panier............................................................................................................................................................

let buttonaddtocart = document.querySelectorAll('.addcart')

//fonction card panier .....................................................................................................

function cartcard(name , price )
{
    return `<li class="flex py-6">
                <div class="ml-4 flex flex-1 flex-col">
                <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                        <a href="#">${name}</a>
                    </h3>
                    <p class="ml-4">$${price}</p>
                    </div>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                    <p class="text-gray-500">Qty 1</p>

                    <div class="flex">
                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                    </div>
                </div>
                </div>
            </li>`
}

let clickadd = function()
{
    console.log("cc")
}

buttonaddtocart.forEach( button => button.addEventListener("click" , clickadd))