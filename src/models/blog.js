const db = require('../db/data')
const shortId = require('shortid')

function getAll() {
  return db
}

function getOne(id){
  let response
  let error = []
  let data = db.find(element => element.id == id)
  if (!data){
    error.push('There was an error')
    response = {error}
  } else {
    response = data
  }
  return response
}

function create(input){
  let response
  let error
  let title = input.title
  let content = input.content

  let newBlog = { title, content }

  newBlog.id = shortId()

  db.push(newBlog)
  response = newBlog
  return response
}

function update(input, id){
  let data = db.find(element => element.id === id)
  let index = db.indexOf(data)

  let title = input.title
  let content = input.content

  db[index].title = title
  db[index].content = content

  let returnValue = db[index]
  return returnValue
}

function remove(id){
  let data = db.find(element => element.id === id)
  let index = db.indexOf(data)
  db.splice(index, 1)
  return data
}

module.exports = {getAll, getOne, create, update, remove}
