const express = require("express")
const bodyParser = require("body-parser")
const flash = require("express-flash")
const cors = require("cors")
const pg =  require("pg")
const Pool = pg.Pool
const axios = require('axios')


let AdminRegistration = require("./services/adminServices");
let AdminRegistrationRoutes = require("./routes/adminRoutes");


// login
let login = require("./services/login");
let loginRoute = require("./routes/loginRoute");



let app = express();
let PORT = process.env.PORT || 3015;

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
  useSSL = true
}

const connectionString = process.env.DATABASE_URL || 'postgresql://trinesh:Trinesh1997@@localhost:5432/WaiterManagement';
const pool = new Pool({
    connectionString,
    ssl: useSSL
  })


const adminServices = AdminRegistration(pool);
const adminRoutes = AdminRegistrationRoutes(adminServices);

const loginPool = login(pool)
const loginRoutes = loginRoute(loginPool)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());
app.use(flash());

app.get('/adminlogin', (req, res) => {   
    res.send( [{
        email: "trinesh@gmail.com",
        name: "Trinesh",
        role: "Wait Staff",
        password: "1234"
    }])   
});



app.post('/register', adminRoutes.registerAdmin);
app.post('/login', loginRoutes.login);
   



app.listen(PORT, function () {
    console.log('App starting on port', PORT)
  });