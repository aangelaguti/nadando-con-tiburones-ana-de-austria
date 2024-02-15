namespace SpriteKind {
    export const decor = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . 5 2 . 2 2 2 2 2 2 . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 90, 0)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    animation.runImageAnimation(
    mySprite,
    [img`
        ..............fffcc.............
        ..............fcbddcc...........
        ...............fbbddcc..........
        ...............fcbbccf..........
        ..ccc.........ffccccccfffff.....
        ..cbbcc....fffcbbbbcbbbbbbbff...
        ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
        ...fbbdcfcccccbbbcbcbbffbbbbbbff
        ....fbbffcccccbbbbbcb1ff11bbbcbf
        ....fcbbcccccccbbbbb11111111bbbf
        ....fcccccccccccbbbb11cc33111bf.
        ...fcbbffbdbcccccbbb111c13cccf..
        ...fbbf..ccddddcfbbbc111c31cf...
        ..fbbf.....ccdccbbdbf111cccf....
        ..fff........ccbbdcfcccc........
        ..............fffff.............
        `],
    100,
    false
    )
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.disintegrate, 100)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let projectile: Sprite = null
let mydecor: Sprite = null
let mySprite: Sprite = null
game.splash("nadando con tiburones")
scene.setBackgroundColor(6)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .cccccccccc.....................................................................................................................................................
    ccccccccccccccccc...............................................................................................................................................
    cccccccccccccccccccc............................................................................................................................................
    ccccccccccccccccccccccc..................................................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...........
    ccccccccccccccccccccccccccc........................................................ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccbbcccccccccccccccccccccc..................................................ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbcccccccccccccccccccc.............................................cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbcccccccccccccccccccc........................................ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccc
    bbbbbbbbbbbbbbbbbbbccccccccccccccccccc....................................cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccdddccccccddccddccc
    bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc...............................cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccdddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccc..........................ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccdddddddddddddddddd
    bbbbbbbbbbbbbbbbbbcbbbbbbbbbbccccccccccccccc........................ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccdddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccc.....................cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccdddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccc.................ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccdddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc..............cccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccdddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccc............ccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccdddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccc..........ccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccc.......ccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccc....ccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccc..cccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccdddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccddddddbdddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccddddddbdddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccdddddddddbdddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccddddddddddbddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccddddddddddddddddbddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccddddddddddddddddddddddbddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccdddddddddddddddddddddddddddbddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccdddddddddddddddddddddddddddbdddddddbbbdddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccdddddddddddddddddddddddddddddbd.dddbbddddddddd
    cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccdddddddddddddddddddddddddddddbbddbbbddddddddddd
    ccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccdddddddddddddddddddddddddddddbdddbddddddddddddd
    cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccddddddddddddddddddddddddddddddbdddbddddddddddddd
    cccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccddddddddddddddddddddddddddddddbdddbddddddddddddd
    cccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccdddddddddddddddddddddddddddddbddddbddddddddddddd
    cccddddcccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccddddddddddddddddddddddddddddbdddddbddddddddddddd
    ddddddddddddddccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccddddddddddddddbbbbbddddddddbbbdddddbddddddddddddd
    dddddddddddddddddddccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccddddddddddddbbdddddbbbbbbbbddddddddbddddddddddddd
    dddddddddddddddddddddcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccddddddddddbbdddddddddddddddddddddddbddddddddddddd
    dddddddddddddddddddddddcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccddddddddddbddddddddddddddddddddddddbddddddddddddd
    ddddddddddddddddddddddddcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccdddddddddbdddddddddddddddddddddddddbddddddddddddd
    ddddddddddddddddddddddddddcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccdddddddddbdddddddddddddddddddddddddbddddddddddddd
    dddddddbbbbddddddddddddddddccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbccccccdddddddddbdddddddddddddddddddddddddbddddddddddddd
    dddddddddddbbdddddddddddddddcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbccccccddddddddddbdddddddddddddddddddddddddbddddddddddddd
    dddddddddddddbddddddddddddddddccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbccccccddddddddddbdddddddddddddddddddddddddbddddddddddddd
    ddddddddddddddbbdddddddddddddddccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbcccccccddddddddddbdddddddddddddddddddddddddbddddddddddddd
    ddddddddddddddddbddddddddddddddddcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbcccccccddddddddddbdddddddddddddddddddddddddbddddddddddddd
    dddddddddddddddddbdddddddddddddddddccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbcccccccdddddddddddbdddddddddddddddddddddddddbddddddddddddd
    ddddddddddddddddddbddddddddddddddddddccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbccccccccdddddddddddbdddddddddddddddddddddddddbddddddddddddd
    dddddddddddddddddddbbdddddddddddddddddccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbccccccccccddddddddddddbdddddddddddddddddddddddddbddddddddddddd
    dddddddddddddddddddddbdddddddddddddddddcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbcccccccccccdddddddddddddbddddddddddddddddddddddddbddddddddddddd
    dddddddddddddddddddddbddddddddddddddddddcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbcccccccccccccddddddddddddddbddddddddddddddddddddddddbddddddddddddd
    ddddddddddddddddddddddbddddddddddddddddddcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbcccccccccccccccddddddddddddddbddddddddddddddddddddddddbddddddddddddd
    dddddddddddddddddddddddbdddddddddddddddddddccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbcccccccccccccddddddddddddddddbddddddddddddddddddddddddbddddddddddddd
    dddddddddddddddddddddddbdddddddddddddddddddcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbccccccccccccdddddddddddddddddddbddddddddddddddddddddddddbddddddddddddd
    dddddddddddddbddddddddddbdddddddddddddddddddccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccddddddddddddddddddddbddddddddddddddddddddddddbddddddddddddd
    ddddddddddddddbbdddddddddbdddddddddddddddddddccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccdddddddddddddddddddddddbddddddddddddddddddddddddbddddddddddddd
    ddddddddddddddddbdddddddddbbddddddddddddddddddccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccdddddddddddddddddddddddbdddddddddddddddddddddddddbddddddddddddd
    dddddddddddddddddbddddddddddbbdddddddddddddddddccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccddddddddddddddddddddddddbdddddddddddddddddddddddddbddddddddddddd
    ddddddddddddddddddbdddddddddddbbbddddddddddddddcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccdddddddddddddddddddddddddbdddddddddddddddddddddddddbddddddddddddd
    ddddddddddddddddddbddddddddddddddbddddddddddddddcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccdddddddddddddddddddddbbbbbddddddddddddddddddddddddddbddddddddddddd
    dddddddddddddddddddbdddddddddddddbdddddddddddddddcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccddddddddddddddddddbbbdddddddddddddddddddddddddddddddbddddddddddddd
    dddddddddddddddddddbddddddddddddddbbddddddddddddddcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccddddddddddddbbdddbbdddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddbddddddddddddddbdddddddddddddddccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccdddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddbddddddddddddddbdddddddddddddddcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
