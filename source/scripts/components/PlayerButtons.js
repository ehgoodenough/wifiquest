var PlayerActions = require("<scripts>/actions/PlayerActions")

var PlayerButtons = React.createClass({
    render: function() {
        return (
            <div className="player-button" onClick={this.onClick}/>
        )
    },
    onClick: function() {
        PlayerActions.IncrementPlayerPosition(20)
    }
})

module.exports = PlayerButtons
