namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
tiles.setTilemap(tiles.createTilemap(
            hex`100010000202020202020d0114010a09090909090202070702020d0114010a09091616090202070702020d0114010a09091616090202020202020d0114010a09090909090202020202020d0114010a09090909090e0e0e0e0e0e0e0101010a0a0a0a0a0a0101010101010101010101010101010112121212121212010101131313131313010101010101010101010101010101010b0b0b0b0b0b0b0101010c0c0c0c0c0c0808080808080b010f010c07070707070808080808080b010f010c07070707070808151508080b010f010c07071717070808151508080b010f010c07071717070808080808080b010f010c07070707070808080808080b010f010c0707070707`,
            img`
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.builtin.crowd7,sprites.builtin.coral2,sprites.builtin.oceanSand11,sprites.dungeon.floorLight0,sprites.dungeon.doorLockedWest,sprites.dungeon.doorClosedEast,sprites.dungeon.doorOpenSouth,sprites.dungeon.darkGroundSouthWest1,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles16,sprites.builtin.forestTiles26,sprites.builtin.forestTiles24,sprites.castle.rock2,sprites.castle.shrub,sprites.castle.rock0],
            TileScale.Sixteen
        ))
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . . f e 4 d d d d 4 e f e . . 
. . f e f 2 2 2 2 e d d 4 e . . 
. . e 4 f 2 2 2 2 e d d e . . . 
. . . . f 4 4 5 5 f e e . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
