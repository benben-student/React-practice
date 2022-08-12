import { get, post, put, del } from '../utils/request'
export function listApi(page = 1) {
    return get("/api/v1/admin/product", { page,per:2 })
}

export function create(data) {
    return post("/api/v1/admin/product", data)
}

export function modifyOne(id, data) {
    return put(`/api/v1/admin/product/${id}`, data)
}

export function delOne(id, data) {
    return del(`/api/v1/admin/product/${id}`, data)
}