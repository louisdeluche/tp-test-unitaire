var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server="localhost:3000";
let should = chai.should();



chai.use(chaiHttp);
describe("Books", function(){
    describe ("DELETE ALL", function(){
        it("should remove all first", done=>{
            console.log ("Deleting all data in db first.")
            chai.request(server)
                .get("/posts/")
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
})

    