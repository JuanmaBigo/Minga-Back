import app from "../app.js";
import chai from "chai";
import request from 'supertest'

const assert = chai.assert
const expect = chai.expect

describe( 'Test to chapters', () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTI2ZTNhODE3MzViZjk2YzFmN2RkOCIsImlhdCI6MTY3OTAwMjMwNCwiZXhwIjoxNjc5NjA3MTA0fQ.edFssM3XHOrx2qxO6kmEGqH3qBoFTI2GknxmP40eh94'

    it( 'POST api/mangas verify that pages is a strings array', async () => {
        const chapter = {
            manga_id: '640a148c5120e75dcbb36607',
            title: 'test chapter',
            cover_photo: 'https://i.postimg.cc/Nj4bXyr2/main-shingeki-no-kyojin.png',
            pages: ['https://i.postimg.cc/jScjzvjQ/alice-in-borderland-002-01.jpg','https://i.postimg.cc/rppwgW06/alice-in-borderland-002-02.jpg','https://i.postimg.cc/pd1XSTzm/alice-in-borderland-002-03.jpg','https://i.postimg.cc/VLjvNzQh/alice-in-borderland-002-04.jpg','https://i.postimg.cc/8zN5JxTz/alice-in-borderland-002-05.jpg','https://i.postimg.cc/vBgHwst3/alice-in-borderland-002-06.jpg','https://i.postimg.cc/Bb2StByF/alice-in-borderland-002-07.jpg','https://i.postimg.cc/nzyVHPdZ/alice-in-borderland-002-08.jpg','https://i.postimg.cc/G3DhMb2p/alice-in-borderland-002-09.jpg','https://i.postimg.cc/9FjXKsRY/alice-in-borderland-002-10.jpg','https://i.postimg.cc/X7cNbx9S/alice-in-borderland-002-11.jpg','https://i.postimg.cc/rwVVFW9d/alice-in-borderland-002-12.jpg','https://i.postimg.cc/9M7VNBck/alice-in-borderland-002-13.jpg','https://i.postimg.cc/6pM973HM/alice-in-borderland-002-14.jpg','https://i.postimg.cc/TPSf9svm/alice-in-borderland-002-15.jpg','https://i.postimg.cc/bvdq1hWp/alice-in-borderland-002-16.jpg','https://i.postimg.cc/j2YKVJ5S/alice-in-borderland-002-17.jpg','https://i.postimg.cc/Kj7bmvkr/alice-in-borderland-002-18.jpg','https://i.postimg.cc/SQck6VT2/alice-in-borderland-002-19.jpg','https://i.postimg.cc/X733QFm2/alice-in-borderland-002-20.jpg','https://i.postimg.cc/BQg3ybGJ/alice-in-borderland-002-21.jpg','https://i.postimg.cc/Jzz8W81Z/alice-in-borderland-002-22.jpg','https://i.postimg.cc/Mp3S6LT4/alice-in-borderland-002-23.jpg'],
            order: 12
        }

        expect(chapter.pages).to.be.a('array')
        chapter.pages.forEach( page => assert.isString(page))

        const response = await request(app)
        .post('/api/chapters/')
        .send(chapter)
        .auth(token, { type: 'bearer'})

        assert.equal(response.status, 201)
    })

})