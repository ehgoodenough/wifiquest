var PlaythroughActions = require("<scripts>/actions/PlaythroughActions")

var TitleScreen = React.createClass({
    render: function() {
        return (
            <div className="title screen">
                <img src="./assets/images/title.gif"/>
                <span onClick={PlaythroughActions.StartPlaythrough}>
                    Play!!
                </span>
            </div>
        )
    }
})

module.exports = TitleScreen