var Thing = require("<scripts>/components/Thing")

var ThingStore = Reflux.createStore({
    data: (
        <div className="all-things">
            <Thing
                x={0} y={0} z={7}
                width={WIDTH*5} height={HEIGHT}
                image={"./assets/images/backbackground.jpg"}/>
            <Thing
                x={0} y={HEIGHT*(1/3)} z={7/2}
                width={WIDTH*5} height={HEIGHT}
                image={"./assets/images/background.png"}/>

            <Thing
                x={-1} y={7} z={1}
                width={WIDTH*6} height={HEIGHT}
                image={"./assets/images/ground.svg"}/>

            <Thing color="red"
                x={WIDTH*1.5-0.5} y={HEIGHT-6.5} z={1}
                width={2} height={3}>
                Hello! I am a red box!
            </Thing>
            <Thing color="green"
                x={WIDTH*2.5-0.5} y={HEIGHT-6.5} z={1}
                width={2} height={3}>
                Hiya! I am a green box!
            </Thing>
            <Thing color="blue"
                x={WIDTH*3.5-0.5} y={HEIGHT-6.5} z={1}
                width={2} height={3}>
                Whatsup? I am a blue box!!
            </Thing>
            <Thing color="black"
                x={WIDTH*4.5-1.5} y={HEIGHT-8.5} z={1}
                width={4} height={5}>
                ...
            </Thing>
        </div>
    ),
    getData: function() {
        return this.data
    }
})

module.exports = ThingStore
