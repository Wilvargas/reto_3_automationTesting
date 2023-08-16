# Pruebas de Automatización para mi página Hotels

Este proyecto contiene scripts y recursos para la ejecución de pruebas en mi página de Hoteles. Se utiliza un enfoque de pruebas funcionales para asegurar que la aplicación cumpla con los requisitos esperados de funcionalidad.

## Clona el Repositorio

1. Clona este repositorio en tu equipo local:

https://github.com/Wilvargas/reto_3_automationTesting.git


2. Abre una terminal en la ubicación del repositorio clonado.

3. Instala las dependencias de Cypress utilizando npm init -y(asegúrate de tener Node.js instalado en tu máquina):


## Uso

Para ejecutar las pruebas, sigue estos pasos:

1. En la terminal, navega al directorio del repositorio clonado.

2. Ejecuta el siguiente comando para abrir la interfaz de usuario de Cypress: npx cypress open

3. Se abrirá la interfaz de usuario de Cypress. Haz clic en el archivo de prueba que deseas ejecutar ("testingHotels.cy.js").

4. Cypress ejecutará las pruebas automáticamente y mostrará los resultados en la interfaz de usuario.

## Pruebas Automatizadas
Este proceso contiene 3 pruebas concretas.

1. Verificar que todas las cards aparecen desde un inicio
2. Aplicar cada filtro por precio y verificar que las cards que aparecen corresponden al precio indicado
3. Limpiar los filtros y verificar que nuevamente todas las cards estén presentes. 