module.exports = function (logMe) {

    async function login (req, res) {  
        const {email, role, password} = req.body;      
   
        try {
            await logMe.login(email, role, password);            
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