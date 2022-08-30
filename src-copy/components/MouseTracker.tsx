import React, { useState, useEffect } from "react";

const MouseTracker: React.FC = () => {
    const [positions, setPositions] = useState({ x: 0, y: 0 })
    useEffect(() => {
        console.log("add effect", positions.x);
        const updateMouse = (e: MouseEvent) => {
            console.log("inner");
            setPositions({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener("click", updateMouse)
        //返回函数，执行清除工作
        return () => {
            console.log("remove effect", positions.x);
            document.removeEventListener("click", updateMouse)
        }
    },[]) //Effect的第二个参数，[]可以让逻辑只执行一次
    console.log("before render", positions.x);

    return (
        <p>X:{positions.x},Y:{positions.y}</p>
    )
}

export default MouseTracker