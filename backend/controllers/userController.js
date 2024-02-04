

const registerUser =  (req, res) => {
    if (!req.body.email){
        res.status(400)
        throw new Error("Please add an email");
    }
    else {
        console.log(req.body);
    }
    res.send("Register User")
};

module.exports = {
    registerUser,
}