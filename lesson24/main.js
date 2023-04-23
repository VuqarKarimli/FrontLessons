var arr = [
    { name: 'test', key: 1 },
    { name: 'task', key: 2 },
    { name: 'tango', key: 3 },
    { name: 'like', key: 4 },
    { name: 'task', key: 5 },
    { name: 'trust', key: 6 },
    { name: 'test', key: 7 },
    { name: 'last', key: 8 },
    { name: 'tango', key: 9 },
    { name: 'elephant', key: 10 },
    { name: 'love', key: 11 },
    { name: 'small', key: 12 },
    { name: 'little', key: 13 },

]
var arr1 = []
arr.forEach(element => {
    if (element.name[0] == 't') {
        arr1.push(element)
    }
});
console.log(arr1)


var k = 0
arr.forEach(element => {
    var l = element.name.length - 1
    if (element.name[0] == 't' & element.name[l] == 't') {
        k = k + 1
    }
});
console.log(k)

var sum = 0
arr.forEach(element => {
    var j = element.name.length - 1
    if (element.name[0] == 't' & element.name[j] == 't') {
        sum = sum + element.key
    }

});
console.log(sum)



arr.forEach(element => {
    var h = element.name.length - 1
    if (element.name[h] == 'e') {
        element.name.replace(element.name, 'superdev')
        console.log(element)
    }
});

//22
var arrr = []
arr.forEach(element => {
    if (element.name.length == 4)
        arrr.push(element)

});
console.log(arrr)

//23
//24
var s = 0
for (i = 0; i < arr.length; i++) {
    console.log(arr[1][1])
}
