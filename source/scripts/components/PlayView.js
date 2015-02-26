var ThingStore = require("<scripts>/stores/ThingStore")
var DialogueBox = require("<scripts>/components/DialogueBox")
var PlayerButtons = require("<scripts>/components/PlayerButtons")

var PlayView = React.createClass({
    mixins: [
        Reflux.connect(ThingStore, "things")
    ],
    render: function() {
        return (
            <div>
                {this.state.things}
                <PlayerButtons/>
                <DialogueBox/>
            </div>
        )
    }
});

module.exports = PlayView;
