var Actor = require("<scripts>/components/Actor")
var Scene = require("<scripts>/components/Scene")

var SceneStore = Reflux.createStore({
    data: [
        (
            <Scene key={1}>
                <Actor x={13} y={11}>
                    Hello World!
                </Actor>
            </Scene>
        ),
        (
            <Scene key={2}>
                <Actor x={12} y={11}>
                    How are you doing?
                </Actor>
            </Scene>
        ),
        (
            <Scene key={3}>
                <Actor x={13} y={11}>
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
