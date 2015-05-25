window.React = require("react/addons")
window.Screenfull = require("screenfull")
window.Keyb = require("keyb")
window.Phlux = require("phlux")
window.Tickly = require("tickly")

window.WIDTH = 15
window.HEIGHT = 20

var Game = require("<scripts>/components/Game")
React.render(<Game/>, document.body)
