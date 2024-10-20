const os = require("os");

// info about current user
const user = os.userInfo();
// console.log("✌️user --->", user);

// method returns the system up time in seconds

console.log(`System uptime: ${os.uptime()} seconds`);

// get operating system name and version

console.log(`Operating System: ${os.type()} ${os.release()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log("Current OS: ", currentOS);
