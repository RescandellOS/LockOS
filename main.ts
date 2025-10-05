function INFO_READ () {
    basic.showString("c")
    basic.showNumber(input.compassHeading())
    basic.pause(1500)
    basic.showString("tm:")
    basic.showNumber(input.temperature())
    basic.pause(1500)
    basic.showString("mg:")
    basic.showNumber(input.acceleration(Dimension.Strength))
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
function KERNEL_OF_MAIN () {
    BOOLEAN_ON_USB_CONN = 0
    SOUND_VOLUME = 127
    PRESS_ACTION = 0
    ACTION_DECLOSE = 0
    time = 0
    INFO = ["Lock", "1.0"]
    Signal = [0, 1]
}
function loader () {
    music.play(music.stringPlayable("C5 C5 C5 - - - - - ", 120), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
    basic.showString("s")
    music.play(music.stringPlayable("C C5 A A - - - - ", 120), music.PlaybackMode.UntilDone)
    basic.clearScreen()
    ACTION_DECLOSE = 1
}
function SHUTDOWN () {
    music.play(music.stringPlayable("A C5 C C - - - - ", 120), music.PlaybackMode.InBackground)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        `)
    basic.clearScreen()
    PRESS_ACTION = 0
    ACTION_DECLOSE = 0
    pins.digitalWritePin(DigitalPin.P0, Signal[0])
}
input.onButtonPressed(Button.A, function () {
    if (ACTION_DECLOSE == 1) {
        CONNECTION_ACTION()
    }
})
function VOLUME_SOUND_BIGG () {
    SOUND_VOLUME += 20
    music.setVolume(SOUND_VOLUME)
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 500), music.PlaybackMode.InBackground)
}
function usb_programm () {
    random = randint(0, 10)
    serial.redirectToUSB()
    basic.clearScreen()
    turtle.pen(TurtlePenMode.Down)
    basic.pause(2000)
    basic.clearScreen()
    serial.writeNumber(random)
    basic.showString("Write port:")
    basic.showNumber(random)
    basic.clearScreen()
    led.plot(2, 0)
    BOOLEAN_ON_USB_CONN = 1
    basic.pause(1000)
    led.unplot(2, 0)
}
function CONNECTION_ACTION () {
    PRESS_ACTION = 1
    led.plot(0, 0)
    radio.sendNumber(time)
    basic.pause(1000)
    led.unplot(0, 0)
}
input.onButtonPressed(Button.AB, function () {
    if (ACTION_DECLOSE == 1) {
        INFO_READ()
    }
})
function TIMED_CALL () {
    basic.showString("time:")
    basic.showString("" + (time))
    basic.clearScreen()
    for (let index = 0; index <= 1; index++) {
        basic.showString("" + (INFO[index]))
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    if (ACTION_DECLOSE == 1) {
        basic.showNumber(randint(0, 10))
        basic.clearScreen()
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (ACTION_DECLOSE == 1) {
        VOLUME_SOUND_BIGG()
    }
})
function TIMED_SHIFING_ALTERN () {
    time += 1
    basic.pause(1000)
}
function VOLUME_SOUND_LOW () {
    SOUND_VOLUME += -20
    music.setVolume(SOUND_VOLUME)
    music.play(music.stringPlayable("C5 C5 - - - - - - ", 230), music.PlaybackMode.InBackground)
}
input.onGesture(Gesture.FreeFall, function () {
    if (ACTION_DECLOSE == 1) {
        TIMED_CALL()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (ACTION_DECLOSE == 1) {
        basic.clearScreen()
        ACTION_DECLOSE = 0
        basic.clearScreen()
        SHUTDOWN()
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (ACTION_DECLOSE == 1) {
        VOLUME_SOUND_LOW()
    }
})
let random = 0
let INFO: string[] = []
let time = 0
let PRESS_ACTION = 0
let SOUND_VOLUME = 0
let BOOLEAN_ON_USB_CONN = 0
let ACTION_DECLOSE = 0
let Signal: number[] = []
radio.setGroup(1)
pins.digitalWritePin(DigitalPin.P0, Signal[1])
KERNEL_OF_MAIN()
loader()
if (ACTION_DECLOSE == 1) {
	
}
basic.forever(function () {
    if (ACTION_DECLOSE == 1) {
        TIMED_SHIFING_ALTERN()
    }
})
