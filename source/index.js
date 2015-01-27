window.React = require("react/addons")
window.Reflux = require("reflux")

window.Reflux.StoreMethods.getInitialState = function() {return this.getData()}
window.Reflux.StoreMethods.retrigger = function() {this.trigger(this.getData())}

var Game = require("<scripts>/components/Game")
React.render(<Game/>, document.body)
