var GameFrame = React.createClass({
    getDefaultProps: function() {
        return {
            ratio: "3x4"
        }
    },
    render: function() {
        return (
            <div id="game-frame" onClick={this.props.onClick}
                className={"_" + this.props.ratio}>
                {this.props.children}
            </div>
        )
    }
})

module.exports = GameFrame
