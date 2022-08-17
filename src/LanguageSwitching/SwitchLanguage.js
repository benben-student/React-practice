import React from "react";

const { Provider, Consumer } = React.createContext()

const enStrings = {
    submit: "Submit",
    cancel: "Cancel"
};
// 中文状态
const cnStrings = {
    submit: "提交",
    cancel: "取消"
}
class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            local: cnStrings
        }
    }
    switchLanguage = () => {
        const local = this.state.local === cnStrings ? enStrings : cnStrings
        this.setState({ local })
    }
    render() {
        return (
            <Provider value={this.state.local}>
                <button onClick={this.switchLanguage}>点击切换语言</button>
                <LocaledButtons />
            </Provider>
        )
    }
}

class LocaledButtons extends React.Component {
    render() {
        return (
            <Consumer>
                {locale => (
                    <div>
                        <button>{locale.cancel}</button>
                        &nbsp;<button>{locale.submit}</button>
                    </div>
                )}

            </Consumer>
        )
    }
}
export default Father
