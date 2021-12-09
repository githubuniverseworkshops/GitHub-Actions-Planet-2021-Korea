const filterByTerm = require("../function.js");

describe("Filter function", () => {
    test("Test 1", () => {
      const input = [
          {id: "1", url: "http://www.google.com" },
          {id: "2", url: "http://www.msn.com" },
          {id: "3", url: "http://www.test.com"}
      ];

      const output = [ { id: "3", url: "http://www.test.com" }];

      expect(filterByTerm(input, "test")).toEqual(output);
    });
    
     test("Test 2", () => {
      const input = [
          {id: "1", url: "http://www.google.com" },
          {id: "2", url: "http://www.msn.com" },
          {id: "3", url: "http://www.test.com"}
      ];

      const output = [ { id: "2", url: "http://www.msn.com" }];

      expect(filterByTerm(input, "msn")).toEqual(output);
    });
});
