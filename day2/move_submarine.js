const commands = require('./move_list.json').commands;

let horizontalPosition = 0;
let depth = 0;

commands.forEach(command => {
    const [commandType, value] = command.split(' ');
    switch (commandType) {
        case 'forward':
            horizontalPosition += parseInt(value);
            break;
        case 'down':
            depth += parseInt(value);
            break;
        case 'up':
            depth -= parseInt(value);
            break;
        default:
    }
});

console.log('Horizontal Position: ', horizontalPosition);
console.log('Depth: ', depth);
console.log('Multiplied: ', horizontalPosition * depth);
