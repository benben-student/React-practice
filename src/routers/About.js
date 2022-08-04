import { useSearchParams } from 'react-router-dom'
function About() {
    const [params] = useSearchParams()
    //params是一个对象，对象里有一个get的方法
    //用来获取对应的参数
    //把参数的名称作为get方法的实参传过来
    //id的参数
    console.log(params);
    const id = params.get('id')
    //name的参数
    const name=params.get('name')
    //y用这样的方式 http://localhost:3000/about?id=1001&name=cp
    return (
        <div>about得到的参数id值为{id}{name}</div>
    )
}
export default About