var Thing = require("<scripts>/components/Thing")

var ThingStore = Reflux.createStore({
    data: (
        <div className="all-things">
            <Thing x={-1} y={-2} z={7} width={WIDTH*5} height={HEIGHT} image={"data:image/png;base64," + require("fs").readFileSync("./source/assets/images/backbackground.png", "base64")}/>
            <Thing x={-1} y={2} z={7/2} width={WIDTH*5} height={HEIGHT} image={"data:image/png;base64," + require("fs").readFileSync("./source/assets/images/background.png", "base64")}/>
            <Thing x={-1} y={7} z={1} width={WIDTH*6} height={HEIGHT} image={"data:image/png;base64," + require("fs").readFileSync("./source/assets/images/ground.png", "base64")}/>
            <Thing image={"./assets/images/kitty.png"} x={WIDTH*1.5-3+0.5} y={HEIGHT-8} z={1} width={6} height={5}>
                <div condition="2">
                    <b style={{color: "blue"}}>Blue</b> is just the best!
                </div>
                <div condition="1" trigger="2">
                    Oh! You should talk with <b style={{color: "blue"}}>blue</b>!
                </div>
                <div>
                    Hello! I am a <b style={{color: "red"}}>red</b> box!
                </div>
            </Thing>
            <Thing image={"./assets/images/turtle.png"} x={WIDTH*2.5-3+0.5} y={HEIGHT-8} z={1} width={6} height={5}>
                <div condition="4">
                    Black can be a bit scary...
                </div>
                <div condition="3" trigger="4">
                    Hm. Now you can talk with black again.
                </div>
                <div>
                    Hiya! I am a <b style={{color: "green"}}>green</b> box!
                </div>
            </Thing>
            <Thing image={"./assets/images/rabbit.png"} x={WIDTH*3.5-1.5+0.5} y={HEIGHT-8.5} z={1} width={3} height={5}>
                <div condition="3">
                    <b style={{color: "green"}}>Green</b> is absolutely fantastic.
                </div>
                <div condition="2" trigger="3">
                    Ah! You should go talk with <b style={{color: "green"}}>green</b>!
                </div>
                <div>
                    Whatsup? I am a <b style={{color: "blue"}}>blue</b> box!
                    Are you looking for the black box?
                </div>
            </Thing>
            <Thing image={"./assets/images/roborouter.png"} x={WIDTH*4.5-4} y={HEIGHT-11} z={1} width={10} height={8}>
                <div condition="4" execute="win">
                    ...Congratulations. You have won.
                </div>
                <div condition="2">
                    ...
                </div>
                <div trigger="1">
                    ...Go talk with <b style={{color: "red"}}>red</b>.
                </div>
            </Thing>
        </div>
    ),
    getData: function() {
        return this.data
    }
})

module.exports = ThingStore
