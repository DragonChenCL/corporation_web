import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/checkup/add',
    method: 'post',
    data
  })
}

export function getAll(data) {
  return request({
    url: '/checkup/getAll',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/checkup/update',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: '/checkup/delete',
    method: 'post',
    data
  })
}

export function getValidCorBySchool() {
  return request({
    url: '/checkup/getValidCorBySchool',
    method: 'post'
  })
}

export function loadMyCorporation(data) {
  return request({
    url: '/checkup/loadMyCorporation',
    method: 'post',
    data
  })
}

