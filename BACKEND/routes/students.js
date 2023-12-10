//step 9
const express = require('express');
const router = express.Router();
let Student = require("../models/Student");

//step 10:Create
router.route("/add").post((req, res) => {
    const name = req.body.name;
    /*casting is done here*/
    const age = Number(req.body.age);
    /*casting over*/
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    });

    newStudent.save().then(() => {
        res.send("Student added successfully");
    }).catch((err) => {
        console.log(err);

    })
})

//display
router.route("/display").get((req, res) => {
    //findById is used for 1student

    Student.find().then((student) => {
        res.json(student)


    }).catch((err) => {
        console.log(err)
    })
})

//update
router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    //dstructure method
    const { name, age, gender } = req.body;
    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(() => {
        res.status(200).send({ status: "User updated", user: update })
    }).catch((err) =>
        //we use error number 500 as the server error

        res.staying(500).send({ status: "error with updating data" }))



})
//delete



router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;
    await Student.findByIdAndDelete(userId).then(() => {

        res.status(200).send({ status: "User deleted" });

    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete user", error: err.message });


    })
});


//get data from 1 user
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    await Student.findById(userId).then(() => {

        res.status(200).send({ status: "user fetched", user: user });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "error with the getuser", error: err.message });
    })
})


module.exports = router;