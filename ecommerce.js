
//variables....................................................................................................................

let categorieDiv = document.querySelectorAll('.cat')
let principaldiv = document.querySelector('.principalcontainer')
let cartdiv = document.querySelector('.cartdivlist')
let subtotalDiv = document.querySelector('#price')
let checkoutBtnDiv = document.querySelector('.checkoutbtn')
let emptyingCart = document.querySelector('.deletecart')

let buttonaddtocart = null
let buttonremovecart = null

let games = [];
let totalprice = 0

//class........................................................................................................................

class Game //class
{
    constructor( id ,name , price , cat , plateform , quantity)
    {
        this.id = id
        this.name = name
        this.price = price
        this.cat = cat
        this.plateform = plateform
        this.quantity = quantity
    }

}

//instanciation article..........................................................................................................

let tlou1 = new Game(1 , "The last of us1" , 60 , "Action/aventure" , "Playstation" , 1)
let tlou2 = new Game(2 , "The last of us2" , 90 , "Action/aventure" , "Playstation" , 1)
let hzd = new Game(3 , "Horizon zero dawn" , 49 ,"Action/aventure" , "Playstation" , 1)
let daysgone = new Game(4 , "Days gone" , 35 , "Action/aventure" , "Playstation" , 1)

let halo = new Game(5 , "Halo" , 29 , "Action/aventure" , "Xbox" , 1)
let Gow = new Game(6 , "Gear of war" , 59 , "Action/aventure" , "Xbox" , 1)
let fh4 = new Game(7 , "Forza 4" , 49 , "Course" , "Xbox" , 1)
let fh5 = new Game(8 , "Forza 5" , 55 , "Course" , "Xbox" , 1)

let mario = new Game(9 , "Mario" , 19 , "Action/aventure" , "Nintendo" , 1)
let pokemon = new Game(10 , "Pokemon or" , 29 , "Rpg" , "Nintendo" , 1)
let zeldabotw = new Game(11 , "Zelda breath of the wild" , 49 , "Action/aventure Rpg" , "Nintendo" , 1)
let zeldatp = new Game(12 , "Zelda twilight princess" , 15 , "Action/aventure Rpg" , "Nintendo" , 1)

let codmw3 = new Game(13 , "Call of mw3" , 120 , "Fps" , "Playstation Xbox Nintendo" , 1)
let codbo4 = new Game(14 , "Call of bo4" , 25 , "Fps" , "Playstation Xbox Nintendo" , 1)
let nfs = new Game(15 , "Need for speed unbound" , 70 , "Course" , "Playstation Xbox Nintendo" , 1)
let thecrew = new Game(16 , "The crew motorfest" , 12 , "Course" , "Playstation Xbox" , 1)
let forza3 = new Game(17 , "Forza 3" , 12 , "course" , "Xbox" , 1)
let thedivision = new Game(18 , "The division 2" , 20 , "Rpg" , "Playstation Xbox Nintendo" , 1)


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

//filtre tableau de jeux........................................................................................................................

function filterGame ( btncat )
{
    let gamefilter = games.filter((gamecat) => gamecat.plateform.includes(btncat.innerText) || gamecat.cat.includes(btncat.innerText))
    return gamefilter
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
                                        <div class= " flex justify-between">
                                            <p class="text-base text-neutral-600 dark:text-neutral-200 min-h-20">
                                            ${game.name}
                                            </p>
                                            <p>${game.plateform}</p>
                                        </div>
                                        <div class=" flex justify-between">
                                            <div><p>prix : ${game.price}€</p></div>
                                            <button id=${game.id} class="addcart w-24"><img src="img/others/addtocart.png" alt=""></button>
                                        </div>
                                    </div>
                                </div>`


}

//afficher toutes les card des jeux...................................................................................................

games.forEach(game => { 
                        let color = defineColor(game)

                        createCardaddtodiv(game , color)
                        buttonaddtocart = document.querySelectorAll('.addcart')
                        eventbtnaddcart(buttonaddtocart)
                      })

//fonction trie par categorie.........................................................................................................

categorieDiv.forEach( catBtn => catBtn.addEventListener("click" , 
function()
{
    principaldiv.innerHTML = ""
    
    if(catBtn.innerHTML == "All")
    {
        games.forEach( game => 
        {
            let color = defineColor(game) 
        
            createCardaddtodiv(game , color)
            buttonaddtocart = document.querySelectorAll('.addcart')
            eventbtnaddcart(buttonaddtocart)
        })
    }
    else
    {
        filterGame(catBtn).forEach(game => 
        {
            let color = defineColor(game)
            
            createCardaddtodiv(game , color)
            buttonaddtocart = document.querySelectorAll('.addcart')
            eventbtnaddcart(buttonaddtocart)
        })
    }
     
}))

//definire couleurs par categories ..........................................................................................................

function defineColor(game)
{
    let color = ""
            game.plateform == 'Playstation' ? color = 'blue' : 
            game.plateform == 'Xbox' ? color = 'green' : 
            game.plateform == 'Nintendo' ? color = 'red' : color = 'white'
    return color
}


//code panier............................................................................................................................................................

//fonction card div panier .....................................................................................................

function cartcard(game)
{
     cartdiv.innerHTML += `<li class="flex py-6">
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
                                    <p class="text-gray-500">Qty ${game.quantity}</p>

                                    <div class="flex">
                                    <button type="button" id=${game.id} class="removebtn font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>`
}

