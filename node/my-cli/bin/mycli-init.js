#!/usr/bin/env node

const command = require('commander')
const path = require('path')
const fs = require('fs')
const ora = require('ora')
const glob = require('glob')
const downloadRepo = require('download-git-repo')
const inquirer = require('inquirer')
    // 静态站点生成 hexo readme.md -> html, css, js
const metalSmith = require('metalsmith')
const handlebars = require('handlebars')

const args = command.parse(process.argv).args
let projectName = args[0]
let list = glob.sync('*')
if (list.length) {
    if (list.filter(fileName => {
            return fileName === projectName
        }).length !== 0)
        console.log(`项目已存在${projectName}`)
}
go()

function go() {
    const loading = ora('正在下载项目').start()
    download()
        .then(() => {
            loading.succeed()
            return inquirer.prompt([{
                    name: 'projectName',
                    message: '项目名称',
                    default: projectName
                },
                {
                    name: 'css',
                    message: '使用 css 预处理器',
                    choices: ['less', 'stylus'],
                    default: 'less',
                    type: 'list'
                },
                {
                    name: 'router',
                    message: '使用 router?',
                    type: 'confirm'
                }
            ])
        })
        .then(meta => {
            console.log(meta)
            return new Promise((resolve, reject) => {
                // cwd   current work dir
                metalSmith(process.cwd())
                    .metadata(meta)
                    .clean(false)
                    .source(`${projectName}/.temp`)
                    .destination(`${projectName}`)
                    .use((file, metas, done) => {
                        // console.log(file)
                        const fileNames = Object.keys(file)
                        fileNames.forEach(fname => {
                            const content = file[fname].contents.toString()
                            const compliedContent = handlebars.compile(content)(meta)
                                // 替换
                            file[fname].contents = Buffer.from(compliedContent)
                        })
                        done()
                    })
                    .build((err) => {
                        if (!err) {
                            resolve()
                        } else {
                            reject()
                        }
                    })
            })
        })
        .then((res) => {

        })
        .catch((res) => {
            loading.fail()
            console.log(res);

        })
}

function download() {
    return new Promise((resolve, reject) => {
        downloadRepo('github:MengZhaoFly/my-cli-test#master', `${projectName}/.temp`, { clone: true },
            (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(`${projectName}/.temp`)
                }
            }
        )
    })
}