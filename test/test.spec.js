const assert = require("chai").assert;
const app = require("../src/aritGeo.js");

describe('aritGeo', function(){
	//handles empty array test
	describe('Handle empty input', () => {
		describe('if an empty array', () => {
			it("should return 0 for []", () =>{
				assert.equal(app.aritGeo([]),0);
			});
		});
	});
	//Handle an Arithemetic Progression test
	describe('Handle an Arithemetic Progression', () => {
		describe('if an Arithemetic Progression', () => {
			it("should return Arithmetic for [1,2,3,4,5]", () =>{
				assert.equal(app.aritGeo([1,2,3,4,5]),'arithmetic');
			});
		});
	});

	describe('Handle an Arithemetic Progression', () => {
		describe('if an Arithemetic Progression', () => {
			it("should return Arithmetic for [3,7,11,15,19]", () =>{
				assert.equal(app.aritGeo([3,7,11,15,19]),'arithmetic');
			});
		});
	});

	describe('Handle an Arithemetic Progression', () => {
		describe('if an Arithemetic Progression', () => {
			it("should return Arithmetic for [2,4,6,8,10]", () =>{
				assert.equal(app.aritGeo([2,4,6,8,10]),'arithmetic');
			});
		});
	});

	describe('Handle an Arithemetic Progression', () => {
		describe('if an Arithemetic Progression', () => {
			it("should return Arithmetic for [3,6,9,12,15,18]", () =>{
				assert.equal(app.aritGeo([3,6,9,12,15,18]),'arithmetic');
			});
		});
	});

//Handles a Geometric Progression test
	describe('Handle a Geometric Progression', () => {
		describe('if a Geometric Progression', () => {
			it("should return geometric for [2,4,8,16,32]", () =>{
				assert.equal(app.aritGeo([-2,4,-8,16,-32]),'geometric');
			});
		});
	});

	describe('Handle a Geometric Progression', () => {
		describe('if a Geometric Progression', () => {
			it("should return geometric for [2,4,8,16,32]", () =>{
				assert.equal(app.aritGeo([3,9,27,81,243]),'geometric');
			});
		});
	});

	describe('Handle a Geometric Progression', () => {
		describe('if a Geometric Progression', () => {
			it("should return geometric for [7,49,343,2401]", () =>{
				assert.equal(app.aritGeo([7,49,343,2401]),'geometric');
			});
		});
	});
//Handles a non Geometric and non arithmetic Progression test
	describe('Handle a non Geometric and non arithmetic Progression ', () => {
		describe('if not a Geometric nor arithmetic Progression', () => {
			it("should return -1 for [2,4,8,16,32]", () =>{
				assert.equal(app.aritGeo([2,4,"",16,{}]), -1);
			});
		});
	});
	
		describe('Handle a non Geometric and non arithmetic Progression', () => {
		describe('if not a Geometric nor arithmetic Progression', () => {
			it("should return -1 for [2,'b',8,'A',32]", () =>{
				assert.equal(app.aritGeo([2,'b',8,'A',32]), -1);
			});
		});
	});
});
