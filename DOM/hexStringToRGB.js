function hexStringToRGB (hexString) {
    var r = (hexString.substring(1, 3)).toUpperCase()
    var g = hexString.substring(3, 5).toUpperCase()
    var b = hexString.substring(5, 7).toUpperCase()

    r = parseInt(r, 16)
    g = parseInt(g, 16)
    b = parseInt(b, 16)
    var obj = { r, g, b }

    return obj
}

console.log(hexStringToRGB('javascript rock !!'))