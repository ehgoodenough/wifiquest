var Camera = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyles()}>
                {this.props.children}
            </div>
        )
    },
    renderStyles: function() {
        var x = 0
        var y = 0
        var zx = 1
        var zy = 1
        if(this.props.target.position != undefined) {
            x = this.props.target.position.x
            y = this.props.target.position.y
        }
        if(this.props.zx != undefined) {
            zx = this.props.zx
        }
        if(this.props.zy != undefined) {
            zy = this.props.zy
        }
        return {
            position: "absolute",
            transitionDuration: "0.5s",
            transitionProperty: "top left",
            transitionTimingFunction: "ease",
            left: (Math.floor(x / WIDTH) * WIDTH) / zx * -1 + "em",
            top: (Math.floor(y / HEIGHT) * HEIGHT) / zy * -1 + "em"
        }
    }
})

module.exports = Camera
