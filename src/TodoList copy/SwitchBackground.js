import React from "react";

//晚上
const night = {
    backgroundColor: "rgb(57, 61, 51)",
    color: "white"
}

//白天
const day = {
    backgroundColor: "rgb(167, 179, 147)",
    color: "black"
}

const { Provider, Consumer } = React.createContext()

class LocalData extends React.Component {
    constructor(porps) {
        super(porps)
        this.state = {
            background: day,
        }
    }
    switchBackound = () => {
        const background = this.state.background === day ? night : day
        this.setState({
            background
        })
        console.log(background);
    }
    render() {
        return (
            <Provider value={this.state.background}>
                <div className="switchBackground">
                    <button onClick={this.switchBackound}>Switch Background</button><br />
                </div>
                <SwitchBackground />
            </Provider>
        )
    }
}

class SwitchBackground extends React.Component {
    render() {
        return (
            <Consumer>
                {
                    background => {
                        const body = document.getElementById("body")
                        body.style.backgroundColor = background.backgroundColor
                        body.style.color = background.color

                    }
                }
            </Consumer>
        )
    }
}

export default LocalData