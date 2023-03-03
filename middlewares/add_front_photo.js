async function add_front_photo(req, next){
    let randomNumber =  Math.floor(Math.random() * 1001);
    req.body.cover_photo = `https://picsum.photos/id/${randomNumber}/200/300`;
    next();
}