var Scene = require("<scripts>/components/Scene")
var Actor = require("<scripts>/components/Actor")
var Dialogue = require("<scripts>/components/Dialogue")

var GameFrame = require("<scripts>/components/GameFrame")

var Game = React.createClass({
    render: function() {
        return (
            <GameFrame ratio="4x3">
                <Scene key={1}>
                    <Actor x={3} y={5}>
                        <Dialogue>
                            Hello World!
                        </Dialogue>
                        <Dialogue>
                            <b>Hiya World.</b>
                        </Dialogue>
                    </Actor>
                </Scene>
            </GameFrame>
        )
    }
})

module.exports = Game
