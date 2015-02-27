var PlaythroughActions = require("<scripts>/actions/PlaythroughActions")

var TitleScreen = React.createClass({
    componentDidMount: function() {
        var music = new Audio("./assets/music/insearch.mp3");
        music.play()
    },
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
