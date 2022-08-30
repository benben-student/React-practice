//TypeScript加持的react hello world 组件
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello.tsx';
import LikeButton from './components/LikeButton.tsx';
// import MouseTracker from './components/MouseTracker.tsx';
// import useMousePosition from './hooks/useMousePosition.tsx';
// import withLoader from "./components/withLoader.tsx"
import useURLLoader from "./hooks/useURLLoader.tsx"

interface IShowResult {
  message: string;
  status: string;
}

interface IThemeProps {
  [key: string]: { color: string; background: string }
}

const themes: IThemeProps = {
  "light": {
    color: "#000",
    background: "#eee"
  },
  "dark": {
    color: "#fff",
    background: "#222"
  }
}
// const DogShow: React.FC<{ data: IShowResult }> = ({ data }) => {
//   return (
//     <>
//       <h2>Dog show :{data.status}</h2>
//       <img src={data.message} />
//     </>
//   )
// }

export const ThemeContext = React.createContext(themes.light)
const App: React.FC = () => {
  const [show, setShow] = useState(true)
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResult
  // const WrappedDogShow = withLoader(DogShow, "./components/1.png")
  // const positions = useMousePosition()
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => { setShow(!show) }}>Refresh dog photo</button>
        </p>
        {/* <p>X:{positions.x},Y:{positions.y}</p> */}
        <Hello message="hello world2" />
        {/* <WrappedDogShow /> */}
        <LikeButton />
        {loading ? <p>🐕读取中</p> :
          <img src={dogResult && dogResult.message} />
        }
        {/* {show && <MouseTracker />} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
