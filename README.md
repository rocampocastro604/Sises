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
