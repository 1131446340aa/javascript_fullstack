import {request} from './requeir'
export function getDetail (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
