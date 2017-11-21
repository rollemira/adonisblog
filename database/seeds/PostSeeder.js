'use strict'

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class PostSeeder {
  async run () {
    await Database.insert({title: 'Post One', body: 'Body for post One'}).into('posts')
    await Database.insert({title: 'Post Two', body: 'Body for post Two'}).into('posts')
    await Database.insert({title: 'Post Three', body: 'Body for post Three'}).into('posts')
  }
}

module.exports = PostSeeder
