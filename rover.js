class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }

   receiveMessage(message) {

      let response = {
         message: message.name,
         results: []
      }

      let commandResult = {
         completed: true
      }

      for (let index = 0; index < message.commands.length; index++) {
         if (message.commands[index].commandType === "STATUS_CHECK") {
            commandResult["roverStatus"] = {
                  position: this.position,
                  mode: this.mode,
                  generatorWatts: this.generatorWatts
               }
            } 
            response.results.push(commandResult);
         };
      return response;
   };
};

module.exports = Rover;
