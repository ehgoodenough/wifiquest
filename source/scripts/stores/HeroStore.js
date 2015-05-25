var WorldStore = require("<scripts>/stores/WorldStore")

var HeroStore = Phlux.createStore({
    data: {
        width: 1.15,
        height: 1.15*(3/2),
        color: "#C00",
        maxvelocity: {
            x: 0.25,
            y: 0.6
        },
        move: {
            force: 5
        },
        jump: {
            force: -10,
            count: 0,
            maxcount: 2,
            height: 0,
            maxheight: 3,
        },
        friction: 2,
        gravity: 2.5,
        maxhealth: 10,
        spawn: {
            position: {
                x: 15*1.5+1,
                y: 3
            }
        }
    },
    updateHero: function(tick) {
        var hero = this.data
        
        // Nullification
        if(hero.position == undefined) {
            hero.position = {
                x: hero.spawn.position.x,
                y: hero.spawn.position.y
            }
        }
        if(hero.velocity == undefined) {
            hero.velocity = {
                x: 0,
                y: 0
            }
        }
        
        // Keyboard Input
        if(Keyb.isJustDown("W")) {
            if(hero.jump.count < hero.jump.maxcount) {
                hero.jump.count += 1
                hero.jump.height = 0
            }
        } if(Keyb.isDown("W")) {
            if(hero.jump.height < hero.jump.maxheight) {
                hero.velocity.y = hero.jump.force
            }
        } if(Keyb.isDown("A")) {
            hero.velocity.x -= hero.move.force * tick
        } if(Keyb.isDown("D")) {
            hero.velocity.x += hero.move.force * tick
        }
        
        // Maximum Velocity
        if(hero.velocity.x > hero.maxvelocity.x) {
            hero.velocity.x = hero.maxvelocity.x
        } if(hero.velocity.x < -hero.maxvelocity.x) {
            hero.velocity.x = -hero.maxvelocity.x
        } if(hero.velocity.y > hero.maxvelocity.y) {
            hero.velocity.y = hero.maxvelocity.y
        } if(hero.velocity.y < -hero.maxvelocity.y) {
            hero.velocity.y = -hero.maxvelocity.y
        }
        
        // Collision with World
        WorldStore.collide(hero)
        
        // Translation
        hero.position.x += hero.velocity.x
        hero.position.y += hero.velocity.y
        
        // Deacceleration
        if(hero.velocity.x > 0) {
            hero.velocity.x -= hero.friction * tick
            if(hero.velocity.x < 0) {
                hero.velocity.x = 0
            }
        } else if(hero.velocity.x < 0) {
            hero.velocity.x += hero.friction * tick
            if(hero.velocity.x > 0) {
                hero.velocity.x = 0
            }
        }
        hero.velocity.y += hero.gravity * tick
        if(hero.velocity.y < 0) {
            hero.jump.height -= hero.velocity.y
        }
        
        // Effects from World
        var tiles = WorldStore.getTiles(hero)
        for(var index in tiles) {
            var tile = tiles[index]
            if(tile.resetsSpawn != undefined) {
                var x = tile.position.x + (hero.width / 2)
                var y = tile.position.y + (hero.height / 2)
                if(hero.spawn.position.x != x
                || hero.spawn.position.y != y) {
                    hero.spawn.position = {
                        "x": x,
                        "y": y
                    }
                }
            }
        }
        for(var index in tiles) {
            var tile = tiles[index]
            if(tile.inflictsDamage != undefined) {
                delete hero.position
                delete hero.velocity
                break
            }
        }
        
        // Nullification
        if(hero.position == undefined) {
            hero.position = {
                x: hero.spawn.position.x,
                y: hero.spawn.position.y
            }
        }
        if(hero.velocity == undefined) {
            hero.velocity = {
                x: 0,
                y: 0
            }
        }
        
        this.trigger()
    }
})

module.exports = HeroStore
