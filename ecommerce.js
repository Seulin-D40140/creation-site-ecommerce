
//variables....................................................................................................................

let categories = document.querySelectorAll('.cat')
let principaldiv = document.querySelector('.principalcontainer')
let cartdiv = document.querySelector('cartul')
let buttonaddtocart = null
let games = [];


//class........................................................................................................................

class Game //class
{
    constructor( id ,name , price , cat , plateform )
    {
        this.id = id
        this.name = name
        this.price = price
        this.cat = cat
        this.plateform = plateform
    }

}

//instanciation article..........................................................................................................

let tlou1 = new Game(1 , "The last of us1" , 60 , "Action/aventure" , "Playstation")
let tlou2 = new Game(2 , "The last of us2" , 90 , "Action/aventure" , "Playstation")
let hzd = new Game(3 , "Horizon zero dawn" , 49 ,"Action/aventure" , "Playstation")
let daysgone = new Game(4 , "Days gone" , 35 , "Action/aventure" , "Playstation")

let halo = new Game(5 , "Halo" , 29 , "Action/aventure" , "Xbox")
let Gow = new Game(6 , "Gear of war" , 59 , "Action/aventure" , "Xbox")
let fh4 = new Game(7 , "Forza 4" , 49 , "course" , "Xbox")
let fh5 = new Game(8 , "Forza 5" , 55 , "course" , "Xbox")

let mario = new Game(9 , "Mario" , 19 , "Action/aventure" , "Nintendo")
let pokemon = new Game(10 , "Pokemon or" , 29 , "Rpg" , "Nintendo")
let zeldabotw = new Game(11 , "Zelda breath of the wild" , 49 , "Action/aventure Rpg" , "Nintendo")
let zeldatp = new Game(12 , "Zelda twilight princess" , 15 , "Action/aventure Rpg" , "Nintendo")

let codmw3 = new Game(13 , "Call of mw3" , 120 , "Fps" , "Playstation Xbox Nintendo")
let codbo4 = new Game(14 , "Call of bo4" , 25 , "Fps" , "Playstation Xbox Nintendo")
let nfs = new Game(15 , "Need for speed unbound" , 70 , "course" , "Playstation Xbox Nintendo")
let thecrew = new Game(16 , "The crew motorfest" , 12 , "course" , "Playstation Xbox")
let forza3 = new Game(17 , "Forza 3" , 12 , "course" , "Xbox")
let thedivision = new Game(18 , "The division 2" , 20 , "Rpg" , "Playstation Xbox Nintendo")


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

function createCardaddtodiv(game , color)
{
    principaldiv.innerHTML += `<div class="card block max-w-[20rem] bg-${color}-600 max-h-[20rem] m-5 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                                        <img
                                        class="rounded-t-lg"
                                        src="img/images/${game.name}.jpg" width="100%"
                                        alt="" />
                                    </div>
                                    <div class="p-6">
                                        <p class="text-base text-neutral-600 dark:text-neutral-200 min-h-20">
                                        ${game.name}
                                        </p>
                                        <div class="btn-${game.id} flex justify-between">
                                            <div><p>prix : ${game.price}€</p></div>
                                            <button id=${game.id} class="addcart w-24"><img src="img/others/addtocart.png" alt=""></button>
                                        </div>
                                    </div>
                                </div>`

    // const addbtn = creatbtn(game)
    // const btns = document.querySelector(`.btn-${game.id}`)
    // btns.appendChild(addbtn)
}

// function creatbtn(game)
// {
//     let btnelement = document.createElement('button')
//     btnelement.classList.add("addcart" , "w-24")
//     let img = document.createElement('img')
//     img.setAttribute("src" , "img/others/addtocart.png")
//     btnelement.appendChild(img)

//     btnelement.addEventListener('click' , function(){
//         console.log(game)
//     })

//     return btnelement
// }

//afficher toutes les card des jeux...................................................................................................

games.forEach(game => { 
                        let color = "white"
                        game.plateform == 'Playstation' ? color = 'blue' : 
                        game.plateform == 'Xbox' ? color = 'green' : 
                        game.plateform == 'Nintendo' ? color = 'red' : color = 'white'

                        createCardaddtodiv(game , color)
                        buttonaddtocart = document.querySelectorAll('.addcart')
                        eventbtnaddcart(buttonaddtocart , game)
                      })

//fonction trie par categorie.........................................................................................................

categories.forEach( cat => cat.addEventListener("click" , 
function()
{
    principaldiv.innerHTML = ""
    
    games.forEach(game => { 
    {
        let color = ""
        if(game.plateform.includes(cat.innerText) || game.cat.includes(cat.innerText))
        {
            game.plateform == 'Playstation' ? color = 'blue' : 
            game.plateform == 'Xbox' ? color = 'green' : 
            game.plateform == 'Nintendo' ? color = 'red' : color = 'white' 
            
            createCardaddtodiv(game , color)
            buttonaddtocart = document.querySelectorAll('.addcart')
            eventbtnaddcart(buttonaddtocart , game)
        }
        else if (cat.innerText == "All")
        {
            game.plateform == 'Playstation' ? color = 'blue' : 
            game.plateform == 'Xbox' ? color = 'green' : 
            game.plateform == 'Nintendo' ? color = 'red' : color = 'white' 
            
            createCardaddtodiv(game , color)
            buttonaddtocart = document.querySelectorAll('.addcart')
            eventbtnaddcart(buttonaddtocart , game)
        }
    }})
}))



//code panier............................................................................................................................................................

//fonction card panier .....................................................................................................

function cartcard(game)
{
    return `<li class="flex py-6">
                <div class="ml-4 flex flex-1 flex-col">
                    <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">${game.name}</a>
                        </h3>
                        <p class="ml-4">$${game.price}</p>
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

function eventbtnaddcart(btns , game)
{
    btns.forEach( btn => btn.addEventListener("click" , function(){console.log(game)}))
}
