var PlaythroughActions = require("<source>/scripts/actions/PlaythroughActions")

var TitleScreen = require("<source>/scripts/components/TitleScreen")
var PlaythroughScreen = require("<source>/scripts/components/PlaythroughScreen")

var ScreenStore = Reflux.createStore({
    data: {
        screen: <TitleScreen/>
    },
    getData: function() {
        return this.data
    },
    listenables: [
        PlaythroughActions
    ],
    onStartPlaythrough: function() {
        this.data.screen = <PlaythroughScreen/>
        this.retrigger()
    },
    onEndPlaythrough: function() {
        this.data.screen = <TitleScreen/>
        this.retrigger()
    }
})

module.exports = ScreenStore
