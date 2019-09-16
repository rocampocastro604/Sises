# Sises
Proyecto de aplicacion web alojada en la nube (AWS) con atributos de seguridad, disponibilidad y rendimiento.

## Integrantes:

- Daniel Enrique Hernandez Stalhuth 
  dehernands@eafit.edu.co
- Guillermo Alejandro Gil Maya 
  ggilmay@eafit.edu.co
- Ricardo Ocampo Castro 
  rocampo3@eafit.edu.co

## Roles:

- Seguridad:      Alejandro Gil
- Rendimiento:    Ricardo Ocampo 
- Disponibilidad: Daniel Hernandez 


# Especificación de requisitos no funcionales.
## Disponibilidad
El sistema debe tener una disponibilidad del 99,999% de las veces en que un usuario intente acceder.
El tiempo para iniciar o reiniciar el sistema no podrá ser mayor a 5 minutos.
La tasa de tiempos de falla del sistema no podrá ser mayor al 0,5% del tiempo de operación total.
El promedio de duración de fallas no podrá ser mayor a 5 minutos anuales.
La probabilidad de falla del Sistema no podrá ser mayor a 0,005.

## Rendimiento

## Seguridad


## Rediseño de la aplicación del Proyecto 1 (aspectos que mejoraron del proyecto original)

DISPONIBILIDAD

Antes
Ahora
Solo estaba funcionando una sola instancia en una sola región
Se crearon dos instancias en dos regiones distintas, para así tener dos ‘zonas de disponibilidad’ distintas. Por si ocurre algún problema en dicha región, estará disponible la otra región, por lo tanto, la aplicación seguirá en funcionamiento
Se tenía un VPC por default que no tenía las especificaciones para hacer privada la red hacia las instancias
VPC(Virtual Private Cloud),
creado con especificaciones para asignar dentro de la misma VPC diferentes instancias con la misma aplicación


Las bases de datos privadas respectivamente
Debido a que solo existía una sola instancia, no era necesario tener un balanceador de carga
Se implementó un balanceador de cargas para distribuir las solicitudes que llegan a los servidores entre las dos instancias creadas

## Diseño para la escalabilidad (disponibilidad, rendimiento y seguridad)
a. Qué patrones de arquitectura específicos (patrones de arquitectura y patrones de escalabilidad) y mejores prácticas se utilizarán en la APLICACIÓN para apoyar esta escalabilidad 
Patrón de Escalabilidad
-	Patrón de escalabilidad de bases de datos
-	Patrón Workload/Demand
-	Competing Consumers Patterns
- Data Push and Data Pull model

## Qué patrones de arquitectura específicos (patrones de escalabilidad y buenas prácticas) se utilizarán en el SISTEMA para apoyar esta escalabilidad

Patrón de Escalabilidad
-	Patrón de escalabilidad de bases de datos
-	Patrón Workload/Demand
-	Competing Consumers Patterns
-	Data Push and Data Pull model

Mejores prácticas:
-	Diseño ligero
-	Usar tecnologías validadas
-	Latency and throughput optimization
-	Scalability by design
Conocer las responsabilidades:
	
	
Selección de tácticas 
DISPONIBILIDAD

Se tomó en cuenta crear una nueva instancia en otra región como una imagen de la instancia que contenía la aplicación, para que fuera  
una copia exacta de ella, y así tener dos instancias iguales corriendo la app en regiones diferentes, siendo cada una asignadas dentro de un VPC (Virtual Private Cloud), en el que un balanceador de carga distribuya las solicitudes entre ambas instancias. 

Decisiones de diseño 
DISPONIBILIDAD, RENDIMIENTO Y SEGURIDAD







Definición de Herramientas a utilizar
DISPONIBILIDAD
-  EC2 instances: servidor virtual de la nube de AWS
-  AMI EBS (Elastic Block Storage): Instancia de imagen de maquina para almacenamiento
-  Snapshot: Instantánea que crea una copia de seguridad en los volúmenes de servicios de AWS como EBS.




Los permisos de acceso al sistema podrán ser cambiados solamente por el administrador de acceso a datos.
El nuevo sistema debe desarrollarse aplicando patrones y recomendaciones de programación que incrementen la seguridad de datos.
Todos los sistemas deben respaldarse cada 24 horas. Los respaldos deben ser almacenados en una localidad segura ubicada en un edificio distinto al que reside el sistema.
Todas las comunicaciones externas entre servidores de datos, aplicación y cliente del sistema deben estar encriptadas utilizando el algoritmo RSA.
Si se identifican ataques de seguridad o brecha del sistema, el mismo no continuará operando hasta ser desbloqueado por un administrador de seguridad.
El sistema no continuara operando en caso de fuego

5. Rediseño de la aplicación del Proyecto 1 (aspectos que mejoraron del proyecto original)

Componentes Agregados al sitio web, referencia anterior a nueva

6. Diseño para la escalabilidad


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

