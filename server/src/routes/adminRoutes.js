module.exports = function (adminReg) {

    async function registerAdmin (req, res) {  
        let adminData = req.body;
   
        try {  
            await adminReg.addNewAdministrator(adminData.email, adminData.name, adminData.role, adminData.password);
            res.send( {
                message: `Hello ${req.body.name}! you have been registered onto the system`
            })
        }
        catch(err) {
            console.log(err)
        }
    }

    async function registerStaff (req, res) {  
        let adminData = req.body;
   
        try {  
            await adminReg.addStaff(adminData.email, adminData.name, adminData.role, adminData.password);
            res.send( {
                message: `Hello ${req.body.name}! you have been registered onto the system`
            })
        }
        catch(err) {
            console.log(err)
        }
    }


    return  {    
        registerAdmin,
        registerStaff
   
    }
}



