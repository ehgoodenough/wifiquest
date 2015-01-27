var Camera = React.createClass({
    render: function() {
        return (
            <div className="camera">
                {this.props.children}
            </div>
        )
    }
})

module.exports = Camera
