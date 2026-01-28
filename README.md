# Gestion-franca
Prueba tecnica

Este proyecto representa un MVP técnico para la empresa ficticia ABC, que se encuentra migrando su plataforma de gestión de pedidos hacia una arquitectura basada en microservicios, con el objetivo de mejorar la escalabilidad, el desacoplamiento y la mantenibilidad del sistema.

El MVP incluye:

Frontend moderno desarrollado en Angular

Backend basado en microservicios con Spring Boot

Integración con una API pública

Contenerización completa mediante Docker y Docker Compose

## Diseño de arquitectura
### Microservicios definidos

La solución backend está compuesta por los siguientes microservicios independientes:

| Microservicio	    |Responsabilidad    |
|-------------------|-------------------|
| users-service	    |Gestión de usuarios|
| orders-service	|Gestión de pedidos |
| payments-service	|Gestión de pagos   |

Cada microservicio:

- Es un proyecto independiente
- Expone endpoints básicos de estado
- Tiene su propio Dockerfile
- Puede escalar de forma independiente

### Modelo de comunicación
REST HTTP
Comunicación síncrona
Endpoints simples orientados a MVP
Se eligió REST por su simplicidad, amplia adopción y facilidad de integración con frontend moderno.

## Bases de datos
MongoDB (simulada en contenedor Docker)

Justificación:
Esquema flexible
Ideal para prototipos y MVP
Fácil de contenerizar
Buena integración con Spring Boot
Cada microservicio puede usar su propia base de datos (patrón Database per Service).

## Diagrama de arquitectura

Ubicación: /arquitectura/diagrama.png

Arquitectura general:

[ Frontend Angular ]
          |
          v
[ REST APIs ]
   |        |        |
[Users]  [Orders]  [Payments]
   |        
 Mongo

## Frontend
### Tecnologías
Angular
TypeScript
CSS puro (sin frameworks de UI)

### Funcionalidades implementadas
Login simulado (sin backend real)
Validación de campos
Manejo de roles:
 - Administrador → acceso total
 - Usuario → acceso limitado a los primeros elementos del menú
Menú lateral dinámico según rol
Integración con API pública
Vista para mostrar datos de la API
Modo oscuro / claro con botón
Diseño responsive (móvil, tablet, escritorio)

### API pública utilizada

https://jsonplaceholder.typicode.com

Se utiliza para simular la carga de datos externos en la vista de usuarios.

### Capturas del frontend

Ubicación sugerida: /arquitectura/screenshots/
Login
Dashboard administrador
Dashboard usuario
Vista API
Modo oscuro / claro

## Backend
### Tecnologías
Java 21
Spring Boot
Spring Web
Spring Actuator
Spring Data MongoDB
Maven

### Endpoints mínimos (por microservicio)
GET /health
GET /status

Estos endpoints permiten verificar el estado de cada microservicio.

## Dockerización
### Incluye
Dockerfile para:
Frontend
users-service
orders-service
payments-service

docker-compose.yml que levanta:
Los 3 microservicios
MongoDB

## Ejecución del proyecto
Clonar el repositorio:
git clone https://github.com/usuario/repositorio.git

Posicionarse en la raíz del proyecto:
cd Gestion-franca

Levantar todo con Docker:
docker-compose up -d


Accesos:
Frontend: http://localhost:4200
Users Service: http://localhost:8081
Orders Service: http://localhost:8082
Payments Service: http://localhost:8083

## Estructura del repositorio
/frontend
/backend
  /users
  /orders
  /payments
/arquitectura
  diagrama.png
  /screenshots
docker-compose.yml
README.md

## Justificación de decisiones técnicas
Angular: Framework robusto, escalable y adecuado para aplicaciones empresariales.
Microservicios: Permiten independencia, escalabilidad y desacoplamiento.
REST: Ideal para MVP por su simplicidad.
MongoDB: Flexibilidad y rapidez para prototipos.
Docker: Portabilidad, facilidad de despliegue y estandarización del entorno.