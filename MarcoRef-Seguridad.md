Seguridad en el SISTEMA
La seguridad en el sistema se implementó por medio de herramientas de aws, muchas de estas funcionaron con cuentas no vinculadas a educate, se probó con una cuenta nueva no educate y se logró implementar herramientas como Security HUB, AWS shield y Macie, que implementan técnicas de seguridad para protección de datos sensibles, DDos y grupos de seguridad, aunque en la AWS educate no disponíamos de las mismas herramientas para mejorar la seguridad implementamos otros métodos que estaban a nuestro alcance utilizando mejores prácticas, una de estas técnicas fue implementar un esquema de respaldos de la aplicación duplicando el AMI de la instancia principal cada 24 horas, esto se lograba con aumentando el máximo de grupos de escalabilidad que a su vez aumentaba los respaldos de las instancias funcionales, igualmente se hacia un cambio de la clave pem de acceso a la instancia principal cada semana enviando un alerta programada por reportes.

Seguridad en la APLICACIÓN
seguridad por la aplicación se iba a lograr implementando el ssl de la página el cual se logró por aws certification manager pero que en aws educate no permitía usar, y por docker el ssl no se adhería al url asignado, por otro lado el cifrado de los datos sensibles no es necesario debido al manejo de instancias en aws con claves pem, estos datos no son accesibles mientras que la base de datos esté en una subnet privada.

Mejores Prácticas

Using Proven technologies - Usar tecnologías Probadas:
Usar tecnologías probadas y herramientas certificadas para monitoreo 

Conocer las responsabilidades:
Conocer el rol de cada usuario dentro de la aplicación y asignarlo en aws, entre ellos desarrolladores con permisos de modificación, admin, y usuarios que interactúan con al app

Selección de técnicas

Principalmente se decidió por el lado de seguridad usar herramientas de monitoreo que permitiera conocer los cambios que hacen los usuarios y además el tránsito de peticiones que tenia la página, además de respaldar las operaciones

Decisiones de diseño
Mismas que están en Disponibilidad


Definición de herramientas a utilizar 

Cloudtrail para monitoreo de peticiones y uso de las instancias de los usuario que acceden a la consola

AMI para creación de respaldo de la instancia principal con la página web

Grupos de seguridad para control de las ips estáticas y protección de las instancias

IAM para asignación de permisos y roles


