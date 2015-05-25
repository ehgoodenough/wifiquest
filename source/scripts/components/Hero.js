var Hero = React.createClass({
    render: function() {
        return <div style={this.renderStyles()}/>
    },
    renderStyles: function() {
        if(this.props.data.color != undefined
        && this.props.data.width != undefined
        && this.props.data.height != undefined
        && this.props.data.position != undefined
        && this.props.data.velocity != undefined) {
            var color = this.props.data.color
            var stretch = Math.min(this.props.data.velocity.y * 0.75, 0.25)
            var width = this.props.data.width + stretch
            var height = this.props.data.height - stretch
            var x = this.props.data.position.x - (width / 2)
            var y = this.props.data.position.y - (height / 2) + (stretch / 2)
            return {
                top: y + "em",
                left: x + "em",
                width: width + "em",
                height: height + "em",
                backgroundColor: color,
                position: "absolute",
            }
        }
    }
})

module.exports = Hero
