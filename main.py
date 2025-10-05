def on_received_number(receivedNumber):
    basic.show_number(receivedNumber)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global PRESS_ACTION
    if ACTION_DECLOSE == 1:
        PRESS_ACTION = 1
        led.plot(0, 0)
        radio.send_number(time)
        basic.pause(2000)
        basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_logo_down():
    global SOUND_VOLUME
    if ACTION_DECLOSE == 1:
        SOUND_VOLUME += 20
        music.set_volume(SOUND_VOLUME)
        music.play(music.string_playable("C5 C5 C5 C5 C5 C5 C5 C5 ", 500),
            music.PlaybackMode.IN_BACKGROUND)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

def on_logo_pressed():
    pass
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_gesture_shake():
    global PRESS_ACTION, ACTION_DECLOSE
    if ACTION_DECLOSE == 1:
        music.play(music.string_playable("A C5 C C - - - - ", 120),
            music.PlaybackMode.IN_BACKGROUND)
        basic.clear_screen()
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            # # # # .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            # # # . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            # # . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            """)
    basic.clear_screen()
    PRESS_ACTION = 0
    ACTION_DECLOSE = 0
    pins.digital_write_pin(DigitalPin.P0, Signal[0])
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_gesture_logo_up():
    global SOUND_VOLUME
    if ACTION_DECLOSE == 1:
        SOUND_VOLUME += -20
        music.set_volume(SOUND_VOLUME)
        music.play(music.string_playable("C5 C5 - - - - - - ", 230),
            music.PlaybackMode.IN_BACKGROUND)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

Signal: List[number] = []
time = 0
ACTION_DECLOSE = 0
PRESS_ACTION = 0
SOUND_VOLUME = 0
radio.set_group(1)
SOUND_VOLUME = 127
PRESS_ACTION = 0
ACTION_DECLOSE = 0
time = 0
INFO = ["Lock", "1.0"]
Signal = [0, 1]
pins.digital_write_pin(DigitalPin.P0, Signal[1])
music.play(music.string_playable("C5 C5 C5 - - - - - ", 120),
    music.PlaybackMode.IN_BACKGROUND)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    # . . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    # # . . .
    # # . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    # # # . .
    # # # . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    # # # # .
    # # # # .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    # # # # #
    """)
basic.show_string("s")
music.play(music.string_playable("C C5 A A - - - - ", 120),
    music.PlaybackMode.UNTIL_DONE)
basic.clear_screen()
ACTION_DECLOSE = 1
if ACTION_DECLOSE == 1:
    pass

def on_forever():
    global time
    time += 1
    basic.pause(1000)
basic.forever(on_forever)
