const { getInfo, addToRepo, getReport } = require("./util");
const { logLine, multiLogLine } = require("./testData");
describe('Test Suite', () => {
    it('GetInfo Test Case', () => {
        const { ip, url } = getInfo(logLine);
        expect(ip).toEqual("177.71.128.21");
        expect(url).toEqual("/intranet-analytics/");
    });

    it('AddToRepo / getReport Test Case', () => {
        let repo = { visitedURL: {}, activeIP: {} }
        multiLogLine.map(log => {
            addToRepo(log, repo);
        });
        const report = getReport(repo);
        expect(repo.activeIP["168.41.191.40"]).toEqual(6);

        expect(report.numberOfUniqueIP).toEqual(4);
        expect(report.topURL[0][0]).toEqual('http://example.net/blog/category/meta/');
        expect(report.topIP[0][0]).toEqual("168.41.191.40");
    });
});