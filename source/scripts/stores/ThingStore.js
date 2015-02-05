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
        )
    ],
    getData: function() {
        return this.data
    }
})

module.exports = ThingStore
