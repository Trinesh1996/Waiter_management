const Joi = require('joi');

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        console.log(req.body);

        const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                res.status(400).send( {
                    error: 'Please provide a valid email address'
                })
                break

                case 'password':
                res.status(400).send( {
                    error: `
                    The password provided does not match the built in rules`
                })
                break
                default:
                res.status(400).send( {
                    error: "Invalid Registration information"
                })
                
            }
        }
        else {
            next();

        }
     
    }
}