let assert = require("assert");
let login = require("../src/services/login");
let adminServices = require("../src/services/adminServices");


const Connection = require('../config/testDb');

const pool = Connection();

// let loginTest = login(pool);
let admin = adminServices(pool)


describe("admin Tests", async function () {
    beforeEach(async function () {
        await pool.query('DELETE from admin');
        await pool.query("DELETE from staff");
        await pool.query("ALTER SEQUENCE admin_id_seq RESTART 1;");         
        await pool.query("ALTER SEQUENCE staff_id_seq RESTART 1;");  

    })
    it("Should add new administrators to test database", async function () {
        await admin.addNewAdministrator('trinesh@gmail.com', 'Trinesh Chetty', 'Admin', '1234')      

        assert.deepEqual(await admin.checkAdmin(), [ { id: 1,
            email: 'trinesh@gmail.com',
            fullname: 'Trinesh Chetty',
            role: 'Admin',
            password: '1234' } ])
    })

    it ("Should add new Staff to test database", async function () {
        await admin.addStaff('John@gmail.com', 'John Mayaonnaise', 'Wait Staff', '54221');

        assert.deepEqual(await admin.checkStaff(), [ { id: 1,
            email: 'John@gmail.com',
            fullname: 'John Mayaonnaise',
            role: 'Wait Staff',
            password: '54221' }])
    })
    
})