function superbowlWin(array) {
    if (array.find(x => x.result === 'W').result === 'W') {return array.find(x => x.result === 'W').year};
}