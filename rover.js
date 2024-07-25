class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }


   receiveMessage(message) {
      let resultsArr = [];
      let roverResponse = {};
      for (let index = 0; index < message.commands.length; index++) {
         if (message.commands[index] === "STATUS_CHECK") {
            let roverStatus = {
               position: this.position,
               mode: this.mode,
               generatorWatts: this.generatorWatts
            }
            roverResponse["completed"] = true;
            roverResponse["roverStatus"] = roverStatus
            };
         resultsArr.push(roverResponse);
      };

      return {
         message: message.name,
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