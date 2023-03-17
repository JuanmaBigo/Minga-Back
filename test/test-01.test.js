import app from '../app.js';
import chai from 'chai';
import request from 'supertest';

const expect = chai.expect;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTBmYjMzYTdiM2RiOWEyYjJlMDcwMyIsImlhdCI6MTY3ODg5MTAyNywiZXhwIjoxNjc5NDk1ODI3fQ.2EPdswt4HQQ9P37ALde_DLxy2LCetXred6EIsnyAJVg';
let manga = {
    title: 'test-01',
    cover_photo: 'https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg',
    description: 'descriptionn',
    category_id: '640a14875120e75dcbb365e1'
}

describe('Test /mangas', () => {
    it('POST api/mangas verificar que cover_photo es una url', async () => {

        expect(manga.cover_photo).include('https://');
        const response = await request(app).post('/api/mangas/')
            .set('Authorization', `Bearer ${token}`)
            .send(manga)
    })

    it('GET api/mangas verificar que se pasa token por headers', async () => {
        const response = await request(app).get(`/api/mangas/`)
            .auth(token, { type: 'bearer' });
        expect(response.request.header.Authorization).to.equal(`Bearer ${token}`);
    })

    it('POST api/mangas verificar que la respuesta devuelve "no autorizado" cuando no se pasa token', async () => {
        await request(app).post(`/api/mangas`)
            .send(manga)
            .expect(401);
    })

    it('GET api/mangas verificar que la respuesta tiene alguna propiedad con el array de objetos (mangas)', async () => {
        const response = await request(app).get(`/api/mangas`)
            .auth(token, { type: 'bearer' });
        expect(response.body).to.have.property('mangas');
    })
})

