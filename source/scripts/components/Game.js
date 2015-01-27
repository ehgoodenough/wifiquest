var GameFrame = require("<scripts>/components/GameFrame")

var Game = React.createClass({
    render: function() {
        return (
            <GameFrame ratio="4x3">
                Hello World! :D
            </GameFrame>
        )
    }
})

module.exports = Game
