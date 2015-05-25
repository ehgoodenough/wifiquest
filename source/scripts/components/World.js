var World = React.createClass({
    mixins: [
        React.addons.PureRenderMixin
    ],
    render: function() {
        return (
            <canvas ref="canvas"
                style={this.renderStyles()}
                width={this.props.data.width * 64}
                height={this.props.data.height * 64}/>
        )
    },
    renderStyles: function() {
        return {
            width: this.props.data.width + "em",
            height: this.props.data.height + "em"
        }
    },
    renderTiles: function() {
        if(this.tileset == undefined) {
            this.importTileset(function() {
                this.renderTiles()
            }.bind(this))
        } else {
            for(var coords in this.props.data.tiles) {
                var tile = this.props.data.tiles[coords]
                this.renderTile(tile)
            }
        }
    },
    renderTile: function(tile) {
        var canvas = this.refs.canvas.getDOMNode().getContext("2d")
        var tsx = tile.value - (Math.floor(tile.value / 64) * 64)
        var tsy = Math.floor(tile.value / 64)
        canvas.drawImage(this.tileset, tsx * 64, tsy * 64, 64, 64,
            tile.position.x * 64, tile.position.y * 64, 64, 64)
    },
    importTileset: function(callback) {
        this.tileset = new Image()
        this.tileset.onload = callback
        this.tileset.src = this.props.data.image
    },
    componentDidMount: function() {
        this.renderTiles()
    },
    componentDidUpdate: function() {
        this.renderTiles()
    }
})

module.exports = World
