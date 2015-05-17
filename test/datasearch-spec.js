var assert = require('assert'),
    should = require('should'),
    DataSearch = require('../src/datasearch');

describe("DataSearch", function() {

  describe("when searching in an array of simple types", function() {
    it("should search in a simple array of string", function() {
      var data = ["blue", "red", "yellow", "green", "black", "white"];
      var datasearch = new DataSearch(data);
      var result = datasearch.search("bl");
      result.should.be.eql(["blue", "black"]);
    });

    it("should search in a simple array of numbers", function() {
      var data = [1, 2, 3, 4];
      var datasearch = new DataSearch(data);
      var result = datasearch.search("3");
      result.should.be.eql([3]);
    });

    it("should raise an error if the data type is not supported", function() {
      var data = [true, false];
      (function() {
        new DataSearch(data);
      }).should.throw();
    });
  });

  describe("when searching in an array of complex objects", function() {
    it("should search in an array of simple hash", function() {
      var data = [
        {name: "Iron Man", country: "United States"},
        {name: "Sherlock Holmes", country: "United Kingdom"},
        {name: "Bruce Lee", country: "China"}
      ]; 

      var datasearch = new DataSearch(data);
      var result = datasearch.search("united");
      result.should.be.eql([data[0], data[1]]);
    }); 

    it("should search in an array of hash with nested simple attributes", function() {
      var data = [
        {name: {firstName: "Iron", lastName: "Man"}, country: "United States"},
        {name: {firstName: "Sherlock", lastName: "Holmes"}, country: "United Kingdom"},
        {name: {firstName: "Bruce", lastName: "Lee"}, country: "China"}
      ];

      var datasearch = new DataSearch(data);
      var result = datasearch.search("holmes");
      result.should.be.eql([data[1]]);
    });

    it("should search in an array of hash with nested complex attributes", function() {
      var data = [
        {destination: {name: "Beijing", places: ["Forbidden City", "TianAnMen"]}},
        {destination: {name: "Paris", places: ["Eiffel Tower", "Louvre Museum"]}},
        {destination: {name: "London", places: ["London Eye", "Oxford Circus"]}}
      ]; 

      var datasearch = new DataSearch(data);
      var result = datasearch.search("Louvre");
      result.should.be.eql([data[1]]);
    });
  });
})
