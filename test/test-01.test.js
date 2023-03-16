import app from '../app.js';
import chai from 'chai';
import request from 'supertest';

const assert = chai.assert;
const expect = chai.expect;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTBmYjMzYTdiM2RiOWEyYjJlMDcwMyIsImlhdCI6MTY3ODg5MTAyNywiZXhwIjoxNjc5NDk1ODI3fQ.2EPdswt4HQQ9P37ALde_DLxy2LCetXred6EIsnyAJVg'
// REQ-TEST
// POST api/mangas verificar que cover_photo es una url	
// GET api/mangas verificar que se pasa token por headers	

describe('Test /mangas', () => {
    it('POST api/mangas verificar que cover_photo es una url', async () => {
        const response = await request(app).post('/api/mangas/')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'test',
                cover_photo: 'https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg',
                description: 'descriptionn',
                company_id: 'test'
            })
            console.log(response.body)
            // .expect(400)
        // expect(response.body).to.have.property('success').that.is.a('boolean').that.is.false
    })


})
