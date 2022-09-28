let x = 10
let y = 65
kitronik_servo_lite.setDistancePerSecond(10)
basic.showIcon(IconNames.Happy)
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    kitronik_servo_lite.driveForwards(x)
    kitronik_servo_lite.turnLeft(y)
    kitronik_servo_lite.driveForwards(x)
    kitronik_servo_lite.turnLeft(y)
    kitronik_servo_lite.driveForwards(x)
    kitronik_servo_lite.turnLeft(y)
    kitronik_servo_lite.driveForwards(x)
    kitronik_servo_lite.turnLeft(y)
    y += 5
    y += 2
})
