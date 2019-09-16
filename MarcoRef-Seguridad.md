Seguridad en el SISTEMA
La seguridad en el sistema se implementó por medio de herramientas de aws, muchas de estas funcionaron con cuentas no vinculadas a educate, se probó con una cuenta nueva no educate y se logró implementar herramientas como Security HUB, AWS shield y Macie, que implementan técnicas de seguridad para protección de datos sensibles, DDos y grupos de seguridad, aunque en la AWS educate no disponíamos de las mismas herramientas para mejorar la seguridad implementamos otros métodos que estaban a nuestro alcance utilizando mejores prácticas, una de estas técnicas fue implementar un esquema de respaldos de la aplicación duplicando el AMI de la instancia principal cada 24 horas, esto se lograba con aumentando el máximo de grupos de escalabilidad que a su vez aumentaba los respaldos de las instancias funcionales, igualmente se hacia un cambio de la clave pem de acceso a la instancia principal cada semana enviando un alerta programada por reportes.

Seguridad en la APLICACIÓN
seguridad por la aplicación se iba a lograr implementando el ssl de la página el cual se logró por aws certification manager pero que en aws educate no permitía usar, y por docker el ssl no se adhería al url asignado, por otro lado el cifrado de los datos sensibles no es necesario debido al manejo de instancias en aws con claves pem, estos datos no son accesibles mientras que la base de datos esté en una subnet privada.

https://console.aws.amazon.com/cloudtrail/home?region=us-east-1
https://aws.amazon.com/es/macie/
https://console.aws.amazon.com/iam/home?region=us-east-1
https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#Images:

