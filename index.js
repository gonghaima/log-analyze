
const { addToRepo, getReport } = require("./util");
const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('programming-task-example-data.log'),
});

let repo = { visitedURL: {}, activeIP: {} }

lineReader.on('line', function (chunk) {
    addToRepo(chunk.toString(), repo);
}).on('close', function () {
    const report = getReport(repo);
    console.log(report);
});
