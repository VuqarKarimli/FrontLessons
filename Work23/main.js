var a = 32;
if (a <= 32 || a % 2 == 0) {
    var a = a % 5;
    console.log(a)
}


var b = 10;
for (var i = b; i > 0; i--) {
    if (i % 2 != 0) {
        console.log(i)
    }
}


var c = 4;
var sum = 0;
for (var i = 1; i < 4; i++) {
    var v = i ** 2
    sum = sum + v
}
console.log(sum)


var d = 5
for (var i = 1; i <= 10; i++) {
    var f = d * i
    console.log(f)
}


var d = 101
if (d < 30) {
    console.log(d ** 2)
}
else if (d > 30 & d < 40) {
    var f = d % 10
    console.log(f)
}
else if (d > 100 || d < 0) {
    console.log("duzgun melumat daxil etmemisiniz")
}



var d = "Sebnem";
var l = d.length; 6
if (l % 2 == 0) {
    console.log(d.slice(0, l / 2))
}

var arr = [25, 48, 9, 63, 2, 1, 45, 13, 547, 85, 214, 58, 9, 6, 13, 54, 85, 2, 4, 1, 4, 5, 8, 9, 4, 3, 4, 37, 6, 2, 4]
var x = 13;
arr.forEach(element => {
    if (x == element) {
        console.log("beli");
    }
    else {
        console.log("xeyr")
    }
});

var h = 11;
if (h >= 1 & h <= 3) {
    console.log("initial")
}
else if (h >= 4 & h <= 6) {
    console.log("average")
}
else if (h >= 7 & h <= 9) {
    console.log("sufficient")
}
else if (h >= 10 & h <= 12) {
    console.log("high")
}


var j = 585
var a = j.toString();
if (a[0] < a[2]) {
    console.log(a[2])
}
else if (a[0] > a[2]) {
    console.log(a[0])
}
else { console.log("=") }



var arr = [5, 4, -6, 8, -1, 21, -3]
for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        arr[i] = arr[i] + 2
    }
    else { arr[i] = arr[i] * 2 }
}
console.log(arr)
















