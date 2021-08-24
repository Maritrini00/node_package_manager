const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level = "debug"; //"production"

logger.info("La aplicacion se inicio chilo");
logger.warn("Peligro inminente: falta la libreria Trinidat en el sistema");
logger.error("No se encontró la función enviarEmail");
logger.fatal("Fatality");
//refresco en frio o caliente: cambio en la aplicacion
//caliente: cambio mientras esta productiva
//en frio: el cambio se hace mientras se apaga
//pruebas unitarias: permite que los programas funcionen correctamente. testing
//dependencia desarrollo: baja la carpeta nodemodules cuando esta en desarrollo. aplicacion más ligera

function sumar(a,b){
    return a + b;
}

module.exports = sumar;

