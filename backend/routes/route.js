const express = require('express');
const router = express.Router();

const Book = require('../models/books');


//retriving the books
router.get('/library', (req, res, next)=>{
    Book.find((err, books)=>{
        res.json(books);
    });
});

//add book
router.post('/library', (req, res, next)=>{
    console.log(req.body);
    let newBook = new Book({
        book_title: req.body.book_title,
        book_description: req.body.book_description
    });

    newBook.save((err, contact)=>{
        // console.log("In save");
        if(err){
            res.json({msg: "Failed to add book"});
            // res.send("Failed to add book");
        }
        else{
            res.json({msg: "Book added successfully"});
        }
    });
});

//delete book
router.delete('/library/delete/:id', (req, res, next)=>{
    Book.remove({_id: req.params.id},(err, result)=>{
        if(err){
            res.json({msg:"Error while deleting"});
            console.log("Failed to Deleted");
        }
        else{
            res.json({msg:"Deleted"});
            console.log("Deleted");
        }
    });
});

router.put('/library/updatebook/:id', (req,res)=> {
      var updatedBook = req.body;
      Book.updateOne({_id: req.params.id}, updatedBook, (err, result) => {
        if(err){
          res.json({msg:"Error while updating"});
          console.log("Failed to updating");
        }
        else{
          res.json({msg:"Updated successfully"});
          console.log("Updated successfully");
        }
      });
      
    });
// router.put('/updatebook', (req,res)=>{
//     console.log("Hello in update");
// } )



module.exports = router;