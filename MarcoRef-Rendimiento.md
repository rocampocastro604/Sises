Rendimiento:

El rendimiento es un indicativo de la capacidad de respuesta de un sistema a la hora de ejecutar cualquier acción dentro de un intervalo de tiempo determinado. Esto quiere decir que el rendimiento define cómo se comporta un sistema con las interacciones de los usuarios. Para esta entrega y en el apartado de Rendimiento (Performance) se implementaron las siguientes soluciones:

- Se usó una AMI de tipo HVM en la Instancia EC2 de Amazon.
	En Amazon existen varios tipos de virtualizacion (2) para las máquinas virtuales (AMI), estan tipo paravirtuales y máquina virtual de hardware, las primeras conocidas como PV y las segundas HVM.
https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/virtualization_types.html
https://cloudacademy.com/blog/aws-ami-hvm-vs-pv-paravirtual-amazon/
- Uso de Amazon CloudWatch para la gestion y visualización del uso de los recursos como un dashboard de administracion.Que ademas permite crear alarmas del comportamiento de otras herramientas como AutoScaling Group asi permitirá definir funciones para activar esta herramienta o para detener instancias en caso de que se quiera definir un máximo de recursos a gasta.
Finalmente con esta herramienta se pueden identificar comportamientos anómalos en las instancias y alertar al administrador.
![CloudWatch](https://user-images.githubusercontent.com/44033716/64935704-4336f280-d818-11e9-88e1-1626eb02c17e.JPG)


- Uso de AWS Auto Scaling Group para escalado automático de recursos.
Esto sirve para darle ELASTICIDAD al sistema, esto es una propiedad fundamental para el atributo de calidad de RENDIMIENTO, pues funciona de la siguiente manera:
  - Se crea una AMI personalizada
  - Se crea el AutoScaling Group definiendo unas métricas para su funcionamiento, como cantidades mínimas y máximas para su activación.
  - Se crearan ya definidas esas cantidades mínimas instancias del tipo de AMI que se creo anteriormente.
  https://docs.aws.amazon.com/es_es/autoscaling/application/userguide/what-is-application-auto-scaling.html
- Se intentó usar SoapUI para hacerle testing al sistema y así verificar el desempeño.

Notas:
https://docs.aws.amazon.com/es_es/AmazonS3/latest/dev/optimizing-performance-design-patterns.html
Se hizo un ataque DDOS por medio de las herramientas AnonMafia Cyber Family DOSER y UDP UNICORN enviando múltiples paquetes de tipo UDP y TCP para ver que tantas peticiones se necesitaban para que el sistema dejará de funcionar.
