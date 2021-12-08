const depthCountArray = require('./depth_list.json').data;
let numberOfIncreases = 0;

depthCountArray.forEach((count, index) => {
    if (index !== 0) {
        if (count > depthCountArray[index - 1]) {
	    ++numberOfIncreases;
	}
    }
});

console.log(numberOfIncreases);
