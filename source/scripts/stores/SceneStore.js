var Actor = require("<scripts>/components/Actor")
var Dialogue = require("<scripts>/components/Dialogue")
var Scene = require("<scripts>/components/Scene")

var SceneStore = Reflux.createStore({
    data: [
        (
            <Scene key={1}>
                <Actor x={0} y={5}>
                    Hello World!
                </Actor>
            </Scene>
        ),
        (
            <Scene key={2}>
                <Actor x={0} y={4}>
                    How are you doing?
                </Actor>
            </Scene>
        ),
        (
            <Scene key={3}>
                <Actor x={0} y={5}>
                    How are you doing?
                </Actor>
            </Scene>
        )
    ],
    getData: function() {
        return this.data
    }
})

module.exports = SceneStore
