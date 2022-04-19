function superbowlWin(array) {
if (array.find(x => x.result === 'W') == undefined) {return undefined}
else if (array.find(x => x.result === 'W').result === 'W') {return array.find(x => x.result === 'W').year}
}