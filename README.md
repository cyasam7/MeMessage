## Requisitos
1. Tener Node.js Instalado
## Configuracion inicial.
Primeramente tenemos que configurar las variables, las variables que sirven para mandar mensaje a una hora del dia, estan configuradas por defecto con un ```*``` donde significa tomara todos los valores de la variable de entorno, lo que significa que mandara un mensaje por minuto durante todas las horas del dia, durante todos los dias del mes, durante todos los meses del año. Esto no es recomendable ya que Whats App puede detectarte como spam y puede haber sanciones. Se recomienda leer todo este archivo antes del uso de la aplicacion.

Dentro del archivo .env existen variables de entorno donde:

1. NUMERO_ENVIAR_MENSAJE (Numero al que se le mandaran los mensajes).
2. MINUTO_DEL_DIA (Minuto el cual se mandara el mensaje). Valores aceptables 0-59
3. HORA_DEL_DIA (Hora del dia a la que se mandara el mensaje) Valores aceptables 0-23
4. DIAS_DEL_MES (Dia del mes que se mandara el mensaje) Valores aceptables 1-31
5. MES_DEL_ANIO (Mes del año que se mandara el mensaje) Valores aceptables 1-12
6. DIA_DE_LA_SEMANA (Dia de la semana que se mandara el mensaje) Valor aceptable 0-7

## Mensajes personalizados
Dentro del archivo mensajes.js hay una variable donde contiene un arreglo de string con cada mensaje.
Si deseas agregar un mensaje o quitar, modificalo dentro de ese array y reinicia la aplicacion.

# Ejemplos
1. Mandar en la noche a las 9:30 pm al numero 51681234567
2. NUMERO_ENVIAR_MENSAJE=516181234567 
3. MINUTO_DEL_DIA=30
4. HORA_DEL_DIA=21
5. DIAS_DEL_MES=*
6. MES_DEL_ANIO=*
7. DIA_DE_LA_SEMANA=*

1. Mandar en la mañana a las 9:30 am al numero 51681234567
2. NUMERO_ENVIAR_MENSAJE=516181234567 
3. MINUTO_DEL_DIA=30
4. HORA_DEL_DIA=9
5. DIAS_DEL_MES=*
6. MES_DEL_ANIO=*
7. DIA_DE_LA_SEMANA=*

1. Mandar a las 12:00 del dia al numero 51681234567
2. NUMERO_ENVIAR_MENSAJE=516181234567 
3. MINUTO_DEL_DIA=0
4. HORA_DEL_DIA=12
5. DIAS_DEL_MES=*
6. MES_DEL_ANIO=*
7. DIA_DE_LA_SEMANA=*

## Pasos para uso de la aplicacion
1. Instalamos las dependencias con ```npm install```
2. Iniciamos el servidor por primera vez con ```npm run start```
3. Primeramente se crearan las credenciales, donde se creara un codigo QR en la consola donde se tendra que Escanear en Whats app.
4. Una vez escaneado el codigo el servidor debe reiniciarse, si no, reinciarlo manualmente.
5. Configurar el archivo .env para mandar mensajer

## Quite por error el usuario baileys de mi whats app ¿Que hago?
En dado caso que el usuario haya queri dejar de utilizar la aplicacion o se haya quitado por error,
se recomienda borrar el archivo que esta dentro de la carpeta ```credencial``` y volver correr la aplicacion con ```npm run start``` para volver a repetir el proceso.

## Limitaciones
1. Solo se puede mandar mensaje a un numero.
2. Los mensajes se mandan de manera aleatorio dentro de lo que es la variable mensajes.
3. La aplicacion de nodejs tiene que estar siempre encendida, busca un hosting gratis para que puedas estar siempre encendida.


