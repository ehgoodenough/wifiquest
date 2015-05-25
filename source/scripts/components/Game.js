var Camera = require("<scripts>/components/Camera")
var GameFrame = require("<scripts>/components/GameFrame")

var World = require("<scripts>/components/World")
var WorldStore = require("<scripts>/stores/WorldStore")

var Hero = require("<scripts>/components/Hero")
var HeroStore = require("<scripts>/stores/HeroStore")

var Game = React.createClass({
    mixins: [
        Phlux.connectStore(HeroStore, "hero"),
        Phlux.connectStore(WorldStore, "world")
    ],
    render: function() {
        return (
            <GameFrame aspect-ratio="15x20">
                <Camera target={this.state.hero} zx={6}>
                    <img src="./assets/images/backbackground.png"
                        style={{
                            top: -7 + "em",
                            position: "absolute",
                            width: WIDTH * 7 + "em",
                            height: HEIGHT * 2 + 7 + "em"
                        }}/>
                </Camera>
                <Camera target={this.state.hero} z={1}>
                    <World data={this.state.world}/>
                    <img src="./assets/images/turtle.png"
                        style={{
                            position: "absolute",
                            left: 62 + "em",
                            top: 15 + "em",
                            height: 4 + "em",
                        }}/>
                    <Hero data={this.state.hero}/>
                    <img src="./assets/images/roborouter.png"
                        style={{
                            position: "absolute",
                            left: 78 + "em",
                            top: 12.1 + "em",
                            height: 7 + "em",
                        }}/>
                    <img src="./assets/images/rabbit.png"
                        style={{
                            position: "absolute",
                            left: 51.75 + "em",
                            top: 6.1 + "em",
                            height: 4 + "em",
                        }}/>
                    <img src="./assets/images/kitty.png"
                        style={{
                            position: "absolute",
                            left: 32 + "em",
                            top: 16 + "em",
                            height: 3 + "em",
                        }}/>
                    <img src="./assets/images/kitty.png"
                        style={{
                            position: "absolute",
                            left: 32 + "em",
                            top: 16 + "em",
                            height: 3 + "em",
                        }}/>
                </Camera>
            </GameFrame>
        )
    },
    componentDidMount: function() {
        Tickly.loop(function(tick) {
            HeroStore.updateHero(tick)
        })
    }
})

module.exports = Game
