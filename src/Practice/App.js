import React from "react";
import Header from "./Header";
import OrderList from "./OrderList";
class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <OrderList/>
            </div>
        )
    }
}
export default App