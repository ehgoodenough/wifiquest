var DialogueStore = require("<scripts>/stores/DialogueStore")

var DialogueBox = React.createClass({
    mixins: [
        Reflux.connect(DialogueStore, "dialogue")
    ],
    render: function() {
        this.state.redialogue = this.state.dialogue || this.state.redialogue
        return (
            <div className={this.renderClasses()}>
                {this.state.redialogue}
            </div>
        )
    },
    renderClasses: function() {
        return React.addons.classSet({
            "active": this.state.dialogue != undefined,
            "inactive": this.state.dialogue == undefined,
            "dialogue-box": true
        })
    }
})

module.exports = DialogueBox
