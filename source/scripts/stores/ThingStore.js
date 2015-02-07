var Thing = require("<scripts>/components/Thing")

var ThingStore = Reflux.createStore({
    data: [
        (
            <Thing key={1}
                   x={0} y={0} z={7} width={30} height={15}
                   image={"./assets/images/backbackground.jpg"}/>
        ),
        (
            <Thing key={2}
                   x={0} y={7} z={3} width={30} height={10}
                   image={"./assets/images/background.png"}/>
        ),
        (
            <Thing key={3} color="red"
                   x={4.5} y={15-5} z={1}
                   width={1} height={1}>
                   Hello!
            </Thing>
        ),
        (
            <Thing key={4} color="green"
                   x={4.5+10} y={15-5} z={1}
                   width={1} height={1}>
                   Hiya!
            </Thing>
        ),
        (
            <Thing key={5} color="blue"
                   x={4.5+10+10} y={15-5} z={1}
                   width={1} height={1}>
                   Whatsup?
            </Thing>
        )
    ],
    getData: function() {
        return this.data
    }
})

module.exports = ThingStore
