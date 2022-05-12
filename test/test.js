let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = require('chai').expect;

chai.use(chaiHttp);

const server = "http://localhost:3000";

describe("Unit Test - Testing the add function", function() {
        it("Basic operation 4+6 - Expected return: 10", function (done) {
                chai.request(server)
                .get("/api/maths/add/4/6")
                .end(function(err,res){
                        expect(res).to.have.status(200);
                        expect(res.body).to.have.property('executed').to.be.equal(true);
                        expect(res.body).to.have.property('result').to.be.equal(10);
                        done();
                });
        });
        it("Not number parameters - Expected return: controlled error", function (done) {
                chai.request(server)
                .get("/api/maths/add/text/9")
                .end(function(err,res){
                        expect(res).to.have.status(400);
                        expect(res.body).to.have.property('executed').to.be.equal(false);
                        done();
                });
        });
});
