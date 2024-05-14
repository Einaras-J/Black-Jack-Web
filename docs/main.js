
let balance = 1000;
let bet = 0;
let dealersScore = 0;
let yourScore = 0;
let deckNum = 102;
let deckIndex = 0;
let hideCard = false;
let realCard;
let realScore;
let yourAce = 0;
let dealerAce = 0;
let cardsAreDealt = false;
let deck = [];
let payoutMulti = 1;
let checkIfPortrait = window.matchMedia("(orientation: portrait)");
let hidenImg = document.createElement("img"); hidenImg.src = "./Cards/back.png"; hidenImg.style.width = "5vw"; if(checkIfPortrait.matches) hidenImg.style.width = "9vw"; hidenImg.style.height = "7.25vw"; if(checkIfPortrait.matches) hidenImg.style.height = "13vw"; hidenImg.id = "hidenCard";
function shuffleDeck() 
{
    for (let i = deck.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

for(let i = 0; i < 2; i++) // Image array
{
    let img = document.createElement("img"); img.src = "./Cards/2_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "2" // Create card
    let obj = {name: "2", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/2_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "2"// Create card
    obj = {name: "2", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/2_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "2"// Create card
    obj = {name: "2", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/2_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "2"// Create card
    obj = {name: "2", image: img}; deck.push(obj); // Add card to arr

    img = document.createElement("img"); img.src = "./Cards/3_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "3"// Create card
    obj = {name: "3", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/3_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "3"// Create card
    obj = {name: "3", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/3_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "3"// Create card
    obj = {name: "3", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/3_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "3"// Create card
    obj = {name: "3", image: img}; deck.push(obj); // Add card to arr

    img = document.createElement("img"); img.src = "./Cards/4_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "4"// Create card
    obj = {name: "4", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/4_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "4"// Create card
    obj = {name: "4", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/4_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "4"// Create card
    obj = {name: "4", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/4_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "4"// Create card
    obj = {name: "4", image: img}; deck.push(obj); // Add card to arr

    img = document.createElement("img"); img.src = "./Cards/5_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "5"// Create card
    obj = {name: "5", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/5_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "5"// Create card
    obj = {name: "5", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/5_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "5"// Create card
    obj = {name: "5", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/5_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "5"// Create card
    obj = {name: "5", image: img}; deck.push(obj); // Add card to arr

    img = document.createElement("img"); img.src = "./Cards/6_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "6"// Create card
    obj = {name: "6", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/6_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "6"// Create card
    obj = {name: "6", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/6_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "6"// Create card
    obj = {name: "6", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/6_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "6"// Create card
    obj = {name: "6", image: img}; deck.push(obj); // Add card to arr

    img = document.createElement("img"); img.src = "./Cards/7_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "7"// Create card
    obj = {name: "7", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/7_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "7"// Create card
    obj = {name: "7", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/7_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "7"// Create card
    obj = {name: "7", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/7_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "7"// Create card
    obj = {name: "7", image: img}; deck.push(obj); // Add card to arr

    img = document.createElement("img"); img.src = "./Cards/8_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "8"// Create card
    obj = {name: "8", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/8_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "8"// Create card
    obj = {name: "8", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/8_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "8"// Create card
    obj = {name: "8", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/8_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "8"// Create card
    obj = {name: "8", image: img}; deck.push(obj); // Add card to arr

    img = document.createElement("img"); img.src = "./Cards/9_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "9"// Create card
    obj = {name: "9", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/9_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "9"// Create card
    obj = {name: "9", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/9_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "9"// Create card
    obj = {name: "9", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/9_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "9"// Create card
    obj = {name: "9", image: img}; deck.push(obj); // Add card to arr

    img = document.createElement("img"); img.src = "./Cards/10_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/10_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/10_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/10_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr

    img = document.createElement("img"); img.src = "./Cards/ace_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "11"// Create card
    obj = {name: "11", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/ace_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "11"// Create card
    obj = {name: "11", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/ace_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "11"// Create card
    obj = {name: "11", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/ace_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "11"// Create card
    obj = {name: "11", image: img}; deck.push(obj); // Add card to arr

    img = document.createElement("img"); img.src = "./Cards/jack_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/jack_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/jack_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/jack_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr

    img = document.createElement("img"); img.src = "./Cards/king_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/king_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/king_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/king_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr

    img = document.createElement("img"); img.src = "./Cards/queen_of_clubs.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/queen_of_diamonds.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/queen_of_hearts.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
    img = document.createElement("img"); img.src = "./Cards/queen_of_spades.png"; img.style.width = "5vw"; if(checkIfPortrait.matches) img.style.width = "9vw"; img.style.height = "7.25vw"; if(checkIfPortrait.matches) img.style.height = "13vw"; img.alt = "10"// Create card
    obj = {name: "10", image: img}; deck.push(obj); // Add card to arr
}

shuffleDeck();



window.onload = function()
{
    
    loadNewGame();
   
    let button = document.getElementById("placeBet");
    button.addEventListener("click", placeBet);

    let hitButton = document.getElementById("hitButton");
    hitButton.addEventListener("click", hit);

    let standButton = document.getElementById("standButton");
    standButton.addEventListener("click", stand);
}
function loadNewGame()
{
    document.getElementById("drawScreen").style.display = "none";
    document.getElementById("winScreen").style.display = "none";
    document.getElementById("loseScreen").style.display = "none";

    document.getElementById("balance").innerText = balance.toString() + "$";
    if(bet === 0)
    {
        document.getElementById("currBet").innerText = "";
    } else document.getElementById("currBet").innerText = bet.toString() + "$";

    document.getElementById("currDeck").innerText = deckNum.toString();
    
    if(yourScore < 10) document.getElementById("yourScore").innerText = "0" + yourScore.toString()
    else document.getElementById("yourScore").innerText = yourScore.toString();

    if(dealersScore < 10) document.getElementById("dealersScore").innerText = "0" + dealersScore.toString()
    else document.getElementById("dealersScore").innerText = dealersScore.toString();
    
}
function placeBet()
{
    let checkIfNull = false;
    if(document.getElementById("newBet").value <= balance && document.getElementById("newBet").value > 0 && bet === 0 && document.getElementById("newBet").value % 1 === 0)
    {
        bet = document.getElementById("newBet").value;
        balance -= bet;
        checkIfNull = true;
    }
    document.getElementById("newBet").value = " ";
    loadNewGame();
    if(checkIfNull === true) dealCards();
}
function cardForDealer(i)
{
    let temp = document.getElementById("dealersSide");
    if(hideCard === false)
    {
        temp.appendChild(deck[i].image);
        calcDealersScore(deck[i].name);
        hideCard = true;
    }
    else
    {
        temp.appendChild(hidenImg);
        realCard = deck[i];
        calcDealersScore(deck[i].name);
    } 
    deckIndex++;
    deckNum--;
    loadNewGame();
    
}
function cardForYou(i)
{
    let temp = document.getElementById("yourSide");
    temp.appendChild(deck[i].image);
    deckIndex++;
    deckNum--;
    loadNewGame();
    calcYourScore(deck[i].name);
}
 async function dealCards()
{
    cardForYou(deckIndex);
    await sleep(500);
    cardForDealer(deckIndex);
    await sleep(500);
    cardForYou(deckIndex);
    await sleep(500);
    cardForDealer(deckIndex);
    if(yourScore === 21) stand();
    cardsAreDealt = true;
}
async function sleep(milSeconds) {
    return new Promise((resolve) => setTimeout(resolve, milSeconds));
  }

function calcYourScore(num)
{
    int = parseInt(num);
    if(int === 11)
    {
        if(yourScore + 11 > 21)
        {
            yourScore += 1;

        }
        else 
        {
            yourScore += int
            yourAce++;
        }
    }
    else yourScore += int;
    loadNewGame();
}

function calcDealersScore(num)
{
    if(hideCard === false)
    {
        int = parseInt(num);
        if(int === 11)
            {
            if(dealersScore + 11 > 21)
            {
                dealersScore += 1;

            }
            else 
            {
                dealersScore += int
                dealerAce++;
            }
        }
        else dealersScore += int;
        loadNewGame();
    }
    else
    {
        realScore = dealersScore;
        int = parseInt(num);
        if(int === 11)
        {
            if(dealersScore + 11 > 21)
            {
                realScore += 1;

            }
            else 
            {
                realScore += int
                dealerAce++;
            }
        }
        else realScore += int;
        loadNewGame();
    }
}

async function stand()
{
    let hid = document.getElementById("hidenCard");
    hid.remove();
    let temp = document.getElementById("dealersSide");
    temp.appendChild(realCard.image);
    dealersScore = realScore;
    loadNewGame();
    hideCard = false;

    if(dealersScore < 17) await sleep(500);

    while(dealersScore < 17)
    {
        cardsAreDealt = false;
        hideCard = false;
        await sleep(500);
        cardForDealer(deckIndex);
        if(dealersScore > 21 && dealerAce > 0)
        {
            dealerAce--;
            dealersScore -= 10;
            loadNewGame();
        }
    }
    if(yourScore === 21) payoutMulti = 1.5;
    await sleep(1000);

    if(dealersScore > 21 || dealersScore < yourScore) 
    {
        winState();
        return;
    }
    if(dealersScore > yourScore) 
    {
        loseState();
        return;
    }
    if(dealersScore < yourScore) 
    {
        loseState();
        return;
    }
    if(dealersScore === yourScore) 
    {
        drawState();
        return;
    }

}

async function hit()
{
    if(cardsAreDealt === true)
    {
        cardForYou(deckIndex);
    }
    if(yourScore === 21)
    {
        cardsAreDealt = false;
        hideCard = false;
        stand();
    }
    if(yourScore > 21)
    { 
        if(yourAce > 0)
        {
            yourScore -= 10;
            yourAce--; 
            loadNewGame();   
        }
        else
        {
            cardsAreDealt = false;
            let hid = document.getElementById("hidenCard");
            hid.remove();
            let temp = document.getElementById("dealersSide");
            temp.appendChild(realCard.image);
            dealersScore = realScore;
            loadNewGame();

            await sleep(1000);
            loseState();
        } 
    }
}

async function winState()
{
    let betInt = parseInt(bet);
    let winings = betInt + Math.round( betInt * payoutMulti );
    bet = 0;
    loadNewGame();
    hideCard = false;
    cardsAreDealt = false;
    dealerAce = 0;
    yourAce = 0;
    yourScore = 0;
    dealersScore = 0;
    balance += winings;

    document.querySelectorAll("#yourSide img").forEach(img => img.remove());
    document.querySelectorAll("#dealersSide img").forEach(img => img.remove());


    if(deckNum < 60)
    {
        document.getElementById("currDeck").innerText = "Shuffling..."
        shuffleDeck();
        deckNum = 102;
        deckIndex = 0;
        document.getElementById("winScreen").style.display = "block";
        document.getElementById("winMoney").innerText = "+" + Math.round( betInt * payoutMulti ) + "$";
        await sleep(2000);
        loadNewGame();
    }
    else
    {
        document.getElementById("winScreen").style.display = "block";
        document.getElementById("winMoney").innerText = "+" + Math.round( betInt * payoutMulti ) + "$";
        await sleep(2000);
        loadNewGame();
    }
    payoutMulti = 1;
}

async function drawState()
{
    let betInt = parseInt(bet);
    bet = 0;
    loadNewGame();
    hideCard = false;
    cardsAreDealt = false;
    dealerAce = 0;
    yourAce = 0;
    yourScore = 0;
    dealersScore = 0;
    balance += betInt;

    document.querySelectorAll("#yourSide img").forEach(img => img.remove());
    document.querySelectorAll("#dealersSide img").forEach(img => img.remove());


    if(deckNum < 60)
    {
        document.getElementById("currDeck").innerText = "Shuffling..."
        shuffleDeck();
        deckNum = 102;
        deckIndex = 0;
        document.getElementById("drawScreen").style.display = "block";
        await sleep(2000);
        loadNewGame();
    }
    else
    {
        document.getElementById("drawScreen").style.display = "block";
        await sleep(2000);
        loadNewGame();
    }

    
}

async function loseState()
{
    let betInt = bet;
    bet = 0;
    loadNewGame();
    hideCard = false;
    cardsAreDealt = false;
    dealerAce = 0;
    yourAce = 0;
    yourScore = 0;
    dealersScore = 0;

    document.querySelectorAll("#yourSide img").forEach(img => img.remove());
    document.querySelectorAll("#dealersSide img").forEach(img => img.remove());

    if(deckNum < 60)
    {
        document.getElementById("currDeck").innerText = "Shuffling..."
        shuffleDeck();
        deckNum = 102;
        deckIndex = 0;
        document.getElementById("loseScreen").style.display = "block";
        document.getElementById("lostMoney").innerText = "-" + Math.round( betInt * payoutMulti ) + "$";
        await sleep(2000);
        loadNewGame();
    }
    else
    {
        document.getElementById("loseScreen").style.display = "block";
        document.getElementById("lostMoney").innerText = "-" + betInt + "$";
        await sleep(2000);
        loadNewGame();
    }
}




