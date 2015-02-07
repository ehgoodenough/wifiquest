var DialogueStore = require("<scripts>/stores/DialogueStore")

var DialogueBox = React.createClass({
    mixins: [
        Reflux.connect(DialogueStore, "dialogue")
    ],
    render: function() {
        if(this.state.dialogue) {
            console.log("!")
            return (
                <div className="dialogue-box">
                    {this.state.dialogue}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
})

module.exports = DialogueBox
