module.exports = function (pool) {

    async function addNewAdministrator(email, fullname, role, password) {
 
            await pool.query("INSERT INTO admin (email, FullName, role, password) values ($1, $2, $3, $4)", [ email,fullname,role,password]);
    }
    return {
        addNewAdministrator
    }
}