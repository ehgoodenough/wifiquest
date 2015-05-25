var PlaythroughActions = require("<source>/scripts/actions/PlaythroughActions")

var SplashScreen = require("<source>/scripts/components/SplashScreen")
var TitleScreen = require("<source>/scripts/components/TitleScreen")
var PlaythroughScreen = require("<source>/scripts/components/PlaythroughScreen")

var ScreenStore = Reflux.createStore({
    data: {
        screen: <SplashScreen/>
    },
    getData: function() {
        return this.data
    },
    listenables: [
        PlaythroughActions
    ],
    onEndSplashing: function() {
        this.data.screen = <TitleScreen/>
        this.retrigger()
    },
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
