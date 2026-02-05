let comando = "start"

switch (comando){
  case"start":
    console.log("Bot started");
    break;
  case "stop":
    console.log("Bot stopped");
    break;
  case "pause":
    console.log("Bot paused");
    break;
  default:
    console.log("Unknown command");
}