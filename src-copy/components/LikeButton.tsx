import React, { useState, useEffect, useRef, useContext } from "react";
// import useMousePosition from "../hooks/useMousePosition.tsx";
import { ThemeContext } from "../App.tsx"

const LikeButton: React.FC = () => {
    const likeRef = useRef(0)//拿到手的是最终的状态数据
    const [like, setLike] = useState(0)
    const didMountRef = useRef(false)
    const domRef = useRef<HTMLInputElement>(null)
    const theme = useContext(ThemeContext)
    console.log(theme);
    const style = {
        background: theme.background,
        color:theme.color
    }
    // const [on, setOn] = useState(true)
    // const positions = useMousePosition()
    useEffect(() => {
        console.log("document title effect is running");
        document.title = `点击了${like}次`
    }, [like])//当数组里任意一项变化的时候，都会执行
    useEffect(() => {
        if (didMountRef.current) {
            console.log("this is updated");
        } else {
            didMountRef.current = true
        }
    })
    useEffect(() => {
        if (domRef && domRef.current) {
            domRef.current.focus()
        }
    })


    function handleAlertClick() {
        setTimeout(() => {
            alert("you clicked on" + likeRef.current)
        }, 3000);
    }

    return (
        <>
            {/* <p>X:{positions.x},Y:{positions.y}</p> */}
            {/* <button onClick={() => { setOn(!on) }}>
                {on ? "ON" : "OFF"}
            </button> */}

            <input type="text" ref={domRef} />
            <button style={style} onClick={() => { setLike(like + 1); likeRef.current++ }}>
                {like}
            </button>
            <button onClick={handleAlertClick}>Alert!</button>
        </>
    )
}
export default LikeButton