var mongoose = require('mongoose')
// 聊天记录模型
var SettingSchema = new mongoose.Schema({
  board: String,
  changeToDay3: String,
  reference: Number,
  day1_resource: Array,
  day1_pizzle: Array,
  day3_land: Array,
  day3_resource: Array
})

module.exports = SettingSchema
