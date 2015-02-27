var GameFrame = require("<scripts>/components/GameFrame")
var ScreenStore = require("<scripts>/stores/ScreenStore")

var Game = React.createClass({
    mixins: [
        Reflux.connect(ScreenStore, "screen")
    ],
    render: function() {
        return (
            <GameFrame ratio="3x4">
                {this.state.screen}
            </GameFrame>
        )
    }
})

module.exports = Game
