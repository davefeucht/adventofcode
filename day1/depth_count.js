const depthCountArray = require('./depth_list.json').data;
let numberOfIncreases = 0;

const getWindowCount = index => {
    return (depthCountArray[index] + depthCountArray[index + 1] + depthCountArray[index + 2]);
}

depthCountArray.forEach((count, index) => {
    if (getWindowCount(index) < getWindowCount(index + 1)) {
	    ++numberOfIncreases;
	}
});

console.log(numberOfIncreases);
