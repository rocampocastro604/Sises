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


## Especificación de requisitos no funcionales.
### Disponibilidad
- El sistema debe tener una disponibilidad del 99,999% de las veces en que un usuario intente acceder.
- El tiempo para iniciar o reiniciar el sistema no podrá ser mayor a 5 minutos.
- La tasa de tiempos de falla del sistema no podrá ser mayor al 0,5% del tiempo de operación total.
- El promedio de duración de fallas no podrá ser mayor a 5 minutos anuales.
- La probabilidad de falla del Sistema no podrá ser mayor a 0,005.

### Rendimiento
- El sistema no debe superar los 100 dolares en gastos al mes
- El sistema no debe superar el 95% del uso de recursos
- Las instancias tienen que estar respaldadas bajo un auto scaling group para evitar fallos masivos 

### Seguridad
- La base de datos no debe poder accederse por los usuarios y debe estar restringida
- Los respaldos de la aplicación tienen que hacer cada 24 horas bajo el AMI principal
- La clave de instancia pem debe ser modificada cada semana para evitar intentos de acceso
- Las instancias tienen que estar respaldadas bajo un auto scaling group para evitar fallos masivos 


## Rediseño de la aplicación del Proyecto 1 (aspectos que mejoraron del proyecto original)

### DISPONIBILIDAD
|                                                     Antes                                                    |                                                                                                                        Ahora                                                                                                                       |
|:------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Solo estaba funcionando una sola instancia en una sola región                                                | Se crearon dos instancias en dos regiones distintas, para así tener dos ‘zonas de disponibilidad’ distintas. Por si ocurre algún problema en dicha región, estará disponible la otra región, por lo tanto, la aplicación seguirá en funcionamiento |
| Se tenía un VPC por default que no tenía las especificaciones para hacer privada la red hacia las instancias | VPC(Virtual Private Cloud),  creado con especificaciones para asignar dentro de la misma VPC diferentes instancias con la misma aplicación                                                                                                         |
| Debido a que solo existía una sola instancia, no era necesario tener un balanceador de carga                 | Se implementó un balanceador de cargas para distribuir las solicitudes que llegan a los servidores entre las dos instancias creadas                                                                                                                |

### SEGURIDAD
 
| Antes 	| Ahora 	|
|:----------------------------------------------------:	|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|
|  	| VPC( red privada virtual),  creado igualmente para asignar dentro de la misma las instancias para el balanceador. 	|
| Subnets públicas que referencian la primer instancia 	| Subnets públicas y privadas para referenciar las múltiples instancia y las bases de datos privadas respectivamente 	|
|  	| La página web y los datos son respaldados cada 24 horas en la segunda instancia 	|
|  	| Cloudtrail para supervisar los estados de la instancia e informar de cambios y de manejo del cpu 	|
|  	| Roles de participación, para manejo de los diferentes desarrolladores que interactúan con las instancias se crean IAM roles que se les asignan permisos de modificación,  desafortunadamente debido al tipo de cuenta de estudiante esta función no está habilitada. 	|
|  	| AWS shield, esta función permite protección contra ataques DDos, identifica el ataque y toma acciones creando listas de espera o bloqueando el acceso,  desafortunadamente debido al tipo de cuenta de estudiante esta función no está habilitada. 	|
|  	| La clave pem de las instancias es actualizada cada semana para evitar ingresos no deseados dentro de las instancias que puedan manipular y corromper datos. 	|


### RENDIMIENTO

| Antes 	| Ahora 	|
|:----------------------------------------------------:	|:-------------------------------------------------------------------------------------------------------------------------------------------------------:	|
| Ya se usaba la misma AMI de tipo HVM 	| Se usó una AMI de tipo HVM en la Instancia EC2 de Amazon.  Nota: Con la cuenta paga se experimento con una instancia tipo M4 y M5 para ver diferencias. 	|
|  	| Uso de Amazon CloudWatch para la gestión y visualización del uso de los recursos como un dashboard de administración. 	|
| No se contaba con nada de elasticidad en el sistema. 	| Uso de AWS Auto Scaling Group para escalado automático de recursos. 	|


