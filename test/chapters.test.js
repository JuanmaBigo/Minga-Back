import app from "../app.js";
import chai from "chai";
import request from 'supertest'

const assert = chai.assert
const expect = chai.expect

describe( 'Test to chapters', () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThmY2VkMmM4MDZmNDRiOGRmYTYxNiIsImlhdCI6MTY3OTQ5NzIwOSwiZXhwIjoxNjgwMTAyMDA5fQ.JTOOPzIVWgid61z-rCBIK1Q7CtKuDpJ0Q8gKYWvzDkY'

    it( 'REQ-TEST: POST api/chapters verify that pages is a strings array', async () => {
        const chapter = {
            manga_id: '6418fcee2c806f44b8dfa652',
            title: 'test chapter',
            cover_photo: 'https://i.postimg.cc/Nj4bXyr2/main-shingeki-no-kyojin.png',
            pages: ['https://i.postimg.cc/jScjzvjQ/alice-in-borderland-002-01.jpg','https://i.postimg.cc/rppwgW06/alice-in-borderland-002-02.jpg','https://i.postimg.cc/pd1XSTzm/alice-in-borderland-002-03.jpg','https://i.postimg.cc/VLjvNzQh/alice-in-borderland-002-04.jpg','https://i.postimg.cc/8zN5JxTz/alice-in-borderland-002-05.jpg','https://i.postimg.cc/vBgHwst3/alice-in-borderland-002-06.jpg','https://i.postimg.cc/Bb2StByF/alice-in-borderland-002-07.jpg','https://i.postimg.cc/nzyVHPdZ/alice-in-borderland-002-08.jpg','https://i.postimg.cc/G3DhMb2p/alice-in-borderland-002-09.jpg','https://i.postimg.cc/9FjXKsRY/alice-in-borderland-002-10.jpg','https://i.postimg.cc/X7cNbx9S/alice-in-borderland-002-11.jpg','https://i.postimg.cc/rwVVFW9d/alice-in-borderland-002-12.jpg','https://i.postimg.cc/9M7VNBck/alice-in-borderland-002-13.jpg','https://i.postimg.cc/6pM973HM/alice-in-borderland-002-14.jpg','https://i.postimg.cc/TPSf9svm/alice-in-borderland-002-15.jpg','https://i.postimg.cc/bvdq1hWp/alice-in-borderland-002-16.jpg','https://i.postimg.cc/j2YKVJ5S/alice-in-borderland-002-17.jpg','https://i.postimg.cc/Kj7bmvkr/alice-in-borderland-002-18.jpg','https://i.postimg.cc/SQck6VT2/alice-in-borderland-002-19.jpg','https://i.postimg.cc/X733QFm2/alice-in-borderland-002-20.jpg','https://i.postimg.cc/BQg3ybGJ/alice-in-borderland-002-21.jpg','https://i.postimg.cc/Jzz8W81Z/alice-in-borderland-002-22.jpg','https://i.postimg.cc/Mp3S6LT4/alice-in-borderland-002-23.jpg'],
            order: 13
        }

        expect(chapter.pages).to.be.a('array')
        chapter.pages.forEach( page => assert.isString(page))

        const response = await request(app)
        .post('/api/chapters/')
        .send(chapter)
        .auth(token, { type: 'bearer'})

        assert.equal(response.status, 201)
    })

    it( 'REQ-TEST: GET api/chapters verify that token through by header', async () => {
        
        const response = await request(app)
        .get('/api/chapters/')
        .auth(token, { type: 'bearer'})
        
        expect(response.request.header.Authorization).to.equal(`Bearer ${token}`)
    } )

})