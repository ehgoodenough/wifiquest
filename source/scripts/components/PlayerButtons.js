var CameraStore = require("<scripts>/stores/CameraStore")
var PlayerActions = require("<scripts>/actions/PlayerActions")

var PlayerButtons = React.createClass({
    mixins: [
        Reflux.connect(CameraStore, "camera")
    ],
    render: function() {
        return (
            <div className="all-player-buttons">
                <div className="next player-button"
                    onClick={PlayerActions.MovePlayerToNextScene}>
                    <div className={this.renderButtonClasses(this.state.camera.sx != 4)}>
                        &#8680;
                    </div>
                </div>
                <div className="previous player-button"
                    onClick={PlayerActions.MovePlayerToPreviousScene}>
                    <div className={this.renderButtonClasses(this.state.camera.sx != 0)}>
                        &#8678;
                    </div>
                </div>
            </div>
        )
    },
    renderButtonClasses: function(isActive) {
        return React.addons.classSet({
            "inactive": !isActive,
            "button": true
        })
    }
})

module.exports = PlayerButtons
