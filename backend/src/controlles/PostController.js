const path = require('path')
const fs = require('fs')

const sharp = require('sharp')

const Post = require('../models/Post')


module.exports = {


    async store(req, res){
        const {author, place, description, hastags} = req.body
        const {filename: image} = req.file

        await sharp(req.file.path)
            .resize(500)
            .jpeg({quality: 70})
            .toFile(
                path.resolve(req.file.destination, 'resized', image)
            )

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