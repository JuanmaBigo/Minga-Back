async function add_front_photo(req, res, next){
    let randomNumber =  Math.floor(Math.random() * 1001);
    req.body.cover_photo = `https://picsum.photos/id/${randomNumber}/200/300`;
    return next();
}

export default add_front_photo;