mySprite = sprites.create(img`
    ..............fffcc.............
    ..............fcbddcc...........
    ...............fbbddcc..........
    ...............fcbbccf..........
    ..ccc.........ffccccccfffff.....
    ..cbbcc....fffcbbbbcbbbbbbbff...
    ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
    ...fbbdcfcccccbbbcbcbbffbbbbbbff
    ....fbbffcccccbbbbbcb1ff11bbbcbf
    ....fcbbcccccccbbbbb11111111bbbf
    ....fcccccccccccbbbb11cc33111bf.
    ...fcbbffbdbcccccbbb111c13cccf..
    ...fbbf..ccddddcfbbbc111c31cf...
    ..fbbf.....ccdccbbdbf111cccf....
    ..fff........ccbbdcfcccc........
    ..............fffff.............
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(15)
info.setScore(0)
for (let index = 0; index < 7; index++) {
    mydecor = sprites.create(img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .....88.........
        .....868........
        ......868.......
        .......868......
        .......866......
        .......8676.....
        ......67656.....
        .....656758.....
        ....65775868....
        ....65656868....
        ....87678868....
        ....87678668....
        ....87677668....
        ....8776768.....
        .....87678......
        ......8768......
        `, SpriteKind.decor)
    mydecor.setPosition(randint(5, 155), 96)
}
game.onUpdateInterval(2100, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . c c 
        . . . c 4 d 4 4 4 4 4 1 c c 4 c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
        . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
        f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
        . f 4 4 4 4 1 c c 4 4 d f f . . 
        . . f f 4 d 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    mySprite2.setPosition(80 + mySprite.x, randint(5, 155))
    mySprite2.vx = -75
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c . . . . 
        . . . . . . c d d d d d c . . . 
        . . . . . . c c c c c d c . . . 
        . . . . . c 4 4 4 4 d c c . . . 
        . . . . c d 4 4 4 4 4 1 c . . . 
        . . . c 4 4 1 4 4 4 4 4 1 c . . 
        . . c 4 4 4 4 1 4 4 4 4 1 c c c 
        . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
        . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
        f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
        f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
        . f 4 4 4 4 1 4 4 4 4 c b c f f 
        . . f f f d 4 4 4 4 c d d c . . 
        . . . . . f f f f f c c c . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . c c 
        . . . c 4 d 4 4 4 4 4 1 c c 4 c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
        . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
        f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
        . f 4 4 4 4 1 c c 4 4 d f f . . 
        . . f f 4 d 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c . . . 
        . . . . . . . c c d d d d c . . 
        . . . . . c c c c c c d d c . . 
        . . . c c c 4 4 4 4 d c c c c c 
        . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
        . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
        f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
        f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
        f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
        . f 4 4 4 4 1 4 4 f 4 4 d f . . 
        . . f 4 4 1 4 c c 4 4 d f . . . 
        . . . f d 4 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `],
    500,
    false
    )
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c c . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c b b b b 1 b b c c . . 
        . . . . c 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 b b c c 
        . . c c d 1 1 1 b 1 b 1 5 5 5 c 
        . . c c d 1 c 1 1 1 b 1 b b 5 c 
        . c c d d 1 1 1 1 1 b 1 f b 5 c 
        f d d d 1 1 1 1 1 b b b f . c c 
        f f f f f 1 1 1 b b 5 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `, SpriteKind.Food)
    mySprite3.setPosition(60 + mySprite.x, randint(5, 155))
    mySprite3.vx = -50
    animation.runImageAnimation(
    mySprite3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c c . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c b b b b 1 b b c c . . 
        . . . . c 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 b b c c 
        . . c c d 1 1 1 b 1 b 1 5 5 5 c 
        . . c c d 1 c 1 1 1 b 1 b b 5 c 
        . c c d d 1 1 1 1 1 b 1 f b 5 c 
        f d d d 1 1 1 1 1 b b b f . c c 
        f f f f f 1 1 1 b b 5 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c c . . . 
        . . . . . . c c 5 5 5 5 5 c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c 1 1 b b 1 b b c c . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . c c 
        . . . c d 1 1 1 b 1 1 1 b b 5 c 
        . . c c d 1 c 1 b 1 b 1 5 5 5 c 
        . c c d d 1 1 1 1 1 b 1 b b 5 c 
        f d d d 1 1 1 1 1 b b 1 f . c c 
        f f f 1 1 1 1 1 1 b b b f . . . 
        . . . f f 1 1 1 b b b 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `,img`
        . . . . . . . . . c c c c c . . 
        . . . . . . c c c 5 5 5 5 c c . 
        . . . . c c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . c 1 1 1 b b 1 b b c c . . 
        . . . c 1 1 1 1 b 1 1 1 c . c c 
        . . . c d 1 1 1 b 1 1 1 c b 5 c 
        . . c c d 1 c 1 b 1 1 1 b b 5 c 
        c c c d d 1 1 1 b 1 b 1 5 5 5 c 
        f d d d 1 1 1 1 1 1 b 1 b b c c 
        . f f 1 1 1 1 1 1 b b 1 f . . . 
        . . . f 1 1 1 1 1 b b b f . . . 
        . . . . f f 1 1 b b 5 5 f . . . 
        . . . . . . f 5 5 5 5 5 f . . . 
        . . . . . . . f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . c c c c c . . . 
        . . . . . . c c 5 5 5 5 5 c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c 1 1 b b 1 b b c c . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . c c 
        . . . c d 1 1 1 b 1 1 1 b b 5 c 
        . . c c d 1 c 1 b 1 b 1 5 5 5 c 
        . c c d d 1 1 1 1 1 b 1 b b 5 c 
        f d d d 1 1 1 1 1 b b 1 f . c c 
        f f f 1 1 1 1 1 1 b b b f . . . 
        . . . f f 1 1 1 b b b 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
