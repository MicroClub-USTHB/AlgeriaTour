import User from "../models/user.js";


export async function getAllUsers(req, res) {
  try{
    const users = await User.find(req.query);
  return res.status(200).json(users);
  }catch(err){
    console.error(err);
    return res.status(500).json({error:"Error getting users"});
  }
}

export async function getUserById(req, res) {
    try{
        const user = await User.findById(req.params.id);
        if (!user) {
          return res.status(404).json({
            message: "user not found",
          });
        }
      
        return res.json(user);
      }catch(err){
        console.error(err);
        return res.status(500).json({error:"Error getting user"});
      }

}
export async function updateUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }
    const { lastName, firstName, email } = req.body;

    if (!lastName || !firstName|| !email) {
      return res.status(400).json({
        message: "you must provide any value",
      });
    }

   const updatedUser= await User.findByIdAndUpdate(req.params.id, {
        lastName:lastName || user.lastName,
        firstName: firstName || user.firstName,
      email: email || user.email,
    });

    return res.status(200).json({message: "user updated " ,data:updatedUser});
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Error updating user" });
  }
}
export async function deleteUser(req, res) {
  try {

    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({
          message: "user not found",
        });
      }
     await User.findByIdAndRemove(req.params.id);

   return res.status(404).json({ route: "User deleted" });
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Error deleting User" });
  }
}
