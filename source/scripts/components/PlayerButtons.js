var PlayerActions = require("<scripts>/actions/PlayerActions")

var MovePlayerToNextScene = PlayerActions.MovePlayerToNextScene
var MovePlayerToPreviousScene = PlayerActions.MovePlayerToPreviousScene

var PlayerButtons = React.createClass({
    render: function() {
        return (
            <div className="all-player-buttons">
                <div className="next player-button"
                    onClick={MovePlayerToNextScene}>
                    <div className="button">&#8680;</div>
                </div>
                <div className="previous player-button"
                    onClick={MovePlayerToPreviousScene}>
                    <div className="button">&#8678;</div>
                </div>
            </div>
        )
    }
})

module.exports = PlayerButtons
