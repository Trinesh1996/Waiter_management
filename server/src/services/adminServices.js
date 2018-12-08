module.exports = function (pool) {

    async function addNewStaff(email, fullname, role, password) {

        if (role == 'admin') {
            await pool.query("INSERT INTO admin (email, FullName, role, password) values ($1, $2, $3, $4)", [email,fullname,role,password]);
        }
        else {
            await pool.query("INSERT into staff (email, FullName, role, password) values ($1, $2, $3, $4)", [email,fullname,role,password])

        }
        
    }

    async function checkAdmin() {
        let result = await pool.query("SELECT * from admin");
        return result.rows
    }

   

    async function checkStaff() {
        let result = await pool.query("SELECT * from staff");
        return result.rows
    }


    return {
        addNewStaff,
        checkAdmin,
        checkStaff
    }
}