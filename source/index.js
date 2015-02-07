window.React = require("react/addons")
window.Reflux = require("reflux")
window.Hammer = new (require("hammerjs"))(document.body)
window.Screenfull = require("screenfull")

window.React.initializeTouchEvents(true)
window.Reflux.StoreMethods.getInitialState = function() {if(this.getData) {return this.getData()}}
window.Reflux.StoreMethods.retrigger = function() {if(this.getData) {this.trigger(this.getData())}}

window.WIDTH = 15
window.HEIGHT = 20


var Game = require("<scripts>/components/Game")
React.render(<Game/>, document.body)
