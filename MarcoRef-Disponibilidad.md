Disponibilidad:

Disponibilidad define la proporción del tiempo que el sistema es funcional y trabaja. Puede ser medido como un porcentaje del tiempo total en que el sistema estuvo caído en un periodo predefinido. La disponibilidad puede verse afectada por errores del sistema, problemas de infraestructura, ataques o carga del sistema. Existen ciertos calculos porcentuales para determinar la disponibilidad de un servicio. AWS, que es el servicio de amazon que estamos usando para desplegar la aplicación, hace uso de los “cinco nueves” que es un 99.999% de disponibilidad del servicio, llegando a estar caído el servidor solamente hasta 5 minutos anuales

Cómo estamos utilizando la computación en la nube con los servicios de AWS, se tomaron en cuenta como estos servicios influyen con la disponibilidad de la aplicación, las zonas de disponibilidad son la esencia de la arquitectura de nuestra infraestructura y conforman la base de las operaciones y la confianza tanto de AWS como de los clientes. Las zonas de disponibilidad se diseñaron para ofrecer redundancia física y proveer resiliencia, lo que permite lograr un rendimiento continuo, inclusive si ocurren interrupciones en el suministro de energía, cortes en el servicio de Internet, inundaciones y otras catástrofes naturales.


Region seleccionadas diferentes (Availability zones)
2 instancias 
Load Balancer
https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html
https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html
https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/ec2-increase-availability.html
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html





