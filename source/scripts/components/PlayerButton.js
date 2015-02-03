var PlayerActions = require("<scripts>/actions/PlayerActions")

var PlayerButton = React.createClass({
    render: function() {
        return (
            <div onClick={this.onClick}
                 className={this.renderClasses()}/>
        )
    },
    renderClasses: function() {
        return React.addons.classSet({
            "next": this.props.direction == "next",
            "previous": this.props.direction == "previous",
            "player-button": true
        })
    },
    onClick: function() {
        if(this.props.direction == "next") {
            PlayerActions.MovePlayerToNextScene()
        } else if(this.props.direction == "previous") {
            PlayerActions.MovePlayerToPreviousScene()
        }
    }
})

module.exports = PlayerButton
