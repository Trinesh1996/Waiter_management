module.exports = function() {
    let pg = require("pg");
    let Pool = pg.Pool


let useSSL = false;

if (process.env.DATABASE_URL) {
    useSSL = true;
}

const connectionString = process.env.DATABASE_URL || 'postgresql://trinesh:Trinesh1997@@localhost:5432/WaiterManagementTests';

const pool = new Pool({
    connectionString
})
return pool;
}