// fonction button add to cart ..............................................................................................................

let cart = []

function eventbtnaddcart(btns)
{
    btns.forEach( btnAdd => btnAdd.addEventListener("click" , 
    function()
    {
        games.forEach( game => 
            {
                if (game.id == btnAdd.id)
                {   
                    
                    let GameExistInArrayCart = cart.find(g => g.id == game.id)
                    
                    if(GameExistInArrayCart)
                    {
                        if(GameExistInArrayCart.quantity < 10)
                        {
                            GameExistInArrayCart.quantity++
                        }
                        
                        buttonremovecart = document.querySelectorAll('.removebtn')
                        eventbtnremovecart(buttonremovecart)
                    }
                    else
                    {
                        cart.push(game)
                        
                    }
                    
                    let  totalcart = cart.reduce( (sum , e) => {return sum += e.price * e.quantity},0)

                    totalprice = totalcart

                    subtotalDiv.innerHTML = ""
                    subtotalDiv.innerText = ` $ ${totalprice}`

                    cartdiv.innerHTML = ""
                    cart.forEach( game => {cartcard(game)})

                    buttonremovecart = document.querySelectorAll('.removebtn')
                    eventbtnremovecart(buttonremovecart)
                }
            })
    }))
}


//function button remove from cart ...........................................................................................................

function eventbtnremovecart(btns)
{
    btns.forEach( btnRmv => btnRmv.addEventListener("click" , 
    function()
    { 
        let findGameInCart = cart.find(g => g.id == btnRmv.id)
            
        if( findGameInCart && findGameInCart.quantity > 1 )
                {
                    findGameInCart.quantity -= 1

                    cartdiv.innerHTML = ""
                    cart.forEach( game => {cartcard(game)})
                    totalprice -= findGameInCart.price
                    subtotalDiv.innerHTML = ""
                    subtotalDiv.innerText = ` $ ${totalprice}`
                    buttonremovecart = document.querySelectorAll('.removebtn')
                    eventbtnremovecart(buttonremovecart)
                }
                else if ( findGameInCart && findGameInCart.quantity == 1)
                {
                    cart.splice(cart.indexOf(findGameInCart) , 1)
                    cartdiv.innerHTML = ""
                    cart.forEach( game => {cartcard(game)})
                    totalprice -= findGameInCart.price
                    subtotalDiv.innerHTML = ""
                    subtotalDiv.innerText = ` $ ${totalprice}`
                    buttonremovecart = document.querySelectorAll('.removebtn')
                    eventbtnremovecart(buttonremovecart)
                }
                if(cart.length == 0 )
                {
                    cartdiv.innerHTML = "panier vide"
                    subtotalDiv.innerHTML = " $ 0"
                }

                totalprice = totalcart
                subtotalDiv.innerHTML = ""
                subtotalDiv.innerText = ` $ ${totalprice}`
    }))
}

//function commande valider panier / panier vide.......................................................................................................................

checkoutBtnDiv.addEventListener("click" , 
function()
{
    if(cart.length == 0)
    {
        window.alert("votre panier est vide")
    }
    else
    {
        
        window.alert("**----- VALIDEZ votre panier -----**")
        
        cart.forEach( cartgame => cartgame.quantity = 1)
        cart.length = 0
        cartdiv.innerHTML = ""
        subtotalDiv.innerHTML = ""
        cartdiv.innerHTML = "panier vide"
        subtotalDiv.innerHTML = " $ 0"
        totalprice = 0
    }
})

// vider tout le panier ..............................................................................................................................................

emptyingCart.addEventListener("click" , 
function()
{
        cart.forEach( cartgame => cartgame.quantity = 1)
        cart.length = 0
        cartdiv.innerHTML = ""
        subtotalDiv.innerHTML = ""
        cartdiv.innerHTML = "panier vide"
        subtotalDiv.innerHTML = " $ 0"
        totalprice = 0
})