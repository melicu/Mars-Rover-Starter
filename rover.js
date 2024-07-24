class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
      //takes parameter of a Message object//
      //updates properties on the Rover based on the message//
      //ex: MOVE sould update the position property//
      //returns an ANONYMOUS OBJECT with at least two properties: original message, results (array of results of each command on the message object)//
      return message;

   }
}

module.exports = Rover;