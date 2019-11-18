import {request} from './requeir'

export function  RotationChar() {
  return request({
    url: '/banner',
    params: {
      
    }
  })
}
export function  personalized() {
  return request({
    url: '/personalized',
    params: {
      
    }
  })
}
export function  albumNewest() {
  return request({
    url: '/album/newest',
    params: {
      
    }
  })
}
export function  first(limit) {
  return request({
    url: '/mv/first',
    params: {
      limit
    }
  })
}
export function  mvUrl(id) {
  return request({
    url: '/mv/url',
    params: {
      id
    }
  })
}
