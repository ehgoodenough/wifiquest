var Actor = require("<scripts>/components/Actor")
var Dialogue = require("<scripts>/components/Dialogue")
var Scene = require("<scripts>/components/Scene")

var FirstScene = (
    <Scene key={1}>
        <Actor x={3} y={5}>
            Hello World!
        </Actor>
    </Scene>
)

module.exports = FirstScene
