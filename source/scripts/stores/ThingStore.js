var Thing = require("<scripts>/components/Thing")

var ThingStore = Reflux.createStore({
    data: (
        <div className="all-things">
            <Thing key={1}
                x={0} y={0} z={7}
                width={WIDTH*5} height={HEIGHT}
                image={"./assets/images/backbackground.jpg"}/>
            <Thing key={2}
                x={0} y={HEIGHT*(1/3)} z={7/2}
                width={WIDTH*5} height={HEIGHT}
                image={"./assets/images/background.png"}/>
                
            <Thing key={6}
                x={0} y={0} z={1}
                width={WIDTH*2} height={HEIGHT}
                image={"./assets/images/ground1.png"}/>
            <Thing key={7}
                x={WIDTH*2} y={0} z={1}
                width={WIDTH*2} height={HEIGHT}
                image={"./assets/images/ground2.png"}/>
            <Thing key={8}
                x={WIDTH*4} y={0} z={1}
                width={WIDTH*2} height={HEIGHT}
                image={"./assets/images/ground3.png"}/>
            <Thing key={3} color="red"
                x={WIDTH*1.5-0.5} y={HEIGHT-6.5} z={1}
                width={2} height={3}>
                Hello!
            </Thing>
            <Thing key={4} color="green"
                x={WIDTH*2.5-0.5} y={HEIGHT-6.5} z={1}
                width={2} height={3}>
                Hiya!
            </Thing>
            <Thing key={5} color="blue"
                x={WIDTH*3.5-0.5} y={HEIGHT-6.5} z={1}
                width={2} height={3}>
                Whatsup?
            </Thing>
        </div>
    ),
    getData: function() {
        return this.data
    }
})

module.exports = ThingStore
