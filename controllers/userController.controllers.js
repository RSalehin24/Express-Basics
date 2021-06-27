const getRegister = (req, res) => {
    res.sendFile("register.html", {root:"./views/users"});
};

const postRegister = (req, res) =>{
    //const username =req.body.username;
     //const email = req.body.email;
     //res.send(`user with Email: ${email} and username: ${username} is requesting to register.`);
     res.redirect("/dashboard");   
}

const getLogin = (req, res) =>{
    const id = req.query.id;
     const username = req.query.username;
     res.send(`user with ID - ${id} and Username ${username} is requesting login.`);
};

const getDashBoard = (req, res) => {
    res.send(`User Dashboard`);
}

module.exports = {getRegister, postRegister, getLogin, getDashBoard};