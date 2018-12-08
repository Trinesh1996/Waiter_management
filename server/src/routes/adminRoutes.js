module.exports = function (adminReg) {

    async function registerAdmin (req, res) {  
        let adminData = req.body;
        console.log(adminData)
   
        try {  
            await adminReg.addNewStaff(adminData.email, adminData.name, adminData.role, adminData.password);
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
      
   
    }
}



