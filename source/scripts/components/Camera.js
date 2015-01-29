var CameraStore = require("<scripts>/stores/CameraStore")

var Camera = React.createClass({
    mixins: [
        Reflux.connect(CameraStore, "camera")
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
            left: this.state.camera.position.x + "em"
        }
    },
    renderClasses: function() {
        return React.addons.classSet({
            "camera": true
        })
    }
})

module.exports = Camera
