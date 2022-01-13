import { displayFriends } from 'app.js';
export function addFriend(name, friendData) {
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    
    friendData.push(newFriend);
    displayFriends();
}

export function findFriendByName(name, friends) {
    for (let friend of friends) {
        if (friend.name === name) {
            return friend;
        }
    }
}

// export function addFriend(newFriend) {
//     const name = friendInputEl.value;
//     const newFriend = {
//         name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
//         satisfaction: 1
//     };
//     friendData.push(newFriend);
//     friendInputEl.value = '';
//     displayFriends();
// }