import Category from '../Category.js'
import 'dotenv/config.js'
import '../../config/database.js'


    let categories = [
        {
            name: "shonen",
            details: "Shonen manga are characterized by having a lot of action and often humorous situations with male protagonists.",
            admin_id: "64009bdd1ebe1a91439b11cb"
        },{
            name: "manhwa",
            details: "The Manhwa is from South Korea and is read in the same direction as western books (horizontally and from left to right).",
            admin_id: "64009bdd1ebe1a91439b11cb"
        },{
            name: "marvel",
            details: "American superhero comics",
            admin_id: "64009bdd1ebe1a91439b11cb"
        },{
            name: "dc",
            details: "American superhero comics",
            admin_id: "64009bdd1ebe1a91439b11cb"
        },{
            name: "shojo",
            details: "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
            admin_id: "64009bdd1ebe1a91439b11cb"
        },{
            name: "seinen",
            details: "Japanese seinen tells stories with a mature tone.",
            admin_id: "64009bdd1ebe1a91439b11cb"
        }
    ];

Category.insertMany(categories)
