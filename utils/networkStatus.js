
const networkType = navigator.connection.effectiveType
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
// return ‘3g’, ‘4g’, ‘2g’

if (connection) {
    if (connection.effectiveType === 'slow-2g') {
    }
}

function networkListener () {
    var status = doc.query('.network-status')
    updateOnlineStatus()

    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)

    function updateOnlineStatus (_e) {
        var condition = navigator.onLine ? 'online' : 'offline'
        network = condition, status.className = condition
        status.innerHTML = condition.toUpperCase()
    }
}

navigator.connection.addEventListener('change', logNetworkInfo);

function logNetworkInfo () {
    // Network type that browser uses
    console.log('         type: ' + navigator.connection.type);

    // Effective bandwidth estimate
    console.log('     downlink: ' + navigator.connection.downlink + 'Mb/s');

    // Effective round-trip time estimate
    console.log('          rtt: ' + navigator.connection.rtt + 'ms');

    // Upper bound on the downlink speed of the first network hop
    console.log('  downlinkMax: ' + navigator.connection.downlinkMax + 'Mb/s');

    // Effective connection type determined using a combination of recently
    // observed rtt and downlink values: ' +
    console.log('effectiveType: ' + navigator.connection.effectiveType);

    // True if the user has requested a reduced data usage mode from the user
    // agent.
    console.log('     saveData: ' + navigator.connection.saveData);
}

logNetworkInfo();