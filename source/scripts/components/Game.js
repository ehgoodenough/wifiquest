var Camera = require("<scripts>/components/Camera")
var GameFrame = require("<scripts>/components/GameFrame")

var PlayerStore = require("<scripts>/stores/PlayerStore")
var PlayerButton = require("<scripts>/components/PlayerButton")

var ThingStore = require("<scripts>/stores/ThingStore")

var Game = React.createClass({
    mixins: [
        Reflux.connect(ThingStore, "things")
    ],
    render: function() {
        return (
            <GameFrame>
                <div style={{
                    width: "1em",
                    height: "1em",
                    top: "0em",
                    left: "0em",
                    position: "absolute"
                }}/>
            </GameFrame>
        )
    }
})

module.exports = Game
