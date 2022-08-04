import React from "react";
import { Link } from "react-router-dom/";
import Ucenter from "../components/Ucenter/Ucenter";
export default class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1001,
                    name: '汽车'
                },
                {
                    id: 1002,
                    name: '豪宅'
                },
                {
                    id: 1003,
                    name: '美女'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Ucenter />
                <ul>
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <li>
                                    <Link to={`/detail/${item.id}`}>
                                        <span>{item.id}</span>
                                        <span>{item.name}</span></Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}