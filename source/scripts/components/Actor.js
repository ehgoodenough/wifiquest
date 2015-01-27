var Actor = React.createClass({
    propTypes: {
        x: React.PropTypes.number,
        y: React.PropTypes.number,
        width: React.PropTypes.number,
        height: React.PropTypes.number,
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
            left: this.props.x + "em",
            top: this.props.y + "em",
            width: this.props.width + "em",
            height: this.props.height + "em"
        }
    },
    renderClasses: function() {
        return React.addons.classSet({
            "actor": true
        })
    }
})

module.exports = Actor
