const router = require('koa-router')()
const userServies = require('../controllers/mySqlConfig.js')
router.prefix('/users') // 路由前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async (ctx, next) => {
  await userServies.getAllusers().then((res) => {
    console.log(res)
    ctx.body = res
  })
})
//登录
router.post('/userLogin', async (ctx, next) => {
  var _username = ctx.request.body.username
  var _userpwd = ctx.request.body.userpwd

  await userServies.userLogin(_username, _userpwd)
    .then((res) => {
      let r = '';
      console.log(res)
      if (res.length) {
        r = 'ok';
        let result = {
          id: res[0].id,
          nickname: res[0].nickname,
          username: res[0].username
        }
        ctx.body = {
          code: 200,
          data: result,
          mess: '登录成功'
        }
      } else {
        r = 'error';
        ctx.body = {
          code: '404',
          data: r,
          mess: '账号或密码错误'
        }
      }
    })
    .catch((err) => {
      ctx.body = {
        code: '500',
        data: err
      }
    })
})
router.post('/findNoteListBytype', async (ctx, next) => {
  let note_type = ctx.request.body.note_type
  await userServies.findNoteListByType(note_type).then(async (res) => {
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: 200,
        data: res,
        mess: '查找成功'
      }
    }
    else {
      r = 'error',
        ctx.body = {
          code: '404',
          data: r,
          mess: '查找失败'
        }
    }
  }).catch(err => {
    ctx.body = {
      code: '500',
      data: err

    }
  })
})
//注册
router.post('/userRegister', async (ctx, next) => {
  let nickname = ctx.request.body.nickname
  let username = ctx.request.body.username
  let userpwd = ctx.request.body.userpwd
  if (!userpwd || !username || !nickname) {
    ctx.body = {
      code: '80000',
      mess: '账号，密码，昵称不能为空'
    }
  }
  let user = {
    nickname: nickname,
    username: username,
    userpwd: userpwd

  }
  await userServies.findUser(user.nickname).then(async (res) => {
    console.log(res);
    if (res.length) {
      try {
        throw Error('用户名已经存在')
      } catch (error) {
        console.log(error);

      }
      ctx.body = {
        code: "80003",
        mess: "用户名已存在"
      }
    }
    else {
      await userServies.insertUser([user.nickname, user.username, user.userpwd]).then(
        res => {
          console.log(res);
          let r = ''
          if (res.affectedRows !== 0) {
            r = 'ok',
              ctx.body = {
                code: "200",
                data: r,
                mess: "注册成功"
              }
          }
          else {
            r = 'error',
              ctx.body = {
                code: "500",
                data: r,
                mess: "注册失败"
              }
          }

        }
      ).catch(
        err => {
          ctx.body = {
            code: "500",
            data: err,

          }
        }
      )
    }
  })
})
//根据id查找笔记详情的接口
router.post('/findNoteDetailByid',async(ctx,next)=>{
  let id=ctx.request.body.id
  await userServies.findNoteDetailByid(id).then(
    async(res)=>{
      let r=''
      if(res.length){
        r='ok'
        ctx.body={
          code:'200',
          data:res[0],
          mess:"查找成功"
        }
      }
      else{
        r='error'
        ctx.body={
          code:'404',
          data:r,
          mess:"查找失败"
        }
      }
    }
  ).catch(error=>{
    ctx.body={
      code:'80000',
      data:error
    }
  })
})
module.exports = router

