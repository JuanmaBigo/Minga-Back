import app from '../app.js'
import chai from 'chai'
import request from 'supertest'

const assert = chai.assert
const expect = chai.expect

describe('Prueba sobre/mangas y user',() =>{

    it('Get a /mangas debe traerme 6',async() =>{
        const response =await request(app).get('/api/mangas')
        assert.equal(response.body.mangas.length,6)
    })

    it('Post a /user deberia crear un usuario',async() =>{
        const user = {
            name:'johanZ',
            mail: "alejandro59@mh.com.ar",
            password: "123456789",
            photo: "https://i.postimg.cc/fyJsspq8/image.png"
        }

        const response = await request(app).post('/api/auth/signup').send(user)
        assert.equal(response.body.success,true)
    })


})