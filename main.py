kitronik_servo_lite.set_distance_per_second(10)
basic.show_icon(IconNames.HAPPY)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.show_rainbow(1, 360)

def on_forever():
    kitronik_servo_lite.drive_forwards(10)
    basic.pause(500)
    kitronik_servo_lite.turn_left(65)
    basic.pause(500)
basic.forever(on_forever)
