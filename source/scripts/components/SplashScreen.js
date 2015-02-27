var PlaythroughActions = require("<scripts>/actions/PlaythroughActions")

var SplashScreen = React.createClass({
    componentDidMount: function() {
        window.setTimeout(function() {
            PlaythroughActions.EndSplashing()
        }, 700 + 1000 + 1000)
    },
    render: function() {
        return (
            <div className="splash screen">
                <div className="logo">
                    Mocs Arcade
                </div>
            </div>
        )
    }
})

module.exports = SplashScreen
