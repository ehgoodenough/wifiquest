var Camera = require("<scripts>/components/Camera")
var GameFrame = require("<scripts>/components/GameFrame")

var PlayerStore = require("<scripts>/stores/PlayerStore")
var PlayerButton = require("<scripts>/components/PlayerButton")

var SceneStore = require("<scripts>/stores/SceneStore")

var Game = React.createClass({
    mixins: [
        Reflux.connect(SceneStore, "scenes")
    ],
    render: function() {
        return (
            <GameFrame ratio="4x3">
                {this.state.scenes}
                <PlayerButton direction="previous"/>
                <PlayerButton direction="next"/>
            </GameFrame>
        )
    }
})

module.exports = Game
