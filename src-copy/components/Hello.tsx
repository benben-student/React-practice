import React,{useContext} from "react";
import {ThemeContext} from "../App.tsx"

interface IHelloProps {
    message?: string
}

const Hello: React.FunctionComponent<IHelloProps> = (props) => {
    const theme = useContext(ThemeContext)
    console.log(theme);
    const style = {
        background: theme.background,
        color:theme.color
    }
    return <h2 style={style}>{props.message}</h2>
}

Hello.defaultProps={
    message:"hello world"
}
export default Hello