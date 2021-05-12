const rps = [{
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9p17OKzApVIJ1rVg8AulOkXRNNX5B67QNeg&usqp=CAU"
},
{
    name: "Scissors",
    img: "https://cdn3.volusion.com/4jdsg.2wu4y/v/vspfiles/photos/608206-2.jpg?v-cache=1412526070"
},
{
    name: "Paper",
    img: "https://images.unsplash.com/photo-1586074299757-dc655f18518c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
}
]



function computerChoice(playerSelection) {
    drawItem(playerSelection)
    let computerChoice = rps[0];
    if (computerChoice.name == playerSelection.name) {
        console.log("tie")
        document.getElementById('item-details').innerHTML =
            '<h1 class = "mt-4">Tie!</h1> <img class "mt-4" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9p17OKzApVIJ1rVg8AulOkXRNNX5B67QNeg&usqp=CAU">'



    } else if ("Scissors" == playerSelection.name) {
        console.log("Computer wins")
        document.getElementById('item-details').innerHTML =
            ' <h1 class = "mt-4">Computer Wins!</h1> <img class = "mt-4" src = "https://cdn3.volusion.com/4jdsg.2wu4y/v/vspfiles/photos/608206-2.jpg?v-cache=1412526070 width = "300" height = "168">'

    }
    else if ("Paper" == playerSelection.name) {
        console.log("Player wins")
        document.getElementById('item-details').innerHTML =
            '<h1 class = "mt-4">Player Wins</h1> <img class = "mt-4" src = "https://images.unsplash.com/photo-1586074299757-dc655f18518c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80 width = "300" height = "168">'
    }

}











function play(itemName) {
    if (typeof itemName != 'string') {
        throw new Error(`${itemName} is not a string`)
    }
    let found = rps.find(item => item.name == itemName)
    if (!found) {
        throw new Error(`${itemName} is not found`)
    }
    computerChoice(found)
}

function drawItem(item) {


    const itemElem = document.getElementById('item-details')
    itemElem.innerHTML = /*html*/ `
        <div>
            <img src="${item.img}" class="img-fluid" onclick="spinTheItem(event)" />
            <h1>
                ${item.name}
            </h1>
        </div>
`
}

function spinTheItem(event) {
    const imgElem = event.target
    imgElem.classList.add('spin')


    setTimeout(chooseRandomItem, 1000)
}

function chooseRandomItem() {
    const i = Math.floor(Math.random() * rps.length)
    const item = rps[i]
    drawItem(item)
}
