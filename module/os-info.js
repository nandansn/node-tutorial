const osInfo = require("os");

let getInGb = (bytes) => Math.round(bytes / Math.pow(2, 30));

let sysInfo = {
  osName: osInfo.type(),
  osRelease: osInfo.release(),
  totalMemory: getInGb(osInfo.totalmem()),
  freeMemory: getInGb(osInfo.freemem()),
};

console.log(sysInfo);
