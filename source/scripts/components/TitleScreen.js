var PlaythroughActions = require("<scripts>/actions/PlaythroughActions")

var TitleScreen = React.createClass({
    render: function() {
        return (
            <div>
                <b onClick={PlaythroughActions.StartPlaythrough}>
                    Hello World!
                </b>
            </div>
        )
    }
});

module.exports = TitleScreen
