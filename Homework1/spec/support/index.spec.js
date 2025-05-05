//import my function from hw1 code to test
const { dateConvert } = require("../../lib/hw1");

//the tests all have the same template, where you input the argument into the function
//and see if it matches the expected result
describe('tests to check invalid range', () => {

    it('check for invalid month out of bounds input', () => {
        const result = dateConvert("20241329T230000");
        expect(result).toBe("Invalid Date");
    }); 

    it('check for invalid day out of bounds input', () => {
        const result = dateConvert("20240245T230000");
        expect(result).toBe("Invalid Date");
    }); 

    it('check for invalid hour out of bounds input', () => {
        const result = dateConvert("20240210T990000");
        expect(result).toBe("Invalid Date");
    }); 

    it('check for invalid minute out of bounds input', () => {
        const result = dateConvert("20240210T239900");
        expect(result).toBe("Invalid Date");
    }); 
    
    it('check for invalid second out of bounds input', () => {
        const result = dateConvert("20240210T230099");
        expect(result).toBe("Invalid Date");
    }); 

});

describe('tests that show dates that are valid', () => {
    
    it('check month (april)', () => {
        const result = dateConvert("20240415T230000");
        expect(result).toBe("April 15, 2024 at 11:00 PM");
    }); 

    it('check day (20)', () => {
        const result = dateConvert("20240920T230000");
        expect(result).toBe("September 20, 2024 at 11:00 PM");
    }); 

    it('check hour (10)', () => {
        const result = dateConvert("20240620T100000");
        expect(result).toBe("June 20, 2024 at 10:00 AM");
    }); 

    it('check minute (45)', () => {
        const result = dateConvert("20240320T104500");
        expect(result).toBe("March 20, 2024 at 10:45 AM");
    });     

});

describe('tests for more bounds', () => {

    it('check year 0', () => {
        const result = dateConvert("00000320T104500");
        expect(result).toBe("Invalid Date");
    });   

    it('check year 9999', () => {
        const result = dateConvert("99990320T104500");
        expect(result).toBe("March 20, 9999 at 10:45 AM");
    });   

    it('check for leap year (2024)', () => {
        const result = dateConvert("20240229T230000");
        expect(result).toBe("February 29, 2024 at 11:00 PM");
    }); 

    it('check for leap year (2025)', () => {
        const result = dateConvert("20250229T230000");
        expect(result).toBe("Invalid Date");
    });

    it('check for leap year (2028)', () => {
        const result = dateConvert("20280229T230000");
        expect(result).toBe("February 29, 2028 at 11:00 PM");
    }); 

    it('check for leap year (2029)', () => {
        const result = dateConvert("20290229T230000");
        expect(result).toBe("Invalid Date");
    });

});

describe('tests min and max dates', () => {

    it('check max date (jan right)', () => {
        const result = dateConvert("20230131T230000");
        expect(result).toBe("January 31, 2023 at 11:00 PM");
    });   

    it('check max date (jan wrong)', () => {
        const result = dateConvert("20230132T230000");
        expect(result).toBe("Invalid Date");
    });  

    it('check min date (jan right)', () => {
        const result = dateConvert("20230101T230000");
        expect(result).toBe("January 1, 2023 at 11:00 PM");
    });  

    it('check min date (jan wrong)', () => {
        const result = dateConvert("20230100T230000");
        expect(result).toBe("Invalid Date");
    });  

    it('check max date (dec right)', () => {
        const result = dateConvert("20231231T230000");
        expect(result).toBe("December 31, 2023 at 11:00 PM");
    });   

    it('check max date (dec wrong)', () => {
        const result = dateConvert("20231232T230000");
        expect(result).toBe("Invalid Date");
    });  

    it('check min date (dec right)', () => {
        const result = dateConvert("20231201T230000");
        expect(result).toBe("December 1, 2023 at 11:00 PM");
    });  

    it('check min date (dec wrong)', () => {
        const result = dateConvert("20231200T230000");
        expect(result).toBe("Invalid Date");
    }); 

});


describe('tests that are misc', () => {    

    it('check for correct input length (long)', () => {
        const result = dateConvert("20240229T23000000");
        expect(result).toBe("Invalid Date");
    });

    it('check for correct input length (right)', () => {
        const result = dateConvert("20240309T230000");
        expect(result).toBe("March 9, 2024 at 11:00 PM");
    });

    it('check for correct input length (short)', () => {
        const result = dateConvert("1");
        expect(result).toBe("Invalid Date");
    });

    it('check for correct input type', () => {
        const result = dateConvert("hello");
        expect(result).toBe("Invalid Date");
    });

    it('check for correct input type', () => {
        const result = dateConvert("March 9, 2024 at 11:00 PM");
        expect(result).toBe("Invalid Date");
    });

    it('check for blank', () => {
        const result = dateConvert("");
        expect(result).toBe("Invalid Date");
    });

    it('check for blank', () => {
        const result = dateConvert(" ");
        expect(result).toBe("Invalid Date");
    });

    it('check for T', () => {
        const result = dateConvert("20240309230000");
        expect(result).toBe("Invalid Date");
    });
    
});