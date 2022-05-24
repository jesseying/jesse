const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	username : { type: String },
	// set 可以加载函数，此页用来加密密码
	password : {
		type: String,
		select: false,
		set(val) {
		return require('bcryptjs').hashSync(val, 10)
		}}
})

module.exports = mongoose.model('AdminUser',schema)
