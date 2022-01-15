// // Constants
// const router = require('express').Router();
// const { User, Post, Comment, Tag } = require('../../models');

// // GET /api/tags findAll function
// router.get('/', (req, res) => {
    
//     Tag.findAll({
//        // Don't send back the password
//       // attributes: { exclude: ['password']}
//     })
//     .then(dbTagData => res.json(dbTagData))
//     .catch(err=> {
//         // Server error
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // GET /api/tags/1 get one tag by id
// router.get('/:id', (req, res) => {
//     Tag.findOne({
//         where: {
//           id: req.params.id
//         },
//         include: [
//           {
//             model: Post,
//             attributes: [
//               'id', 
//               'title',
//               'post_body',
//               'created_at'
//             ]
//           },
//           {
//             model: Comment,
//             attributes: [
//               'id', 
//               'comment_body',
//               'created_at'
//             ],
//             // Show which posts the users commented on
//             include: {
//               model: Post,
//               attributes: ['title']
//             }
//           },
//           {
//             model: Post,
//             attributes: ['title'],
          
//           }
//         ]
//       })
//         .then(dbTagData => {
//           if (!dbTagData) {
//             res.status(404).json({ message: 'No tag found with this id' });
//             return;
//           }
//           res.json(dbTagData);
//         })
//         .catch(err => {
//             // Server error
//           console.log(err);
//           res.status(500).json(err);
//         });
// });

// // POST /api/tags create a new tag
// router.post('/', (req, res) => {
//    // TODO: will need to adjust
//   Tag.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password
//   })
  
//     .then(dbUserData => {
//       req.session.save(() => {
//         req.session.user_id = dbUserData.id;
//         req.session.username = dbUserData.username;
//         req.session.loggedIn = true;

//         res.json(dbUserData);
//       });
//     })
//     .catch(err => {
//         // Server error
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


// // PUT /api/tag/1  Update a tag's info by id
// router.put('/:id', (req, res) => {
 
//   // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
//   Tag.update(req.body, {
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbTagData => {
//       if (!dbTagData[0]) {
//         res.status(404).json({ message: 'No tag found with this id' });
//         return;
//       }
//       res.json(dbTagData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


// // DELETE /api/tag/1 Delete post by ID
// router.delete('/:id', (req, res) => {
//     Tag.destroy({
//         where: {
//           id: req.params.id
//         }
//       })
//         .then(dbTagData => {
//           if (!dbTagData) {
//             res.status(404).json({ message: 'No tag found with this id' });
//             return;
//           }
//           res.json(dbTagData);
//         })
//         .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//         });
// });

// module.exports = router;