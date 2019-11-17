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
