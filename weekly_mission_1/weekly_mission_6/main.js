const logger = require('./logger') // Al llamar el módulo en logger.js te dará el objeto modificado
require('./patcher') // Llamas este módulo que modifica el objeto instanciado

logger.customMessage()
