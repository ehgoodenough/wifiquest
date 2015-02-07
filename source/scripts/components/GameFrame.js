var GameFrame = React.createClass({
    getDefaultProps: function() {
        return {
            ratio: "4x3"
        }
    },
    render: function() {
        return (
            <div id="game-frame" className={"_" + this.props.ratio}>
                {this.props.children}
            </div>
        )
    }
})

module.exports = GameFrame
