import React, { useState, useEffect } from "react";

const useMousePosition = () => {
    const [positions, setPositions] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            setPositions({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener("mousemove", updateMouse)
        //返回函数，执行清除工作
        return () => {
            document.removeEventListener("mousemove", updateMouse)
        }
    }, [])
    return positions
}

export default useMousePosition