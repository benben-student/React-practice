import List from "../component/admin/product/List"
import  Index from "../component/admin/dashboard/Index"
import Edit from "../component/admin/product/Edit"
import Login from "../component/Login"
import PageNotFound from "../component/PageNotFound"

export const mainRouters = [{
    path: '/login',
    component: Login
},{
    path:'/404',
    component:PageNotFound
}
]
export const admirnRouters = [{
    path: '/admin/dashboard',
    component: Index,
    isShow:true,
    title:"看板"
}, {
    path: '/admin/product',
    component: List,
    isShow:true,
    exact:true,
    title:"商品管理"
}, {
    path: '/admin/product/edit/:id',
    isShow:false,
    component: Edit
}
]