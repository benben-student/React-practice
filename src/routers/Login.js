import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    function goAbout() {
        navigate('/about',{replace:true})
    }
    return (
        <div>Login
            <button onClick={goAbout}>跳转关于</button>
        </div>
    )
}
export default Login