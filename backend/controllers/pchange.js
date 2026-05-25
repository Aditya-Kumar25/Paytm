const {User} = require("../db")

async function Update(req,res){
    const { firstanme ,lastname ,username, email , password} = req.body;

    const updatedUser = await User.findByIdAndUpdate(

            req.userId,

            req.body,

            { new: true }

        );

    if(!updatedUser){
        return res.status(404).json({
            msg:"User not found"
        })
    }

    return res.status(200).json({
        msg:"Succesfully updated",
        user:updatedUser
    })
}

module.exports = Update;
