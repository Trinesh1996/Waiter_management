let assert = require("assert");
let login = require("../src/services/login");
let adminServices = require("../src/services/adminServices");


const Connection = require('../config/testDb');

const pool = Connection();

let loginTest = login(pool);
let admin = adminServices(pool)


describe("admin Tests", async function () {
    beforeEach(async function () {
        await pool.query('DELETE from admin');
        await pool.query("DELETE from staff");
        await pool.query("ALTER SEQUENCE admin_id_seq RESTART 1;");         
        await pool.query("ALTER SEQUENCE staff_id_seq RESTART 1;");  

    })
    it("Should add new administrators to test database", async function () {
        await admin.addNewStaff('trinesh@gmail.com', 'Trinesh Chetty', 'admin', '1234')      

        assert.deepEqual(await admin.checkAdmin(), [ { id: 1,
            email: 'trinesh@gmail.com',
            fullname: 'Trinesh Chetty',
            role: 'admin',
            password: '1234' } ])
    })

    it ("Should add new Staff to test database", async function () {
        await admin.addNewStaff('John@gmail.com', 'John Mayaonnaise', 'Wait Staff', '54221');

        assert.deepEqual(await admin.checkStaff(), [ { id: 1,
            email: 'John@gmail.com',
            fullname: 'John Mayaonnaise',
            role: 'Wait Staff',
            password: '54221' }])
    })    
})

describe("login Tests", async function () {
    beforeEach(async function () {
        await pool.query('DELETE from admin');
        await pool.query("DELETE from staff");
        await pool.query("ALTER SEQUENCE admin_id_seq RESTART 1;");         
        await pool.query("ALTER SEQUENCE staff_id_seq RESTART 1;");  

    })

    it("Should validate the data from admin and staff", async function () {
        await admin.addNewStaff('Trinesh@gmail.com', 'Trinesh Chetty', 'admin', '54221');
        await admin.addNewStaff('Craig@gmail.com', 'Craig oBrien', 'Kitchen', '54221');


        // assert.deepEqual(await loginTest.login('Trinesh@gmail.com', 'admin'), true);




    })
})