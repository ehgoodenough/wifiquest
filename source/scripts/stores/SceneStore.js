var SceneActions = require("<scripts>/actions/SceneActions")

var SceneStore = Reflux.createStore({
    data: [
        require("<scripts>/scenes/FirstScene"),
        require("<scripts>/scenes/SecondScene")
    ],
    getData: function() {
        return this.data[0]
    }
})

module.exports = SceneStore
