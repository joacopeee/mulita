basic.forever(function () {
    while (input.soundLevel() < 160) {
        basic.showLeds(`
            . . . . #
            . . . # #
            # . # # .
            # # # . .
            . # . . .
            `)
        Butia.moveBackward(50, 1000)
        Butia.turn(TurnDirection.Left, 70, 200)
        Butia.turn(TurnDirection.Right, 70, 200)
    }
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    Butia.turn(TurnDirection.Right, 70, 1000)
    Butia.moveBackward(75, 2000)
})
