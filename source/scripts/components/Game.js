var SceneStore = require("<scripts>/stores/SceneStore")

var GameFrame = require("<scripts>/components/GameFrame")

var Game = React.createClass({
    mixins: [
        Reflux.connect(SceneStore, "scene")
    ],
    render: function() {
        return (
            <GameFrame ratio="4x3">
                {this.state.scene}
            </GameFrame>
        )
    }
})

module.exports = Game
