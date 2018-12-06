// module.exports = function (pool) {

//     async function login(email, fullname, role, password) {
//         let checkEmail = await pool.query("select * from admin where email=$1", [email]);
//         let checkPassword = await pool.query("select * from admin where password = $2", [password]);

//         if (checkPassword.rowCount === 0) {
//             return {
//                 success:false
//             }
//         }
//     }
        
//     return {
//         login
//     }
// }