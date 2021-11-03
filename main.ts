let temperature = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    temperature = pins.analogReadPin(AnalogPin.P3)
    basic.showNumber((temperature - temperature % 5) / 5)
})
