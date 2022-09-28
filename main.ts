let x = 50
let y = 10
kitronik_servo_lite.setDistancePerSecond(10)
basic.showIcon(IconNames.Happy)
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    while (true) {
        strip.shift(1)
    }
    kitronik_servo_lite.driveForwards(x)
    kitronik_servo_lite.turnLeft(y)
    y += 10
})
