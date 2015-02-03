var CameraStore = require("<scripts>/stores/CameraStore")

var Element = React.createClass({
    mixins: [
        Reflux.connect(CameraStore, "camera")
    ],
    propTypes: {
        x: React.PropTypes.number,
        y: React.PropTypes.number,
        width: React.PropTypes.number,
        height: React.PropTypes.number
    },
    getDefaultProps: function() {
        return {
            x: 0,
            y: 0,
            width: 1,
            height: 1
        }
    },
    render: function() {
        return (
            <div style={this.renderStyles()}
                 className={this.renderClasses()}/>
        )
    },
    renderStyles: function() {
        return {
            left: (this.state.camera.x / this.props.z) + this.props.x + "em",
            top: (this.state.camera.y / this.props.z) + this.props.y + "em",
            width: this.props.width + "em",
            height: this.props.height + "em",
            backgroundImage: "url(" + this.props.image + ")"
        }
    },
    renderClasses: function() {
        return React.addons.classSet({
            "element": true
        })
    }
})

module.exports = Element
