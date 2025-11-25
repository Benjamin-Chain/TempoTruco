import React, { useState, useEffect } from 'react';
import { getSubjectColor, resetColors } from '../utils/scheduleUtils';
import './ScheduleTable.css';

const ScheduleTable = ({ schedules }) => {
  const [currentScheduleIndex, setCurrentScheduleIndex] = useState(0);

  // Reset colors when schedules change
  useEffect(() => {
    if (schedules && schedules.length > 0) {
      resetColors();
    }
  }, [schedules]);

  if (!schedules || schedules.length === 0) {
    return null;
  }

  const currentSchedule = schedules[currentScheduleIndex];
  const days = ['L', 'M', 'X', 'J', 'V'];
  const dayNames = { 'L': 'Lunes', 'M': 'Martes', 'X': 'Miércoles', 'J': 'Jueves', 'V': 'Viernes' };
  const timeSlots = [
    { start: '18:00', end: '19:45', label: '18:00 - 19:45' },
    { start: '20:00', end: '21:45', label: '20:00 - 21:45' }
  ];

  // Build schedule grid
  const scheduleGrid = {};
  days.forEach(day => {
    scheduleGrid[day] = {};
    timeSlots.forEach(slot => {
      scheduleGrid[day][slot.start] = null;
    });
  });

  // Fill in subjects
  currentSchedule.forEach(subject => {
    if (!subject.schedule) return;
    
    subject.days.forEach(day => {
      if (scheduleGrid[day]) {
        // Handle subjects with schedule2 (different schedule on last day)
        let schedule = subject.schedule;
        if (subject.schedule2 && subject.days.indexOf(day) === subject.days.length - 1) {
          schedule = subject.schedule2;
        }
        
        if (schedule && scheduleGrid[day][schedule.start] === null) {
          scheduleGrid[day][schedule.start] = subject;
        }
      }
    });
  });

  return (
    <div className="schedule-table-container">
      <div className="schedule-header">
        <h2>Horarios Generados</h2>
        {schedules.length > 1 && (
          <div className="schedule-navigation">
            <button
              onClick={() => setCurrentScheduleIndex(Math.max(0, currentScheduleIndex - 1))}
              disabled={currentScheduleIndex === 0}
              className="nav-btn"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <span className="schedule-counter">
              {currentScheduleIndex + 1} / {schedules.length}
            </span>
            <button
              onClick={() => setCurrentScheduleIndex(Math.min(schedules.length - 1, currentScheduleIndex + 1))}
              disabled={currentScheduleIndex === schedules.length - 1}
              className="nav-btn"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        )}
      </div>

      <div className="schedule-info">
        <p>
          <strong>{currentSchedule.length}</strong> asignatura{currentSchedule.length !== 1 ? 's' : ''} seleccionada{currentSchedule.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="schedule-table-wrapper">
        <table className="schedule-table">
          <thead>
            <tr>
              <th className="time-column">Horario</th>
              {days.map(day => (
                <th key={day}>{dayNames[day]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(slot => (
              <tr key={slot.start}>
                <td className="time-cell">{slot.label}</td>
                {days.map(day => {
                  const subject = scheduleGrid[day][slot.start];
                  return (
                    <td key={day} className="schedule-cell">
                      {subject ? (
                        <div
                          className="subject-block"
                          style={{ backgroundColor: getSubjectColor(subject.id) }}
                        >
                          <div className="subject-name">{subject.name}</div>
                          <div className="subject-year">{subject.year}° Año</div>
                        </div>
                      ) : (
                        <div className="empty-cell">-</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="schedule-legend">
        <h3>Asignaturas en este horario:</h3>
        <div className="legend-items">
          {currentSchedule.map(subject => (
            <div key={subject.id} className="legend-item">
              <div
                className="legend-color"
                style={{ backgroundColor: getSubjectColor(subject.id) }}
              ></div>
              <span>{subject.name} ({subject.year}° Año)</span>
            </div>
          ))}
        </div>
        <div className="color-legend">
          <h4>Leyenda de colores:</h4>
          <div className="legend-items">
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#4A90E2' }}></div>
              <span>Asignaturas sin conflictos</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#ffc107' }}></div>
              <span>Asignaturas con conflictos de horario</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTable;

