const Users = require('../models/Users')
const consola = require('consola')

const getAllUser = async (req, res, next) => {
  let users = await Users.find({})
  res.status(200).json(users);
}

const createUser = async (req, res, next) => {
  let newUser = await new Users(req.body).save();
  consola.success('UserController: createUser: newUser: ',newUser)
  res.status(201).json(newUser);
}

const getUserById = async (req, res, next) => {
  let user = await Users.findById(req.params.id)
  res.status(200).json(user)
}

const delUserById = async (req, res, next) => {
  let result = await Users.findByIdAndDelete(req.params.id)
  res.status(200).json({
    result, 
    success: true
  })
}

const replaceUserById = async (req, res, next) => {
  let result = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.status(200).json({
    result,
    success: result ? true : false
  })
  
}

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  replaceUserById,
  delUserById
}