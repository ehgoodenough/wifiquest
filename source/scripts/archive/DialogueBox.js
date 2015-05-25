var DialogueStore = require("<scripts>/stores/DialogueStore")

var DialogueBox = React.createClass({
    mixins: [
        Reflux.connect(DialogueStore, "dialogue")
    ],
    render: function() {
        this.state.text = this.state.dialogue.bliptext || this.state.text
        return (
            <div className={this.renderClasses()}>
                {this.state.text}
            </div>
        )
    },
    renderClasses: function() {
        return React.addons.classSet({
            "active": this.state.dialogue.active,
            "inactive": !this.state.dialogue.active,
            "dialogue-box": true
        })
    }
})

module.exports = DialogueBox
