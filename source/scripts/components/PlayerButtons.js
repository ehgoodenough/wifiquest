var CameraStore = require("<scripts>/stores/CameraStore")
var PlayerActions = require("<scripts>/actions/PlayerActions")

var PlayerButtons = React.createClass({
    mixins: [
        Reflux.connect(CameraStore, "camera")
    ],
    render: function() {
        var camera = this.state.camera
        return (
            <div className="all-player-buttons">
                <div className={this.renderButtonClasses("next")}
                    onClick={PlayerActions.MovePlayerToNextScene}/>
                <div className={this.renderButtonClasses("previous")}
                    onClick={PlayerActions.MovePlayerToPreviousScene}/>
            </div>
        )
    },
    renderButtonClasses: function(button) {
        var camera = this.state.camera
        var isNextButton = (button == "next")
        var isPreviousButton = (button == "previous")
        var isActive = (isNextButton && camera.sx != 4)
                        || (isPreviousButton && camera.sx != 0)
        return React.addons.classSet({
            "active": isActive,
            "inactive": !isActive,
            "next": isNextButton,
            "previous": isPreviousButton,
            "player-button": true
        })
    }
})

module.exports = PlayerButtons
