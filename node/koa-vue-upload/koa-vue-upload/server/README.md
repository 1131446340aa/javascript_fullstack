## BFF
Backend For Frontend  服务于前端的后端
fe: api ->> Rd
1. api -> userCenter
2. api -> orderCenter

// 速度到达 理论上限
api ->>> node ->>> Rd

## 工具
cli
发布上线

## 美化input file按钮
隐藏原本的按钮  用一个全新的按钮点击事件手动调用file按钮的点击事件
handleUpload() {
  document.querySelector('.hidden').click()
}
## 预览图片
用一个方法绑定input file的change事件, 获取事件上传的文件  event.target.files[0]
将图片以base64方式编码
const fileReader = new FileReader()
fileReader.readAsDataURL(file)
编码完成后将编码结果读取到
fileReader.onload = () => {
  this.imgSrc = fileReader.result
}
## 阻止submit默认跳转
阻止表单submit默认事件  阻止页面跳转
form.addEventListener('submit', (event) => {
  event.preventDefault()