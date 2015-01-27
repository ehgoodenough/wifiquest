var Camera = require("<scripts>/components/Camera")
var GameFrame = require("<scripts>/components/GameFrame")

var SceneStore = require("<scripts>/stores/SceneStore")

var Game = React.createClass({
    mixins: [
        Reflux.connect(SceneStore, "scenes")
    ],
    render: function() {
        return (
            <GameFrame ratio="4x3">
                <Camera>
                    {this.state.scenes}
                </Camera>
            </GameFrame>
        )
    }
})

module.exports = Game
