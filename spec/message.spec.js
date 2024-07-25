const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function () {

    // TEST 4
    test("throws error if a name is NOT passed into the constructor as the first parameter", function () {
        expect(function () { new Message(); }).toThrow(new Error("Message name required."));
    });

    // TEST 5
    test("constructor sets name", function () {
        let constructorNameCheck = new Message("test", []);
        expect(constructorNameCheck.name).toBe("test");
    });

    // TEST 6
    test("contains a commands array passed into the constructor as the 2nd argument", function () {
        let constructorCommandsCheck = new Message("Test message with two commands", [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')]);
        expect(Array.isArray(constructorCommandsCheck.commands)).toBe(true);
    });
});
