import React from "react";
import LocalContext from "./LocalContext";
// class Context extends React.Component {
//     render() {
//         return <Toolbar theme="dark" />;
//     }
// }

// function Toolbar(props) {
//     return (
//         <div>
//             <ThemedButton theme={props.theme} />
//         </div>
//     );
// }

// class ThemedButton extends React.Component {

//     onclickValue=()=>{
//         const theme=this.props.theme
//         console.log(theme);
//     }
//     render() {
//         return <Button onClick={this.onclickValue} theme={this.props.theme} />; 
//     }
// }
// export default Context



//使用 context, 我们可以避免通过中间元素传递 props：
// const ThemeContext = React.createContext("light")
// class App extends React.Component {
//     render() {
//         return (
//             <ThemeContext.Provider value="dark">
//                 <Toolbar />
//             </ThemeContext.Provider>
//         )
//     }
// }

// // 中间的组件再也不必指明往下传递 theme 了。
// function Toolbar() {
//     return (
//         <div>
//             <ThemedButton />
//         </div>
//     )
// }

// class ThemedButton extends React.Component {
//     static contextType = ThemeContext
//     onClickValue = () => {
//         console.log(this.context);
//     }
//     render() {
//         return (                                    //不再写tis.props
//             <Button onClick={this.onClickValue} theme={this.context} />
//         )
//     }

// }

//使用 Context 之前的考虑
//Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。
//请谨慎使用，因为这会使得组件的复用性变差。



//Provider :提供数据
//Consumer:消费数据
const { Provider, Consumer } = LocalContext


class ContextDemo extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            User: {
                age: 19,
                name: "acider"
            }
        }
    }
    render() {
        return (
            <div>
                <Provider value={this.state.User}>
                    <Container></Container>
                </Provider>
                <hr />
                <input
                    onClick={
                        () => this.setState(preState => {
                            return{
                                User: {...preState.User, age:preState.User.age+1}
                            }
                    })
                }
                value={this.state.User.name}
                type="button"
                />
            </div>
        )
    }
}


function Container(props) {
    return <Title />
}

function Title(props) {
    return (
        <div>
            <Consumer >{/*内部必须是一个函数*/}
                {
                    context => {
                        return (
                            <div>
                                {context.name}--{context.age}
                            </div>
                        )
                    }
                }
            </Consumer>
        </div>
    )
}

export default ContextDemo