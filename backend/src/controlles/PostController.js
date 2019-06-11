const Post = require('../models/Post')


module.exports = {


    async store(req, res){
        const {author, place, description, hastags} = req.body
        const {filename: image} = req.file

        const  post = await Post.create({
            author,
            place,
            description,
            hastags,
            image
        })
        return res.json(post)
    }


}