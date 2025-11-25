# TiempoTruco - Plan de Desarrollo

## Descripción General

Aplicación web para ayudar a estudiantes de Ingeniería en Informática de la UDE a seleccionar asignaturas y generar posibles horarios compatibles. La aplicación permite a los estudiantes que cursan asignaturas de distintos años pero del mismo semestre visualizar todas las combinaciones de horarios posibles.

## Plan Detallado

### 1. Estructura del Proyecto
✅ Completado
- Crear proyecto React con create-react-app o estructura manual
- Configurar package.json con dependencias necesarias
- Estructurar carpetas: components, data, utils, styles
- Configurar para deploy en GitHub Pages

### 2. Extracción y Estructuración de Datos
✅ Completado
- Extraer datos de asignaturas de las imágenes del calendario académico
- Crear estructura de datos JSON con:
  - Nombre de asignatura
  - Año (1-5)
  - Semestre (1 o 2)
  - Días de la semana (L, M, M, J, V)
  - Horarios (inicio-fin)
  - Fechas de inicio y fin
  - Evaluaciones
  - Sede
- Crear archivo data/subjects.js o subjects.json

### 3. Componentes Base y Estilo
✅ Completado
- Copiar y adaptar Sidebar de Inscripciones
- Copiar y adaptar Message component
- Crear estilos base siguiendo el estilo de Inscripciones
- Configurar App.css e index.css

### 4. Componente de Selección de Asignaturas
✅ Completado
- Crear componente para filtrar por año y semestre
- Crear componente de lista/checkboxes para seleccionar asignaturas
- Mostrar información de cada asignatura (horarios, días, etc.)
- Validar que las asignaturas seleccionadas sean del mismo semestre

### 5. Lógica de Generación de Horarios
✅ Completado
- Crear función que detecte conflictos de horarios
- Generar todas las combinaciones posibles de horarios
- Filtrar combinaciones que tengan conflictos
- Considerar:
  - Solapamiento de días
  - Solapamiento de horarios
  - Mismo día y horario = conflicto

### 6. Componente de Visualización de Horarios
✅ Completado
- Crear tabla de horarios semanal
- Mostrar asignaturas en sus respectivos días y horarios
- Colorear diferentes asignaturas
- Mostrar múltiples opciones si hay varias combinaciones posibles
- Permitir navegar entre diferentes combinaciones

### 7. Componente Principal y App
✅ Completado
- Crear componente Home principal
- Configurar App.js con routing básico
- Integrar todos los componentes
- Añadir Sidebar simplificado (sin autenticación)

### 8. Testing y Ajustes Finales
🔲 Pendiente
- Probar con diferentes combinaciones de asignaturas
- Verificar que no haya conflictos en horarios generados
- Ajustar estilos y UX
- Preparar para deploy en GitHub Pages

## Fecha de Última Actualización
2025-11-25

