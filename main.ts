let 开始时间 = 0
let 退出方式 = 0
basic.forever(function () {
    if (input.lightLevel() <= 1) {
        开始时间 = input.runningTime()
        退出方式 = 0
        while (input.runningTime() - 开始时间 <= 20000) {
            if (input.lightLevel() <= 1) {
                music.playTone(input.runningTime() - 开始时间, music.beat(BeatFraction.Sixteenth))
                basic.showIcon(IconNames.Butterfly)
                basic.showIcon(IconNames.Chessboard)
            } else {
                退出方式 = 1
                break;
            }
        }
        if (退出方式 == 0) {
            basic.showIcon(IconNames.Yes)
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        } else {
            basic.showIcon(IconNames.Asleep)
            basic.pause(500)
            basic.showNumber(input.runningTime() - 开始时间)
        }
    }
})
