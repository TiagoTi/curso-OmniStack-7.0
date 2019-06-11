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
    },


    async index(req, res){
        const posts = await Post.find().sort('-createdAt')
        return res.json(posts)
    }
}