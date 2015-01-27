var Actor = require("<scripts>/components/Actor")
var Dialogue = require("<scripts>/components/Dialogue")
var Scene = require("<scripts>/components/Scene")

var SecondScene = (
    <Scene key={2}>
        <Actor x={5} y={5}>
            How are you doing?
        </Actor>
    </Scene>
)

module.exports = SecondScene
