const os = require('os');
function devuelveSistema(){
    let a = os.platform();
    switch (a) {
        case 'win32':
            return 'estas usando este programa desde windows';
            break;
         case 'darwin':
            return 'estas usando este programa desde un dispositivo MAC';
            break;
         default:
            return 'estas usandome o desde linux o desde algo raro';
            break;

    }

}
exports.devuelveSistema = devuelveSistema;