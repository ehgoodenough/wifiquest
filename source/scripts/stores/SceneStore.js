var Character = require("<scripts>/components/Character")

var SceneStore = Reflux.createStore({
    data: [
        (
            <Character key={1} x={13} y={11} z={2}>
                Hello World!
            </Character>
        ),
        (
            <Character key={2} x={12+20} y={11} z={1}>
                How are you doing?
            </Character>
        ),
        (
            <Character key={3} x={13+20+20} y={11} z={1}>
                How are you doing?
            </Character>
        )
    ],
    getData: function() {
        return this.data
    }
})

module.exports = SceneStore
