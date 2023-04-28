# ProximaSolves Test
Este proyecto consiste en un servicio de scrapping en Python que obtiene datos de conversión de divisas y una API en NestJS que consume los datos del scraper y los almacena en una base de datos SQLite.
Estos datos se muestran a travez del frontend en React.

## Estructura de carpetas
```js
├── nest-backend
│ ├── src
│ │ ├── app.module.ts
│ │ ├── main.ts
│ ├── Dockerfile
│ └── ...
├── react-frontend
│ ├── src
│ │ ├── App.tsx
│ │ ├── main.tsx
│ ├── Dockerfile
│ └── ...
├── python-microservice
│ ├── scraper
│ │ ├── scraper.py
│ │ └── scraper.proto
│ ├── Dockerfile
│ └── ...
├── docker-compose.yml
└── README.md
```
## Patrones y arquitecturas

El proyecto utiliza los siguientes patrones y arquitecturas:

### Microservicios

El scraper de Python y la API de NestJS se implementan como microservicios independientes. Esto permite un mejor aislamiento de responsabilidades y facilita el escalado y mantenimiento de cada componente.

### gRPC

Se utiliza gRPC para la comunicación entre el scraper de Python y la API de NestJS. gRPC es un marco de comunicación eficiente y rápido que utiliza Protocol Buffers para la serialización de datos.

### Repositorio

Se emplea el patrón de repositorio en la API de NestJS para abstraer el acceso y manipulación de la base de datos SQLite. Esto permite cambiar fácilmente la implementación de la base de datos en el futuro si es necesario.

### CQRS
Se utiliza el patrón CQRS para separar las operaciones de lectura y escritura en la API de NestJS. Esto permite escalar cada operación de forma independiente y facilita el mantenimiento del código.

### Docker

Se utilizan Docker y Docker Compose para construir, empaquetar y ejecutar los microservicios en contenedores. Esto facilita el despliegue y la escalabilidad del proyecto.

## Configuración Local o despliegue
1. Asegúrate de tener instalado Docker y Docker Compose en tu máquina.
2. Ejecuta `docker-compose up --build` en la raíz del proyecto para construir y ejecutar los contenedores.

El FrontEnd se encontrara en http://localhost:3000
El servidor de Nest estará disponible en la dirección http://localhost:3001
La ruta para obtener los datos de conversión de divisas es http://localhost:3000/scraper/conversions/euro-to-dollar