## Diseño para la escalabilidad (disponibilidad, rendimiento y seguridad)

### a. Qué patrones de arquitectura específicos (patrones de arquitectura y patrones de escalabilidad) y mejores prácticas se utilizarán en la APLICACIÓN para apoyar esta escalabilidad 
Patrón de Escalabilidad
-	Patrón de escalabilidad de bases de datos
-	Patrón Workload/Demand
-	Competing Consumers Patterns
-	Data Push and Data Pull model

#### Seguridad en la APLICACIÓN
Seguridad por la aplicación se iba a lograr implementando el ssl de la página el cual se logró por aws certification manager pero que en aws educate no permitía usar, y por docker el ssl no se adhería al url asignado, por otro lado el cifrado de los datos sensibles no es necesario debido al manejo de instancias en aws con claves pem, estos datos no son accesibles mientras que la base de datos esté en una subnet privada.


### b. Qué patrones de arquitectura específicos (patrones de escalabilidad y buenas prácticas) se utilizarán en el SISTEMA para apoyar esta escalabilidad

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

#### Seguridad en el SISTEMA
La seguridad en el sistema se implementó por medio de herramientas de aws, muchas de estas funcionaron con cuentas no vinculadas a educate, se probó con una cuenta nueva no educate y se logró implementar herramientas como Security HUB, AWS shield y Macie, que implementan técnicas de seguridad para protección de datos sensibles, DDos y grupos de seguridad, aunque en la AWS educate no disponíamos de las mismas herramientas para mejorar la seguridad implementamos otros métodos que estaban a nuestro alcance utilizando mejores prácticas, una de estas técnicas fue implementar un esquema de respaldos de la aplicación duplicando el AMI de la instancia principal cada 24 horas, esto se lograba con aumentando el máximo de grupos de escalabilidad que a su vez aumentaba los respaldos de las instancias funcionales, igualmente se hacia un cambio de la clave pem de acceso a la instancia principal cada semana enviando un alerta programada por reportes.
	
	
### c. Selección de tácticas 

DISPONIBILIDAD

- Se tomó en cuenta crear una nueva instancia en otra región como una imagen de la instancia que contenía la aplicación, para que fuera una copia exacta de ella, y así tener dos instancias iguales corriendo la app en regiones diferentes, siendo cada una asignadas dentro de un VPC (Virtual Private Cloud), en el que un balanceador de carga distribuya las solicitudes entre ambas instancias. 

SEGURIDAD

- Principalmente se decidió por el lado de seguridad usar herramientas de monitoreo que permitiera conocer los cambios que hacen los usuarios y además el tránsito de peticiones que tenia la página, además de respaldar las operaciones

RENDIMIENTO

- Se hizo uso de herramientas para visualizar anomalias y alertar sobre cambios en el volumen de peticiones al sistema, ademas de otras tecnicas para que el sistema pubiera incrementar sus recursos y decrementarlos segun los iba necesitando. 

### d. Decisiones de diseño

DISPONIBILIDAD, RENDIMIENTO Y SEGURIDAD

![aws_regions](https://user-images.githubusercontent.com/12629380/64936122-0966eb80-d81a-11e9-90b6-98aced84a838.png)
![VPCaws](https://user-images.githubusercontent.com/12629380/64936128-108df980-d81a-11e9-89e2-32948ce04792.png)




### e. Definición de Herramientas a utilizar

DISPONIBILIDAD
-  EC2 instances: servidor virtual de la nube de AWS
-  AMI EBS (Elastic Block Storage): Instancia de imagen de maquina para almacenamiento
-  Snapshot: Instantánea que crea una copia de seguridad en los volúmenes de servicios de AWS como EBS.

SEGURIDAD
- Cloudtrail para monitoreo de peticiones y uso de las instancias de los usuario que acceden a la consola
- AMI para creación de respaldo de la instancia principal con la página web
- Grupos de seguridad para control de las ips estáticas y protección de las instancias
- IAM para asignación de permisos y roles

RENDIMIENTO
- CloudWatch para monitoreo y control de 
- AMI tipo HVM en vez de PV
- Grupos de Auto-Escalado para aprovechar al maximo los recursos

