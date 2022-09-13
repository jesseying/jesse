const {query} = require("express");
const assert = require("http-assert");
const jwt = require("jsonwebtoken");
const AdminUser = require("../../models/AdminUser");
const awthMiddleware = require("../../middleware/awth");
module.exports = app => {
	const jwt = require('jsonwebtoken')
	const assert = require('http-assert')
	const AdminUser = require('../../models/AdminUser')
	const express = require('express')
	const router = express.Router({
		mergeParams: true
	})
	
	const awthMiddleware = require('../../middleware/awth')
	const resourceMiddleware = require('../../middleware/resource')
	// 创建分类
	router.post('/',async(req,res)=> {
		const model = await req.Model.create(req.body)
		res.send(model)
	})
	
	// 更新分类
	router.put('/:id',async(req,res)=> {
		const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
		res.send(model)
	})
	
	// 删除分类
	router.delete('/:id',async(req,res)=> {
		await req.Model.findByIdAndDelete(req.params.id,req.body)
		res.send({
			success: true
		})
	})
	
	// 分类列表
	router.get('/',async(req,res)=> {
		let queryOptions = {}
		if (req.Model.modelName === 'Category') {
			queryOptions.populate = 'parent'
		}
		const items = await req.Model.find().setOptions(queryOptions).limit(100)
		res.send(items)
	})
	
	// 根据id获取单个分类
	router.get('/:id',async(req,res)=> {
		const model = await req.Model.findById(req.params.id)
		res.send(model)
	})
	
	// 全局路由设置
	app.use('/admin/api/rest/:resource', resourceMiddleware(), router)
	
	// 图片上传api
	const multer = require('multer')
	const upload = multer({dest: __dirname + '/../../uploads'})
	app.post('/admin/api/upload', upload.single('file'),async (req,res) => {
		const file = req.file
		file.url = `http://localhost:3000/uploads/${file.filename}`
		res.send(file)
	})
	
	// 登陆
	app.post('/admin/api/login', async(req, res)=> {
		const { username, password } = req.body
		// 根据用户名找用户
		const user = await AdminUser.findOne({ username }).select('+password')
		assert(user,422,'用户名不存在')
		// if (!user) {
		// 	return res.status(422).send({
		// 		message: '用户名不存在'
		// 	})
		// }
		// 校验密码
		const isValid = require('bcryptjs').compareSync(password, user.password)
		assert(isValid,422,'密码错误')
		// 返回token
		const token = jwt.sign({ id: user._id }, app.get('secret'))
		res.send({token})
	})
	
	// 错误处理
	app.use(async (err, req, res, next) =>{
		res.status(err.statusCode || 500).send({
			message: err.message
		})
	})
}
