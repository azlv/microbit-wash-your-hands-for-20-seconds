let 开始时间 = 0
basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() <= 1) {
        开始时间 = input.runningTime()
        while (input.runningTime() - 开始时间 <= 20000) {
            music.playTone(input.runningTime() - 开始时间, music.beat(BeatFraction.Sixteenth))
            basic.showIcon(IconNames.Butterfly)
            basic.showIcon(IconNames.Chessboard)
        }
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    }
})
