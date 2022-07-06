const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PostModel = require('./models/Posts');


app.use(cors());
//middleware to receive JSON data
app.use(express.json());


//DATABASE CONNECTION
mongoose.connect(
    "mongodb://127.0.0.1:27017/anonymousForumn?readPreference=primary&appname=MongoDB%20Compass&ssl=false", 
    { useNewUrlParser: true,
    useUnifiedTopology: true
     }
);

app.post('/addPost', async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const like = req.body.like;

    const post = new PostModel({name: name, postDescription: description, like: like});
    await post.save()
    res.send(post)
}), 

app.get("/read", async (req, res) => {
    PostModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }else{
            res.send(result)
        }
    });
})

app.put("/addLike", async (req, res) => {
    const newLike = req.body.newLike;
    const id = req.body.id;

    try {
        await PostModel.findById(id, (error, postToUpdate) => {
            postToUpdate.like = Number(newLike);
            postToUpdate.save();
        }).clone() 
    } catch(err) {
        console.log(err);
    }
    
    res.send("updated");
});
app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    await PostModel.findByIdAndDelete(id).exec()
    res.send('itemDeleted')
})

app.listen(4000, () => {
    console.log("running on port 4000")
});