// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
import { addFriend, findFriendByName } from './data-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2
    },
    {
        name: 'Sarah',
        satisfaction: 3
    },
    {
        name: 'Missael',
        satisfaction: 1
    },
    {
        name: 'Soraya',
        satisfaction: 2
    },
];

addFriendButton.addEventListener('click', () => {
    // get the name from the input

    // create a new friend object

    // push it into the friends state array, passed in as an argument

    // reset the input

    // display all the friends (use a function here)
    displayFriends();
});

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('shroom ahoy!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

function displayFriends() {
    // clear out the friends in the DOM
    friendsEl.textContent = '';
    // for each friend in state:
    for (let friend of friendData) {
        const friendEl = renderFriend(friend);
        // make it a clickable list, so:
            // add an event listener for each friend
        friendEl.addEventListener('click', () => {
            // on click, go find the friend in state
            const friendInState = findFriendByName(friend.name, friendData);
        
            if (mushroomCount === 0) {
                alert('no mushrooms left! go forage for some more');
            }
            // if the friend's satisfaction level is below 3 and you have mushrooms left:
            if (mushroomCount > 0 && friendInState.satisfaction < 3) {
                // increment the friend's satisfaction, decrement your mushrooms
                friendInState.satisfaction++;
                mushroomCount--;
            
                // then display your friends and mushrooms with the updated state
                displayFriends();
                displayMushrooms();    
            }
        });
    
        // append the friendEL to the friends list in DOM
        friendsEl.append(friendEl);
    }
}


function displayMushrooms() { 
    // clear out mushroom DIV
    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
        const mushroomEl = renderMushroom();

        mushroomsEl.append(mushroomEl);
    }
}


addFriendButton.addEventListener('click', () => {
    const name = friendInputEl.value;
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    
    friendData.push(newFriend);

    friendInputEl.value = '';

    displayFriends();
});


addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

displayFriends();
displayMushrooms();