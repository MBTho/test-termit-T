basic.showLeds(`
    # # # # #
    . # # # .
    . . # . .
    . # # # .
    # # # # #
    `)
basic.forever(function () {
    serial.writeLine("intensite lumineuse")
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
    serial.writeLine("Temperature")
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    serial.writeLine("Champ magnetique")
    serial.writeNumber(input.magneticForce(Dimension.X))
    serial.writeLine("")
})
