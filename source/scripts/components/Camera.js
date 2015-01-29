var PlayerStore = require("<scripts>/stores/PlayerStore")

var Camera = React.createClass({
    mixins: [
        Reflux.connect(PlayerStore, "player")
    ],
    render: function() {
        return (
            <div style={this.renderStyles()}
                 className={this.renderClasses()}>
                 {this.props.children}
            </div>
        )
    },
    renderStyles: function() {
        return {
            left: this.state.player.position * 20 * -1 + "em"
        }
    },
    renderClasses: function() {
        return React.addons.classSet({
            "camera": true
        })
    }
})

module.exports = Camera
