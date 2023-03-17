import app from '../app.js'
import chai from 'chai'
import request from 'supertest'
import mongoose from 'mongoose';

const assert = chai.assert
const expect = chai.expect
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGU2YTczYWUzMDcxYjQxYTBiMTFkOSIsImlhdCI6MTY3ODk4NzA0MiwiZXhwIjoxNjc5NTkxODQyfQ.dPKZfxUw8u2fKjLfbcn2kq0sDA3Tw1HXaLz5dAuMjR4'
const validId = '640a148f5120e75dcbb36622'


/**
 * REQ-TEST
    GET api/mangas/:id verificar que el id enviado por params es un objectid	
    GET api/mangas/:id verificar que se pasa token por headers	
   RES-TEST
    GET api/mangas/:id verificar que la respuesta tiene alguna propiedad con el objeto (manga)	
    GET api/mangas verificar que la respuesta devuelve un status 404 cuando no encuentra el manga	
 */

describe('API tests (REQ-RES)',() =>{

    it('GET a / api/mangas/:id verificar que el id enviado por params es un objectid',async()=>{
       // Validar que el id tenga el formato correcto
       const isValid = mongoose.Types.ObjectId.isValid(validId);
       expect(isValid).to.be.true;   
       // Hacer una petición GET con el id válido
       const response = await request(app).get(`/api/mangas/${validId}`)
           .set('Authorization', `Bearer ${token}`) // Pasar el token por headers
    })

    it(' GET api/mangas/:id verificar que se pasa token por headers	',async()=>{
        // Hacer una petición GET con el id y el token válidos
        const response = await request(app).get(`/api/mangas/${validId}`)
            .auth(token,{type:'bearer'}) // Enviar el token en el header Authorization
            assert.equal(response.request._header.authorization,`Bearer ${token}`)
           
    })

    it('GET api/mangas/:id verificar que la respuesta tiene alguna propiedad con el objeto (manga)	',async()=>{
        const response = await request(app).get (`/api/mangas/640a148f5120e75dcbb36622`).auth(token,{type:'bearer'})
        expect(response.body).to.have.property('manga')//se valida si lo que viene por el res contiene la propiedad manga 
    })

    it('GET api/mangas verificar que la respuesta devuelve un status 404 cuando no encuentra el manga',async()=>{
        const response = await request(app).get (`/api/mangas?title=sdgsg`).auth(token,{type:'bearer'}).expect(404)//se le esta enviando un id que no existe para verificar que devuelve status 404
    })
    
})
