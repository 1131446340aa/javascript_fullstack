/**
 * @description 用户关系 单元测试
 * @author 双越老师
 */

const server = require('../server')
const { getFans, getFollowers } = require('../../src/controller/user-relation')
const {
    Z_ID,
    Z_USER_NAME,
    Z_COOKIE,
    L_ID,
    L_USER_NAME
} = require('../testUserInfo')

// 先让张三取消关注李四（为了避免现在张三关注了李四）
test('无论如何，先取消关注', async () => {
    const res = await server
        .post('/api/profile/unFollow')
        .send({ userId: L_ID })
        .set('cookie', Z_COOKIE)
    expect(1).toBe(1)
})

// 添加关注
test('张三关注李四，应该成功', async () => {
    const res = await server
        .post('/api/profile/follow')
        .send({ userId: L_ID })
        .set('cookie', Z_COOKIE)
    expect(res.body.errno).toBe(0)
})

// 获取粉丝
test('获取李四的粉丝，应该有张三', async () => {
    const result = await getFans(L_ID)
    const { count, fansList } = result.data
    const hasUserName = fansList.some(fanInfo => {
        return fanInfo.userName === Z_USER_NAME
    })
    expect(count > 0).toBe(true)
    expect(hasUserName).toBe(true)
})

// 获取关注人
test('获取张三的关注人，应该有李四', async () => {
    const result = await getFollowers(Z_ID)
    const { count, followersList } = result.data
    const hasUserName = followersList.some(followerInfo => {
        return followerInfo.userName === L_USER_NAME
    })
    expect(count > 0).toBe(true)
    expect(hasUserName).toBe(true)
})

// 获取 at 列表
test('获取张三的 at 列表，应该有李四', async () => {
    const res = await server
        .get('/api/user/getAtList')
        .set('cookie', Z_COOKIE)
    const atList = res.body
    const hasUserName = atList.some(item => {
        // '昵称 - userName'
        return item.indexOf(`- ${L_USER_NAME}`) > 0
    })
    expect(hasUserName).toBe(true)
})

// 取消关注
test('张三取消关注李四，应该成功', async () => {
    const res = await server
        .post('/api/profile/unFollow')
        .send({ userId: L_ID })
        .set('cookie', Z_COOKIE)
    expect(res.body.errno).toBe(0)
})
