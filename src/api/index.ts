import { request } from '@zdy-oa/utils'

export const getTasks = () => {
    return request.request({
        url: '/api/task/list',
        method: 'GET'
    });
}
