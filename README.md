# TiempoTruco

Aplicación web para generar horarios compatibles para estudiantes de Ingeniería en Informática de la UDE.

## Descripción

TiempoTruco permite a los estudiantes seleccionar asignaturas de diferentes años pero del mismo semestre y generar todas las combinaciones posibles de horarios sin conflictos. La aplicación es especialmente útil para estudiantes que cursan asignaturas de distintos años en el mismo semestre.

## Características

- ✅ Selección de asignaturas por año y semestre
- ✅ Generación automática de horarios compatibles
- ✅ Visualización de horarios en tabla semanal
- ✅ Detección automática de conflictos de horario
- ✅ Múltiples combinaciones de horarios posibles
- ✅ Sin necesidad de base de datos (datos estáticos)
- ✅ Diseño responsive para móviles

## Instalación

```bash
npm install
```

## Uso

### Desarrollo

```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

### Build para producción

```bash
npm run build
```

### Deploy en GitHub Pages

```bash
npm run deploy
```

O usa el workflow de GitHub Actions configurado en `.github/workflows/deploy.yml`

## Estructura del Proyecto

```
TiempoTruco/
├── public/              # Archivos públicos
├── src/
│   ├── components/      # Componentes React
│   │   ├── common/      # Componentes comunes (Message, etc.)
│   │   ├── Home.jsx     # Componente principal
│   │   ├── SubjectSelector.jsx  # Selector de asignaturas
│   │   ├── ScheduleTable.jsx    # Tabla de horarios
│   │   └── Sidebar.jsx          # Barra lateral
│   ├── data/
│   │   └── subjects.js  # Datos de asignaturas del calendario
│   ├── utils/
│   │   └── scheduleUtils.js  # Utilidades para detectar conflictos
│   ├── App.js
│   └── index.js
└── package.json
```

## Tecnologías

- React 18
- React Router DOM
- Bootstrap Icons
- CSS Modules

## Datos

Los datos de las asignaturas están basados en el calendario académico 2025 de Ingeniería en Informática - UDE (Plan 2006 - Implementación 2010) y están almacenados en `src/data/subjects.js`.

## Notas

- La aplicación valida que todas las asignaturas seleccionadas sean del mismo semestre
- Los conflictos se detectan automáticamente comparando días y horarios
- Se generan todas las combinaciones posibles sin conflictos
- Las asignaturas con horarios "A definir" (como Talleres y Electivas) no se incluyen en la selección

## Licencia

Este proyecto es de uso educativo.

