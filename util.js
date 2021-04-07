
const getInfo = (textLine) => {
    const ip = textLine.split(' - -')[0];
    const url = textLine.split('"')[1].split(' ')[1];
    return { ip, url };
}

const addToRepo = (data, result) => {
    const { visitedURL, activeIP } = result;
    const { ip, url } = getInfo(data);

    activeIP[ip] = activeIP[ip] ? activeIP[ip] + 1 : 1;
    visitedURL[url] = visitedURL[url] ? visitedURL[url] + 1 : 1;

    return { visitedURL, activeIP };
}

const getReport = ({ visitedURL, activeIP }) => {
    const numberOfUniqueIP = Object.keys(visitedURL).length;
    const [firstURL, secondURL, thirdURL, ...restURL] = Object.entries(visitedURL).sort((a, b) =>  b[1] - a[1] );
    const [firstIP, secondIP, thirdIP, ...restIP] = Object.entries(activeIP).sort((a, b) => b[1] - a[1] );
    return { numberOfUniqueIP, topURL: [firstURL, secondURL, thirdURL], topIP: [firstIP, secondIP, thirdIP] };
}

module.exports = { getInfo, addToRepo, getReport };