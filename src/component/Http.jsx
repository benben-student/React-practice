import React from "react";
import axios from "axios";
import Qs from 'qs'
export default class Http extends React.Component {
    componentDidMount() {
        // axios.get("http://iwenwiki.com:3000/dj/recommend/type",{
        //     params:{
        //         type:"3001"
        //     }
        // })
        // .then(res=>{
        //     console.log(res.data);
        // })
        // .catch(error=>{
        //     console.log(error);
        // })

        axios.post("http://iwenwiki.com/api/blueberrypai/login.php", Qs.stringify({
            user_id: "iwen@qq.com",
            password: "iwen123",
            verification_code: "crfvw"
        })).then(res => {
            console.log(res.data);
        }).catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>网络请求</div>
        )
    }
}