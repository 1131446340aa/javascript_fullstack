/**
 * @description jest server
 * @author 双越老师
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)
