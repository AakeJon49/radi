radio.onReceivedNumber(function (receivedNumber) {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.pause(2000)
    basic.showString("" + (textlista[receivedNumber]))
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (textlista[index]))
    send = index
    if (index >= 4) {
        index = 0
    } else {
        index += 1
    }
    basic.showNumber(send)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (textlista[send]))
    radio.sendNumber(send)
})
let send = 0
let index = 0
let textlista: string[] = []
radio.setGroup(1)
textlista = [
"KOM",
"HEM",
"MAT",
"RING",
"SVARA"
]
index = 0
