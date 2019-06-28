var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server="localhost:3000";
let should = chai.should();



chai.use(chaiHttp);
describe("User", function(){
    describe ("ALL USERS", function(){
        it("should show all", done=>{
            console.log ("show all data in db.")
            chai.request(server)
                .get("/users/")
                .send({})
                .end((err,res)=>{
                    //console.log (res)
                    // console.log("err",err);
                    res.should.have.status(200);
                    console.log("Response Body:", res.body);
                    // console.log (result);
                    done()
                })
        })
    })
});

describe('/POST user', () => {
    it('it should not POST a user without email field', (done) => {
        let user = {
            "name": "J.R.R. Tolkien",
            "email": "test@test.test",
            "isFormateur": true
        }
        chai.request(server)
            .post('/users')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('email');

                done();
            });
    });

});

describe('/POST user', () => {
    it('it should not POST a user without name field', (done) => {
        let user = {
            "name": "J.R.R. Tolkien",
            "email": "test@test.test",
            "isFormateur": true
        }
        chai.request(server)
            .post('/users')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name');

                done();
            });
    });

});

describe('/POST user', () => {
    it('it should not POST a user without isFormateur field', (done) => {
        let user = {
            "name": "J.R.R. Tolkien",
            "email": "test@test.test",
            "isFormateur": true
        }
        chai.request(server)
            .post('/users')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('isFormateur');

                done();
            });
    });

});


describe("Session", function(){
    describe ("ALL Session", function(){
        it("should show all", done=>{
            console.log ("show all data in db.")
            chai.request(server)
                .get("/sessions/")
                .send({})
                .end((err,res)=>{
                    //console.log (res)
                    // console.log("err",err);
                    res.should.have.status(200);
                    console.log("Response Body:", res.body);
                    // console.log (result);
                    done()
                })
        })
    })
});

describe('/POST session', () => {
    it('it should not POST a Session without formateur field', (done) => {
        let user = {
            "formateur": "5d15e4957c21ac4bfc21bb76",
            "eleve": ["5d15e4957c21ac4bfc21bb75", "5d15e49e7c21ac4bfc21bb74"],
            "title": "title"
        }
        chai.request(server)
            .post('/sessions')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('formateur');

                done();
            });
    });

});

describe('/POST session', () => {
    it('it should not POST a Session without eleve field', (done) => {
        let user = {
            "formateur": "5d15e4957c21ac4bfc21bb76",
            "eleve": ["5d15e4957c21ac4bfc21bb75", "5d15e49e7c21ac4bfc21bb74"],
            "title": "title"
        }
        chai.request(server)
            .post('/sessions')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('eleve');

                done();
            });
    });

});

describe('/POST session', () => {
    it('it should not POST a Session without title field', (done) => {
        let user = {
            "formateur": "5d15e4957c21ac4bfc21bb76",
            "eleve": ["5d15e4957c21ac4bfc21bb75", "5d15e49e7c21ac4bfc21bb74"],
            "title": "title"
        }
        chai.request(server)
            .post('/sessions')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('title');

                done();
            });
    });

});
    