// Academic calendar data for Ingeniería en Informática - UDE
// Plan 2006 - Implementación 2010

export const subjects = [
  // PRIMER AÑO - Primer Semestre
  {
    id: 'prog1',
    name: 'Programación I',
    year: 1,
    semester: 1,
    startDate: '2025-03-17',
    endDate: '2025-07-16',
    days: ['L', 'X'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-05-22 19:00', '2025-07-23 19:00'],
    campus: 'Pocitos',
    notes: '*'
  },
  {
    id: 'so1',
    name: 'Sistemas Operativos I',
    year: 1,
    semester: 1,
    startDate: '2025-03-17',
    endDate: '2025-07-16',
    days: ['L', 'X'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-05-20 19:00', '2025-07-25 19:00'],
    campus: 'Pocitos'
  },
  {
    id: 'matdis1',
    name: 'Matemática Discreta I',
    year: 1,
    semester: 1,
    startDate: '2025-03-18',
    endDate: '2025-07-17',
    days: ['M', 'J'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-05-19 19:00', '2025-07-31 19:00'],
    campus: 'Pocitos',
    notes: '*'
  },
  {
    id: 'analisis1',
    name: 'Análisis Matemático I',
    year: 1,
    semester: 1,
    startDate: '2025-03-18',
    endDate: '2025-07-17',
    days: ['M', 'J'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-05-24 09:00', '2025-07-28 19:00'],
    campus: 'Pocitos',
    notes: '**'
  },
  {
    id: 'comunicacion',
    name: 'Comunicación',
    year: 1,
    semester: 1,
    startDate: '2025-03-21',
    endDate: '2025-07-11',
    days: ['V'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-07-24 19:00'],
    campus: 'Pocitos',
    notes: '**'
  },
  {
    id: 'psicosocial',
    name: 'Psicología Social',
    year: 1,
    semester: 1,
    startDate: '2025-03-21',
    endDate: '2025-07-11',
    days: ['V'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-07-30 19:00'],
    campus: 'Pocitos',
    notes: '**'
  },

  // PRIMER AÑO - Segundo Semestre
  {
    id: 'prog2',
    name: 'Programación II',
    year: 1,
    semester: 2,
    startDate: '2025-08-04',
    endDate: '2025-11-28',
    days: ['L', 'M', 'X', 'J', 'V'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-10-01 19:00', '2025-12-08 19:00'],
    campus: 'Pocitos',
    notes: '*'
  },
  {
    id: 'algebra',
    name: 'Álgebra Lineal',
    year: 1,
    semester: 2,
    startDate: '2025-08-04',
    endDate: '2025-11-26',
    days: ['L', 'X'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-09-29 19:00', '2025-12-01 19:00'],
    campus: 'Pocitos',
    notes: '**'
  },
  {
    id: 'arqcomp1',
    name: 'Arquitectura del Computador I',
    year: 1,
    semester: 2,
    startDate: '2025-08-05',
    endDate: '2025-11-27',
    days: ['M', 'J'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-10-04 09:00', '2025-12-03 19:00'],
    campus: 'Pocitos'
  },
  {
    id: 'admin1',
    name: 'Administración I',
    year: 1,
    semester: 2,
    startDate: '2025-08-06',
    endDate: '2025-11-28',
    days: ['X', 'V'],
    schedule: { start: '18:00', end: '19:45' }, // M
    schedule2: { start: '20:00', end: '21:45' }, // V
    evaluations: ['2025-10-03 19:00', '2025-12-05 19:00'],
    campus: 'Pocitos',
    notes: '**'
  },
  {
    id: 'taller1',
    name: 'Taller I',
    year: 1,
    semester: 2,
    startDate: '2025-01-01', // Verano 2025
    endDate: '2025-12-31',
    days: [],
    schedule: null,
    evaluations: [],
    campus: 'Pocitos',
    notes: '*',
    toDefine: true
  },

  // SEGUNDO AÑO - Primer Semestre
  {
    id: 'prog3',
    name: 'Programación III',
    year: 2,
    semester: 1,
    startDate: '2025-03-17',
    endDate: '2025-07-16',
    days: ['L', 'X'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-05-20 19:00', '2025-07-23 19:00'],
    campus: 'Pocitos',
    notes: '*'
  },
  {
    id: 'matdis2',
    name: 'Matemática Discreta II',
    year: 2,
    semester: 1,
    startDate: '2025-03-17',
    endDate: '2025-07-16',
    days: ['L', 'X'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-05-21 19:00', '2025-07-29 19:00'],
    campus: 'Pocitos'
  },
  {
    id: 'bd1',
    name: 'Bases de Datos I',
    year: 2,
    semester: 1,
    startDate: '2025-03-18',
    endDate: '2025-07-17',
    days: ['M', 'J'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-05-22 19:00', '2025-07-25 19:00'],
    campus: 'Pocitos',
    notes: '* **'
  },
  {
    id: 'metodologia',
    name: 'Metodología de la Investigación',
    year: 2,
    semester: 1,
    startDate: '2025-03-21',
    endDate: '2025-07-11',
    days: ['V'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-07-28 19:00'],
    campus: 'Pocitos',
    notes: '**'
  },
  {
    id: 'arqcomp2',
    name: 'Arquitectura del Computador II',
    year: 2,
    semester: 1,
    startDate: '2025-03-18',
    endDate: '2025-07-15',
    days: ['M'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-07-30 19:00'],
    campus: 'Pocitos',
    notes: '*'
  },

  // SEGUNDO AÑO - Segundo Semestre
  {
    id: 'so2',
    name: 'Sistemas Operativos II',
    year: 2,
    semester: 2,
    startDate: '2025-08-04',
    endDate: '2025-11-26',
    days: ['L', 'X'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-09-29 19:00', '2025-12-01 19:00'],
    campus: 'Pocitos',
    notes: '*'
  },
  {
    id: 'negociacion',
    name: 'Teoría y Práctica de la Negociación',
    year: 2,
    semester: 2,
    startDate: '2025-08-06',
    endDate: '2025-11-26',
    days: ['X'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-12-03 19:00'],
    campus: 'Pocitos'
  },
  {
    id: 'prog4',
    name: 'Programación IV',
    year: 2,
    semester: 2,
    startDate: '2025-08-05',
    endDate: '2025-11-27',
    days: ['M', 'J'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-10-02 19:00', '2025-12-06 09:00'],
    campus: 'Pocitos',
    notes: '*'
  },
  {
    id: 'analisis2',
    name: 'Análisis Matemático II',
    year: 2,
    semester: 2,
    startDate: '2025-08-05',
    endDate: '2025-11-27',
    days: ['M', 'J'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-10-03 19:00', '2025-12-08 19:00'],
    campus: 'Pocitos'
  },
  {
    id: 'redes1',
    name: 'Redes de Computadores I',
    year: 2,
    semester: 2,
    startDate: '2025-08-08',
    endDate: '2025-11-28',
    days: ['V'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-12-05 19:00'],
    campus: 'Pocitos',
    notes: '*'
  },
  {
    id: 'taller2',
    name: 'Taller II',
    year: 2,
    semester: 2,
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    days: [],
    schedule: null,
    evaluations: [],
    campus: 'Pocitos',
    notes: '*',
    toDefine: true
  },

  // TERCER AÑO - Primer Semestre
  {
    id: 'redes2',
    name: 'Redes de Computadores II',
    year: 3,
    semester: 1,
    startDate: '2025-03-17',
    endDate: '2025-07-16',
    days: ['L', 'X'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-05-20 19:00', '2025-07-23 19:00'],
    campus: 'Pocitos'
  },
  {
    id: 'bd2',
    name: 'Bases de Datos II',
    year: 3,
    semester: 1,
    startDate: '2025-03-17',
    endDate: '2025-07-16',
    days: ['L', 'X'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-05-22 19:00', '2025-07-25 19:00'],
    campus: 'Pocitos',
    notes: '*'
  },
  {
    id: 'analgo',
    name: 'Análisis de Algoritmos',
    year: 3,
    semester: 1,
    startDate: '2025-03-18',
    endDate: '2025-07-17',
    days: ['M', 'J'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-05-24 09:00', '2025-07-26 09:00'],
    campus: 'Pocitos'
  },
  {
    id: 'admin2',
    name: 'Administración II',
    year: 3,
    semester: 1,
    startDate: '2025-03-21',
    endDate: '2025-07-11',
    days: ['V'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-07-28 19:00'],
    campus: 'Pocitos'
  },
  {
    id: 'ingsw1',
    name: 'Ingeniería de Software I',
    year: 3,
    semester: 1,
    startDate: '2025-03-21',
    endDate: '2025-07-11',
    days: ['V'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-07-30 19:00'],
    campus: 'Pocitos',
    notes: '*'
  },

  // TERCER AÑO - Segundo Semestre
  {
    id: 'orgmetodos',
    name: 'Organización y Métodos',
    year: 3,
    semester: 2,
    startDate: '2025-08-04',
    endDate: '2025-11-24',
    days: ['L'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-12-02 19:00'],
    campus: 'Pocitos',
    notes: '**'
  },
  {
    id: 'ingsw2',
    name: 'Ingeniería de Software II',
    year: 3,
    semester: 2,
    startDate: '2025-08-04',
    endDate: '2025-11-26',
    days: ['L', 'X'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-09-30 19:00', '2025-12-04 19:00'],
    campus: 'Pocitos',
    notes: '*'
  },
  {
    id: 'calculo',
    name: 'Cálculo Numérico',
    year: 3,
    semester: 2,
    startDate: '2025-08-05',
    endDate: '2025-11-27',
    days: ['M', 'J'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-10-02 19:00', '2025-12-06 09:00'],
    campus: 'Pocitos'
  },
  {
    id: 'bd3',
    name: 'Bases de Datos III',
    year: 3,
    semester: 2,
    startDate: '2025-08-05',
    endDate: '2025-11-27',
    days: ['M', 'J'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-10-04 09:00', '2025-12-09 19:00'],
    campus: 'Pocitos',
    notes: '*'
  },
  {
    id: 'estadistica',
    name: 'Introducción a la Estadística',
    year: 3,
    semester: 2,
    startDate: '2025-08-08',
    endDate: '2025-11-28',
    days: ['V'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-12-05 19:00'],
    campus: 'Pocitos',
    notes: '* **'
  },
  {
    id: 'proyecto',
    name: 'Proyecto',
    year: 3,
    semester: 2,
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    days: [],
    schedule: null,
    evaluations: [],
    campus: 'Pocitos',
    notes: '*',
    toDefine: true
  },

  // CUARTO AÑO - Primer Semestre
  {
    id: 'topavanz1',
    name: 'Tópicos Avanzados de Computación I (CyTRRCA)',
    year: 4,
    semester: 1,
    startDate: '2025-03-17',
    endDate: '2025-07-14',
    days: ['L'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-07-31 19:00'],
    campus: 'Pocitos'
  },
  {
    id: 'orgempresas',
    name: 'Organización de Empresas',
    year: 4,
    semester: 1,
    startDate: '2025-03-17',
    endDate: '2025-07-16',
    days: ['L', 'X'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-05-20 19:00', '2025-07-23 19:00'],
    campus: 'Pocitos',
    notes: '*'
  },
  {
    id: 'teoriacomp1',
    name: 'Teoría de la Computación I',
    year: 4,
    semester: 1,
    startDate: '2025-03-18',
    endDate: '2025-07-17',
    days: ['M', 'J'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-05-24 09:00', '2025-07-28 19:00'],
    campus: 'Pocitos'
  },
  {
    id: 'gestionproy',
    name: 'Gestión de Proyectos',
    year: 4,
    semester: 1,
    startDate: '2025-03-18',
    endDate: '2025-07-17',
    days: ['M', 'J'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-05-22 19:00', '2025-07-25 19:00'],
    campus: 'Pocitos',
    notes: '* **'
  },
  {
    id: 'ingreq',
    name: 'Ingeniería de Requerimientos',
    year: 4,
    semester: 1,
    startDate: '2025-03-19',
    endDate: '2025-07-11',
    days: ['X', 'V'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-05-19 19:00', '2025-07-30 19:00'],
    campus: 'Pocitos'
  },

  // CUARTO AÑO - Segundo Semestre
  {
    id: 'gestionhumana',
    name: 'Gestión Humana',
    year: 4,
    semester: 2,
    startDate: '2025-08-05',
    endDate: '2025-11-27',
    days: ['M'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-09-30 19:00', '2025-12-09 19:00'],
    campus: 'Pocitos'
  },
  {
    id: 'so3',
    name: 'Sistemas Operativos III',
    year: 4,
    semester: 2,
    startDate: '2025-08-05',
    endDate: '2025-11-27',
    days: ['M', 'J'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-10-01 19:00', '2025-12-04 19:00'],
    campus: 'Pocitos'
  },
  {
    id: 'logistica',
    name: 'Logística',
    year: 4,
    semester: 2,
    startDate: '2025-08-06',
    endDate: '2025-11-26',
    days: ['X'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-12-06 09:00'],
    campus: 'Pocitos'
  },
  {
    id: 'topavanz2',
    name: 'Tópicos Avanzados de Computación II (A. Aut.)',
    year: 4,
    semester: 2,
    startDate: '2025-08-08',
    endDate: '2025-11-28',
    days: ['V'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-12-08 19:00'],
    campus: 'Pocitos'
  },
  {
    id: 'teoriacomp2',
    name: 'Teoría de la Computación II',
    year: 4,
    semester: 2,
    startDate: '2025-08-08',
    endDate: '2025-11-28',
    days: ['V'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-12-01 19:00'],
    campus: 'Pocitos'
  },

  // QUINTO AÑO - Primer Semestre
  {
    id: 'dirempresarial',
    name: 'Dirección Empresarial',
    year: 5,
    semester: 1,
    startDate: '2025-03-17',
    endDate: '2025-07-16',
    days: ['L', 'J'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-05-20 19:00', '2025-07-23 19:00'],
    campus: 'Pocitos',
    notes: '**'
  },
  {
    id: 'topavanz3',
    name: 'Tópicos Avanzados de Computación III - (Inv. Op.)',
    year: 5,
    semester: 1,
    startDate: '2025-03-21',
    endDate: '2025-07-11',
    days: ['V'],
    schedule: { start: '20:00', end: '21:45' },
    evaluations: ['2025-07-26 09:00'],
    campus: 'Pocitos',
    notes: '**'
  },
  {
    id: 'electiva1',
    name: 'Electiva Técnica I',
    year: 5,
    semester: 1,
    startDate: null,
    endDate: null,
    days: [],
    schedule: null,
    evaluations: [],
    campus: 'Pocitos',
    notes: '***',
    toDefine: true
  },
  {
    id: 'electiva2',
    name: 'Electiva Técnica II',
    year: 5,
    semester: 1,
    startDate: null,
    endDate: null,
    days: [],
    schedule: null,
    evaluations: [],
    campus: 'Pocitos',
    notes: '***',
    toDefine: true
  },
  {
    id: 'electiva3',
    name: 'Electiva Técnica III',
    year: 5,
    semester: 1,
    startDate: null,
    endDate: null,
    days: [],
    schedule: null,
    evaluations: [],
    campus: 'Pocitos',
    notes: '***',
    toDefine: true
  },

  // QUINTO AÑO - Segundo Semestre
  {
    id: 'etica',
    name: 'Ética Profesional',
    year: 5,
    semester: 2,
    startDate: '2025-08-05',
    endDate: '2025-11-25',
    days: ['M'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-12-06 09:00'],
    campus: 'Pocitos',
    notes: '**'
  },
  {
    id: 'consultoria',
    name: 'Consultoría Empresarial',
    year: 5,
    semester: 2,
    startDate: '2025-08-08',
    endDate: '2025-11-28',
    days: ['V'],
    schedule: { start: '18:00', end: '19:45' },
    evaluations: ['2025-12-08 19:00'],
    campus: 'Pocitos',
    notes: '**'
  }
];

// Helper functions
export const getSubjectsByYearAndSemester = (year, semester) => {
  return subjects.filter(s => s.year === year && s.semester === semester && !s.toDefine);
};

export const getAllYears = () => {
  return [...new Set(subjects.map(s => s.year))].sort();
};

export const getAllSemesters = () => {
  return [1, 2];
};

