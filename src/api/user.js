import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function getUserBase() {
  return request({
    url: '/user/base',
    method: 'get'
  })
}
