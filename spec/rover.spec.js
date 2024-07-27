const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function () {

  // TEST 7
  test("constructor sets position and default values for mode and generatorWatts", function () {
    let constructorValuesCheck = new Rover(98382);
    expect(constructorValuesCheck.position).toEqual(98382);
    expect(constructorValuesCheck.mode).toEqual("NORMAL");
    expect(constructorValuesCheck.generatorWatts).toEqual(110);
  });

  // TEST 8
  test("response returned by receiveMessage contains the name of the message", function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual("Test message with two commands");
  });

  // TEST 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results.length).toEqual(commands.length);
  });

   // TEST 10
   // In the results array, the first object should contain "completed" key with "true" value.
   // In the results array, the second object should contain "roverStatus" key with an object value that contains the current position, mode, and generatorWatts.
  test("responds correctly to the status check command", function () {
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Testing status check command', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[0].completed).toBeTruthy;
    expect(response.results[0].roverStatus.position).toEqual(98382);
    expect(response.results[0].roverStatus.mode).toEqual("NORMAL");
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
  });

  // TEST 11
  test("responds correctly to the mode change command", function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Testing mode change command', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[0].completed).toBeTruthy;
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toEqual("LOW_POWER");
    expect(rover.generatorWatts).toEqual(110);
  });

  // TEST 12
  // test("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
  // });

  // TEST 13
  // test("responds with the position for the move command", function() {

  // });
});
