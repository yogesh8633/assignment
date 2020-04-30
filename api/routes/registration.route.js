// blog .route.js
const express = require('express');
const app = express();

const registrationRoutes = express.Router();
let registrationModel=require('../models/registrationmodel');

let loginModel=require('../models/loginmodel');


registrationRoutes.route('/register').post(function (req, res) {
  let registration = new registrationModel(req.body);
  registration.save()
    .then(registration => {
      res.status(200).json({'registration':'registration has been successfully done'});
    })
    .catch(err => {
    res.status(400).send("unable to register");
    });
});

registrationRoutes.route('/login').post(function (req, res) {
  loginModel.find({
    factomaniaId : req.body.factomaniaId, password : req.body.password
		}, function(err, user){
      if(err) throw err;
			if(user.length){	
				return res.status(200).json({
					status: 'success',
					data: user
				})
			} else {
				return res.status(200).json({
					status: 'fail',
          message: 'Login Failed',
				})
			}
			
		})
});

registrationRoutes.route('/login/create').post(function (req, res) {

  let login = new loginModel(req.body);
  login.save()
    .then(login => {
      res.status(200).json({'login':'login has been created '});
    })
    .catch(err => {
    res.status(400).send("unable to create login");
    });
});

registrationRoutes.route('/').get(function (req, res) {
  registrationModel.find(function (err, blogs){
    if(err){
      console.log(err);
    }
    else {
      res.json(blogs);
    }
  });
});

registrationRoutes.route('/user/:id').get(function (req, res) {
  console.log(req.params.id)
  registrationModel.findById({factomaniaId:req.params.id}, function (err,user){
    if (!user)
      res.status(404).send("Record not found");
    else{
    return res.status(200).json({
      status: 'success',
      data: user
    })
  }
  });
});



// Defined update route
// blogRoutes.route('/update/:id').post(function (req, res) {
//   blogmodel.findById(req.params.id, function(err, blogmodel) {
//     if (!blogmodel)
//       res.status(404).send("Record not found");
//     else {
//       blogmodel.BlogTitle= req.body.BlogTitle;
//       blogmodel.BlogDescription = req.body.BlogDescription;
//       blogmodel.Author = req.body.Author;
//       blogmodel.AuthorDescription=req.body.AuthorDescription

//       blogmodel.save().then(blogmodel => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

// Defined delete | remove | destroy route
// registrationRoutes.route('/delete/:id').get(function (req, res) {
//     blogmodel.findByIdAndRemove({_id:req.params.id}, function(err,blog){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });
module.exports = registrationRoutes;