function logDataInInterval(interval) {
  setInterval(() => {
    console.log("Hallo Welt");
  }, interval);
}

function setTimeOutWithLog(timeout) {
  setTimeout(() => {
    console.log("Hallo Welt mit timeout");
  }, timeout);
}
// export { setTimeOutWithLog, logDataInInterval };
// // exports.logData = logDataInInterval;
exports.logDataInInterval = logDataInInterval;
// exports.setTimeOutWithLog = setTimeOutWithLog;
