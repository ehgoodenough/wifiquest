window.React = require("react/addons")
window.Reflux = require("reflux")

window.Reflux.StoreMethods.getInitialState = function() {if(this.getData) {return this.getData()}}
window.Reflux.StoreMethods.retrigger = function() {if(this.getData) {this.trigger(this.getData())}}

window.WIDTH = 20
window.HEIGHT = 15

Math.roundToNearest = function(value, multiplicand) {
    return Math.round(value / multiplicand) * multiplicand
}

var Game = require("<scripts>/components/Game")
React.render(<Game/>, document.body)
