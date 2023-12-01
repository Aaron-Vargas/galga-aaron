controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let SpacePlane: Sprite = null
SpacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    f f . . . . f c a f . . . . . . 
    f a f . . . f a c c f . . . . . 
    f c a f . . f c c a c f . . . . 
    f c c a f f f f f f f f f f . . 
    f c c c c c c c c c c c 9 9 f . 
    f c c a a 6 a a a a a a 9 9 9 f 
    f a a a 6 a a a a a a a a a a f 
    f f f f f f f c a c c c f f f f 
    . . . . . . f c c a c f . . . . 
    . . . . . . f a c c f . . . . . 
    . . . . . . f c a f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(SpacePlane, 200, 200)
SpacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        .......bbbbbbbbbbbbbbbbbb.......
        ......bddddddddddddddddddb......
        .....bddddddddddddddddddddb.....
        ....bddddddddddddddddddddddb....
        ...bddddddddddddddddddddddddb...
        ..bddddddddddddddddddddddddddb..
        ..c11111111111111111111111111c..
        ..c11111111111111111111111111c..
        .bccccccccccccccccccccccccccccb.
        bb11111dd11dbbbbbbbbd11dd11111bb
        c11bbcc11dd11dbbbbd11dd11ccbb11c
        c1bbddbcb11dd111111dd11bcbddbb1c
        c1bbbddbdbd11dddddd11dbdbddbbb1c
        c11bbddcddbbd111111dbbddcddbb11c
        cb1111dcbd11bbbbbbbb11dbcd1111bc
        .cb111ccbdd1111111111ddbcc111bc.
        ..cccc.cbdbb1bb11bb1bbdbc.cccc..
        .......cbdbb1db11bd1bbdbc.......
        .......cbdbd1dd11dd1dbdbc.......
        .......cbdbd1dd11dd1dbdbc.......
        ......ccbdbd1dd11dd1dbdbcc......
        .....cbbbdbd1dd11dd1dbdbbbc.....
        .....cdbbdbd1dd11dd1dbdbbdc.....
        .....c11bbbd1dd11dd1dbbb11c.....
        .....cd111bbbbbbbbbbbb111dc.....
        ....cccd1111111111111111dccc....
        ...cbddbbb111111111111bbbddbc...
        ..cbddddddbbbbbbbbbbbbddddddbc..
        ..c11111111111111111111111111c..
        ..c11111111111111111111111111c..
        ..c11111111111111111111111111c..
        ..cbbbbbbbbbbbbbbbbbbbbbbbbbbc..
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
