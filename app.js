var friends = ['Tyrion','Daenerys','Bronn','Margaery','Brienne'];

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

friends = shuffle(friends);

for (var i = 0; i < friends.length; i++) {
    var j = i+1;
    if (j == friends.length) {
        j = 0;
    }
    console.log(friends[i]+" gives to "+friends[j]);
}