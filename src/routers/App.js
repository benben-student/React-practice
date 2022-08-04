
import Home from "./Home";
import About from "./About";
import Login from "./Login";
//两种常用Router：HashRouter 和 BrowserRouter
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
function App() {
    return (
        //声明当前要用一个非hash的路由
        <BrowserRouter>
            {/* 指定跳转的组件  to用来配置路由地址 */}
            {/* 用于指定导航链接，完成路由跳转 */}
            <Link to="/">首页</Link>
            <Link to="/about">关于</Link>
            {/* 路由出口  路由对应的组件会在这里进行渲染 */}
            {/*提供一个路由出口，满足条件的路由组件会渲染到组件内部*/}
            <Routes>
                {/* 指定路径和组件的对应关系  path代表路径 element代表组件 成对出现  path  ->  element */}
                {/*用于指定导航链接，完成路由匹配*/}
                <Route path="/" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App