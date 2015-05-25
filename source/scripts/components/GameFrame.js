var GameFrame = React.createClass({
    getDefaultProps: function() {
        return {
            "aspect-ratio": "20x15"
        }
    },
    render: function() {
        return (
            <div {...this.props}
                style={this.renderStyles()}/>
        )
    },
    renderStyles: function() {
        var styles = {
            top: "0rem",
            left: "0rem",
            right: "0rem",
            bottom: "0rem",
            margin: "auto",
            position: "fixed",
            overflow: "hidden",
            backgroundColor: "rgb(153, 217, 234)"
        }
        var width = this.props["aspect-ratio"].split("x")[0]
        var height = this.props["aspect-ratio"].split("x")[1]
        if(window.innerWidth / window.innerHeight > width / height) {
            styles.fontSize = (width / height * 100) / width + "vh"
            styles.width = width / height * 100 + "vh"
            styles.height = 100 + "vh"
        } else {
            styles.width = 100 + "vw"
            styles.height = (height / width) * 100 + "vw"
            styles.fontSize = ((height / width) * 100) / height + "vw"
        }
        return styles
    },
    componentDidMount: function() {
        window.addEventListener("resize", this.onResize)
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.onResize)
    },
    onResize: function() {
        this.forceUpdate()
    }
})

module.exports = GameFrame
