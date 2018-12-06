module.exports = function (adminReg) {

    async function login (req, res) {  
        let adminData = req.body;
   
        try {  
            await adminReg.login(adminData.email, adminData.name, adminData.role, adminData.password);
            res.send( {
                message: `Hello ${req.body.name}! you have been logged into the system`
            })
        }
        catch(err) {
            console.log(err)
        }
    }
    return {
        login
    }



}