radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    basic.showString("A")
    radio.sendString("A")
    basic.clearScreen()
    basic.pause(5000)
})
