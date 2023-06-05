function getAllUsers (request, response) {
 return response.send("get all users API");
}

function createUser (request, response) {
    return response.send("post create user data");
   }

function updateUser(request, response) {
    return response.send("update user data");

}

function deleteUser(request, response) {
    return response.send("delete user data");

}
module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser

}