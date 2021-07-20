const router = require('express').Router();
const User = require('../model/user_model')
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({ // notice you are calling the multer.diskStorage() method here, not multer()
    destination: function(req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname )
    }
});

const upload = multer({storage:storage});


//Retrieves all Posts
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Submits a Post
router.post('/', upload.single('avatar'), (req,res) => {
    console.log(req.body)
    console.log('avatar')
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status,
            avatar: req.file.originalname
        });
        user.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.json({message: err})
        })
    });

    //Retrieve specific Post
    router.route('/:postId').get(async (req, res) => {
        try{
            const existingUser = await User.findById(req.params.postId);
            res.json(existingUser)
        }catch(err){
            res.json({message: err})
        } 
    });

    //Delete specific Post
    router.delete('/:postId', async (req, res) => {
        try{
            const removedUser = await User.remove({_id: req.params.postId})
            res.json(removedUser)
        }catch(err){
            res.json({message: err})
        }
    });

    //Update a post
    router.patch('/:postId', async (req, res) => {
        
        try{
            const updatedPost = await User.updateOne({_id: req.params.postId}, 
                {$set: {name:req.body.name, email:req.body.email, status:req.body.status, gender:req.body.gender}}
                );
                res.send(updatedPost)
        }
        catch(err){
            res.json({message: err})
        }
    })



module.exports = router;