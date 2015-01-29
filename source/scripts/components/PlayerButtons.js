var PlayerActions = require("<scripts>/actions/PlayerActions")

var PlayerButtons = React.createClass({
    render: function() {
        return (
            <div className="player-button" onClick={this.onClick}/>
        )
    },
    onClick: function() {
        PlayerActions.SetPlayerPosition(1)
    }
})

module.exports = PlayerButtons
