## Disponibilidad:

Disponibilidad define la proporción del tiempo que el sistema es funcional y trabaja. Puede ser medido como un porcentaje del tiempo total en que el sistema estuvo caído en un periodo predefinido. La disponibilidad puede verse afectada por errores del sistema, problemas de infraestructura, ataques o carga del sistema. Existen ciertos calculos porcentuales para determinar la disponibilidad de un servicio. AWS, que es el servicio de amazon que estamos usando para desplegar la aplicación, hace uso de los “cinco nueves” que es un 99.999% de disponibilidad del servicio, llegando a estar caído el servidor solamente hasta 5 minutos anuales

Cómo estamos utilizando la computación en la nube con los servicios de AWS, se tomaron en cuenta como estos servicios influyen con la disponibilidad de la aplicación, las zonas de disponibilidad son la esencia de la arquitectura de nuestra infraestructura y conforman la base de las operaciones y la confianza tanto de AWS como de los clientes. Las zonas de disponibilidad se diseñaron para ofrecer redundancia física y proveer resiliencia, lo que permite lograr un rendimiento continuo, inclusive si ocurren interrupciones en el suministro de energía, cortes en el servicio de Internet, inundaciones y otras catástrofes naturales. En nuestro caso, creamos dos instancias en dos zonas de disponibilidad diferentes para evitar problemas en caso de que ocurra alguno de estas posibles interrupciones a la aplicación.

Para crear la nueva instancia en otra región se utilizó una AMI EBS como una imagen de la instancia que contenía la aplicación, para que fuera una copia exacta de ella, y así tener dos instancias iguales corriendo la app en regiones diferentes, siendo cada una asignadas dentro de un VPC (Virtual Private Cloud), en el que un balanceador de carga distribuya las solicitudes entre ambas instancias.
https://docs.aws.amazon.com/es_es/directoryservice/latest/admin-guide/gsg_create_vpc.html



https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html
https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html
https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/ec2-increase-availability.html
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html





