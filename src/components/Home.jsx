import React, { useState } from 'react';
import SubjectSelector from './SubjectSelector';
import ScheduleTable from './ScheduleTable';
import Message from './common/Message';
import { generateValidSchedules } from '../utils/scheduleUtils';
import './Home.css';

const Home = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [validSchedules, setValidSchedules] = useState([]);

  const handleSelectionChange = (subjects) => {
    setSelectedSubjects(subjects);
    
    if (subjects.length === 0) {
      setValidSchedules([]);
      return;
    }

    // Validate same semester (only semester, not year)
    const semesters = new Set(subjects.map(s => s.semester));
    if (semesters.size > 1) {
      setValidSchedules([]);
      return;
    }

    // Generate valid schedules
    const schedules = generateValidSchedules(subjects);
    setValidSchedules(schedules);
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Generador de Horarios - UDE</h1>
        <p className="home-subtitle">
          Selecciona las asignaturas que deseas cursar y genera todos los horarios compatibles posibles.
        </p>
      </div>

      <SubjectSelector
        selectedSubjects={selectedSubjects}
        onSelectionChange={handleSelectionChange}
      />

      {selectedSubjects.length > 0 && (
        <div className="results-section">
          {validSchedules.length === 0 ? (
            <Message variant="red">
              <p>
                <strong>No se encontraron horarios compatibles.</strong>
                <br />
                Las asignaturas seleccionadas tienen conflictos de horario. 
                Intenta seleccionar una combinación diferente.
              </p>
            </Message>
          ) : (
            <>
              <Message variant="blue">
                <p>
                  Se encontraron <strong>{validSchedules.length}</strong> combinación{validSchedules.length !== 1 ? 'es' : ''} de horarios compatible{validSchedules.length !== 1 ? 's' : ''}.
                </p>
              </Message>
              <ScheduleTable schedules={validSchedules} />
            </>
          )}
        </div>
      )}

      {selectedSubjects.length === 0 && (
        <Message variant="blue">
          <p>
            <strong>Instrucciones:</strong>
            <br />
            1. Selecciona el año y semestre de las asignaturas que deseas cursar.
            <br />
            2. Marca las asignaturas que quieres incluir en tu horario.
            <br />
            3. La aplicación generará automáticamente todas las combinaciones posibles sin conflictos.
            <br />
            <br />
            <strong>Nota:</strong> Puedes seleccionar asignaturas de diferentes años, pero todas deben ser del mismo semestre. Las asignaturas seleccionadas se mantienen visibles aunque cambies de año.
          </p>
        </Message>
      )}
    </div>
  );
};

export default Home;

