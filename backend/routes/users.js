const router = require('express').Router();
const User = require('../model/user_model')


//Retrieves all Posts
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Submits a Post
router.post('/', (req,res) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status
        });
        user.save()
        .then(data => {
            res.json(data);
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
        id = req.params.postId;
        try{
            const updatedUser = await User.findByIdAndUpdate(
                id, req.body, {useFindAndModify:false});
            res.json(updatedUser)
        }catch{

        }
    })

module.exports = router;