var CameraStore = require("<scripts>/stores/CameraStore")
var DialogueActions = require("<scripts>/actions/DialogueActions")

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
    handleClick: function(event) {
        if(this.props.children) {
            event.stopPropagation()
            
            var dialogue = undefined
            React.Children.forEach(this.props.children, function(child) {
                if(dialogue == undefined) {
                    if(child.props.condition) {
                        if(this.tags[child.props.condition]) {
                            dialogue = child.props.children
                        }
                    } else {
                        dialogue = child.props.children
                        if(child.props.trigger) {
                            this.tags[child.props.trigger] = true
                        }
                    }
                }
            })
            if(!dialogue) {
                dialogue = "I have nothing to say."
            }
            
            DialogueActions.BeginDialogue(dialogue)
        }
    }
})

window.tags = new Array()

module.exports = Thing
