const models = require('../models/blog')

function getAll(req, res, next){
  let data = models.getAll()
  res.send({data})
}

function getOne(req,res, next){
  let id = req.params.id
  let data = models.getOne(id)
  if (data.error) return next({status: 404, message: 'Id Not Found, Fool'})
  res.send({data})
}

function create(req, res, next){
  let data = models.create(req.body)
  if(data.error) return next({status: 404, message: 'you need a title, description, firstname and lastname'})

  res.status(201).send({data})
}

function update(req, res, next){
  let id = req.params.id
  let getOne = models.getOne(id)
  if (getOne.error) return next({status: 404, message: 'Id Not Found, Fool'})

  let data = models.update(req.body, id)

  if(data.error) return next({status: 404, message: 'you need a title, description, and writers'})

  res.send({data})
}

function remove(req, res, next){
  let id = req.params.id
  let getOne = models.getOne(id)
  if (getOne.error) return next({status: 404, message: 'Id Not Found, Fool'})
  let data = models.remove(id)
  res.status(204).send()
}

module.exports = {getAll, getOne, create, update, remove}
