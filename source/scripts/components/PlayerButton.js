var PlayerActions = require("<scripts>/actions/PlayerActions")

var MovePlayerToNextScene = PlayerActions.MovePlayerToNextScene
var MovePlayerToPreviousScene = PlayerActions.MovePlayerToPreviousScene

var PlayerButton = React.createClass({
    render: function() {
        return (
            <div className="all-player-buttons">
                <div className="next player-button"
                    onClick={MovePlayerToNextScene}/>
                <div className="previous player-button"
                    onClick={MovePlayerToPreviousScene}/>
            </div>
        )
    }
})

module.exports = PlayerButton
