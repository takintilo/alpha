var data = "011001100111001001110101011010010111010001110011001000000110000101101110011001000010000001110110011001010110011101100101011101000110000101100010011011000110010101110011"
var framerate = 30
var zero = 0
var one = 0.5
var fg = document.getElementById("fg")

var i = 0
function modulate() {
    var currBit = data.charAt(i)
    if (currBit === "0") {
        fg.setAttribute("style", "opacity:" + zero)
    }
    else {
        fg.setAttribute("style", "opacity:" + one)
    }
    i = (i + 1) % data.length;
}

setInterval(modulate, (1/framerate)*1000)
