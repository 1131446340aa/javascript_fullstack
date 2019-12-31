let url = require('url')
let request = {
  get url() { // 这样就可以用ctx.request.url取值
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
  // .....
}

module.exports = request