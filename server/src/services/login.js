module.exports = function (pool) {

    async function login(email, role, password) {      
        let adminEmail = await pool.query("SELECT email from admin where email = $1", [email]);
        let adminRole = await pool.query("SELECT role from admin where role = $1", [role]);
        let adminPassword = await pool.query("SELECT password from admin where password = $1", [password]);


        let valid

        // check email
        if (validateAdminEmail == email) {
            return true
        }
        else {
            return false
        }
        // let staffRole = await pool.query("SELECT role from staff where role = $1", [role]);
        // let adminRole = await pool.query("SELECT role from admin where role = $1", [role]);
        // let validStaffRole = staffRole.rows[0].role;
        // let validAdminRole = adminRole.rows[0].role;

        // // validate role
        // if (validStaffRole == role || validAdminRole == role) {
        //     return true
        // }
        // else {
        //     return false
        // }

    }

    async function checkAdmin() {
        let result = await pool.query("SELECT * FROM admin");
        return result.rows
    }

        
    return {
        login
    }
}