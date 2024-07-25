class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }

   receiveMessage(message) {
      let messageName = message.name;
      let resultsArr = [];
      if (message.commands === "STATUS_CHECK") {
         resultsArr.push("hello");
      }
      return {
         message: messageName,
         results: resultsArr
      };

   }
}

module.exports = Rover;

  // for (let index = 0; index < message.commands.length; index++) {
      //    if (message.commands[index] === "STATUS_CHECK") {
      //       results.push({this[position], this.mode, this.generatorWatts});
      //    }

   //takes parameter of a Message object//
   //updates properties on the Rover based on the message//
   //ex: MOVE sould update the position property//
   //returns an ANONYMOUS OBJECT with at least two properties: original message, results (array of results of each command on the message object)//