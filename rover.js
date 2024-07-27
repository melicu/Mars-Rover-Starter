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

      for (let index = 0; index < message.commands.length; index++) {
         if (message.commands[index].commandType === "STATUS_CHECK") {
            let statusCommandResult = {
               completed: true,
               roverStatus: {
                  position: this.position,
                  mode: this.mode,
                  generatorWatts: this.generatorWatts
               }
            }
            response.results.push(statusCommandResult);
         } else if (message.commands[index].commandType === "MODE_CHANGE") {
            let modeCommandResult = {
               completed: true
            }
            this.mode = message.commands[index].value;
            response.results.push(modeCommandResult);
         }
      };
      return response;
   };
};

module.exports = Rover;
