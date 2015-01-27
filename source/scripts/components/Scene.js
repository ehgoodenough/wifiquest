var Scene = React.createClass({
    render: function() {
        return (
            <div className="scene">
                {this.props.children}
            </div>
        )
    }
})

module.exports = Scene
