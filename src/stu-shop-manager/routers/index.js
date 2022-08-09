import List from "../Pages/admin/product/List"
import  Index from "../Pages/admin/dashboard/Index"
import Edit from "../Pages/admin/product/Edit"
import Login from "../Pages/Login"
import PageNotFound from "../Pages/PageNotFound"

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
    path: '/admin/product/edit/:id?',
    isShow:false,
    component: Edit
}
]