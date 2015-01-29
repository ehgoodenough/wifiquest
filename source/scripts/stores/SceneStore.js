var Actor = require("<scripts>/components/Actor")
var Scene = require("<scripts>/components/Scene")

var SceneStore = Reflux.createStore({
    data: [
        (
            <Actor x={13} y={11}>
                Hello World!
            </Actor>
        ),
        (
            <Actor x={12+20} y={11}>
                How are you doing?
            </Actor>
        ),
        (
            <Actor x={13+20+20} y={11}>
                How are you doing?
            </Actor>
        )
    ],
    getData: function() {
        return this.data
    }
})

module.exports = SceneStore
