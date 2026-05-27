const { User } = require("../db");

async function GetUsers(req, res) {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
          $options:"i"
        },
      },
      {
        lastname: {
          $regex: filter,
          $options:"i"
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      _id: user._id,
    })),
  });
  console.log(users)
  console.log(filter)
}

module.exports = GetUsers;
