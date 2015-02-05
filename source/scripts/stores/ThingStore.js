var Thing = require("<scripts>/components/Thing")

var SceneStore = Reflux.createStore({
    data: [
        (
            <Thing key={-3} x={3} y={4} width={20} height={10} z={7} image={"./assets/mountain.png"}/>
        ),
        (
            <Thing key={-2} x={5} y={2.5} width={13} height={10.5} z={2} image={"./assets/trees.png"}/>
        ),
        (
            <Thing key={-1} x={0} y={0} width={20*3} height={15} z={1} image={"./assets/ground.png"}/>
        ),
        (
            <Thing key={1} x={3} y={12} z={1}>
                Hello World!
            </Thing>
        ),
        (
            <Thing key={2} x={12+20} y={11} z={1}>
                How are you doing?
            </Thing>
        ),
        (
            <Thing key={3} x={13+20+20} y={12} z={1}>
                Isn't the weather nice today?
            </Thing>
        ),
        (
            <Thing key={4} x={15} y={10} width={10} height={5} z={0.5} image={"./assets/bush.png"}/>
        )
    ],
    getData: function() {
        return this.data
    }
})

module.exports = SceneStore