var CameraStore = require("<scripts>/stores/CameraStore")
var PlaythroughStore = require("<scripts>/stores/PlaythroughStore")
var PlaythroughActions = require("<scripts>/actions/PlaythroughActions")

var Thing = React.createClass({
    mixins: [
        Reflux.connect(CameraStore, "camera")
    ],
    propTypes: {
        x: React.PropTypes.number,
        y: React.PropTypes.number,
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        image: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            x: 0,
            y: 0,
            width: 1,
            height: 1,
            image: "",
            color: ""
        }
    },
    render: function() {
        return (
            <div style={this.renderStyles()}
                 className={this.renderClasses()}
                 onClick={this.handleClick}/>
        )
    },
    renderStyles: function() {
        return {
            left: (this.state.camera.x / this.props.z) + this.props.x + "em",
            top: (this.state.camera.y / this.props.z) + this.props.y + "em",
            width: this.props.width + "em",
            height: this.props.height + "em",
            backgroundImage: "url(" + this.props.image + ")",
            backgroundColor: this.props.color
        }
    },
    renderClasses: function() {
        return React.addons.classSet({
            "thing": true
        })
    },
    handleClick: function() {
        if(this.props.children) {
            var text = this.props.children
            PlaythroughActions.BeginDialogue(text)
        }
    }
})

module.exports = Thing
