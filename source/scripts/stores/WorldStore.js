var WorldData = require("<assets>/worlds/world.json")

var WorldStore = Phlux.createStore({
    initiateStore: function() {
        this.data.width = WorldData.width
        this.data.height = WorldData.height
        this.data.image = "./assets/worlds/" + WorldData.tilesets[0].image
        this.data.tiles = new Object()
        for(var x = 0; x < WorldData.width; x++) {
            for(var y = 0; y < WorldData.height; y++) {
                var index = y * WorldData.width + x
                var value = WorldData.layers[0].data[index] - 1
                if(value >= 1) {
                    this.data.tiles[x + "x" + y] = {
                        "value": value,
                        "position": {
                            "x": x,
                            "y": y
                        }
                    }
                    if(WorldData.tilesets[0].tileproperties[value] != undefined) {
                        for(var key in WorldData.tilesets[0].tileproperties[value]) {
                            var property = WorldData.tilesets[0].tileproperties[value][key]
                            this.data.tiles[x + "x" + y][key] = property
                        }
                    }
                }
            }
        }
    },
    getTile: function(x, y) {
        var x = Math.floor(x)
        var y = Math.floor(y)
        if(x >= 0 && x < this.data.width
        && y >= 0 && y < this.data.height
        && this.data.tiles[x + "x" + y]) {
            return this.data.tiles[x + "x" + y]
        } else {
            return {
                value: 1,
                position: {
                    "x": x,
                    "y": y
                }
            }
        }
    },
    getTiles: function(box) {
        var tiles = new Array()
        var x = box.position.x + box.velocity.x
        var y = box.position.y + box.velocity.y
        for(var tx = x - (box.width / 2); tx < Math.ceil(x + (box.width / 2)); tx++) {
            for(var ty = y - (box.height / 2); ty < Math.ceil(y + (box.height / 2)); ty++) {
                tiles.push(this.getTile(tx, ty))
            }
        }
        return tiles
    },
    collide: function(hero) {
        var ytiles = this.getTiles({
            width: hero.width,
            height: hero.height,
            position: hero.position,
            velocity: {
                x: 0,
                y: hero.velocity.y
            }
        })
        for(var index in ytiles) {
            var tile = ytiles[index]
            if(tile.hasCollision) {
                if(hero.velocity.y > 0) {
                    hero.position.y = tile.position.y - (hero.height / 2)
                    hero.jump.height = 0
                    hero.jump.count = 0
                } else if(hero.velocity.y < 0) {
                    hero.position.y = tile.position.y + 1 + (hero.height / 2)
                    hero.jump.height = hero.jump.maxheight
                }
                hero.velocity.y = 0
            }
        }
        var xtiles = this.getTiles({
            width: hero.width,
            height: hero.height,
            position: hero.position,
            velocity: {
                x: hero.velocity.x,
                y: 0
            }
        })
        for(var index in xtiles) {
            var tile = xtiles[index]
            if(tile.hasCollision) {
                if(hero.velocity.x > 0) {
                    hero.position.x = tile.position.x - (hero.width / 2)
                } else if(hero.velocity.x < 0) {
                    hero.position.x = tile.position.x + 1 + (hero.width / 2)
                }
                hero.velocity.x = 0
            }
        }
    }
})

module.exports = WorldStore
