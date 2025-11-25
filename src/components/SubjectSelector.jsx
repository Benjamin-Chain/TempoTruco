import React, { useState, useEffect } from 'react';
import { subjects, getAllYears } from '../data/subjects';
import { getConflictingSubjectIds } from '../utils/scheduleUtils';
import Message from './common/Message';
import './SubjectSelector.css';

const SubjectSelector = ({ selectedSubjects, onSelectionChange }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [availableSubjects, setAvailableSubjects] = useState([]);
  const [checkedSubjects, setCheckedSubjects] = useState(new Set());

  const years = getAllYears();

  // Update available subjects when year/semester changes
  useEffect(() => {
    if (selectedYear && selectedSemester) {
      const filtered = subjects.filter(
        s => s.year === selectedYear && 
        s.semester === selectedSemester && 
        !s.toDefine
      );
      setAvailableSubjects(filtered);
    } else {
      setAvailableSubjects([]);
    }
  }, [selectedYear, selectedSemester]);

  // Update checked subjects based on all selected subjects (not just current year)
  useEffect(() => {
    const selectedIds = new Set(selectedSubjects.map(s => s.id));
    setCheckedSubjects(selectedIds);
  }, [selectedSubjects]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    if (!selectedSemester) {
      setSelectedSemester(1); // Default to first semester
    }
  };

  const handleSemesterChange = (semester) => {
    setSelectedSemester(semester);
  };

  const handleSubjectToggle = (subject) => {
    // Get all currently selected subjects from parent
    const selectedIds = new Set(selectedSubjects.map(s => s.id));
    
    // Toggle this subject
    if (selectedIds.has(subject.id)) {
      selectedIds.delete(subject.id);
    } else {
      selectedIds.add(subject.id);
    }
    
    // Get all selected subjects from the full subjects list
    const allSelected = subjects.filter(s => selectedIds.has(s.id) && !s.toDefine);
    
    // Validate same semester (only semester, not year)
    if (allSelected.length > 0) {
      const semesters = new Set(allSelected.map(s => s.semester));
      if (semesters.size > 1) {
        // Different semesters - don't allow this selection
        alert('No puedes seleccionar asignaturas de diferentes semestres. Por favor, deselecciona las asignaturas de otro semestre primero.');
        return;
      }
    }
    
    // Update parent with all selected subjects
    onSelectionChange(allSelected);
  };

  const formatDays = (days) => {
    const dayNames = { 'L': 'Lun', 'M': 'Mar', 'X': 'Mié', 'J': 'Jue', 'V': 'Vie' };
    return days.map(d => dayNames[d] || d).join(', ');
  };

  // Get conflicting subject IDs for visual indication
  const conflictingIds = selectedSubjects.length > 0 
    ? getConflictingSubjectIds(selectedSubjects)
    : new Set();

  return (
    <div className="subject-selector">
      <h2>Seleccionar Asignaturas</h2>
      
      <div className="filters">
        <div className="filter-group">
          <label>Año:</label>
          <select 
            value={selectedYear || ''} 
            onChange={(e) => handleYearChange(Number(e.target.value))}
            className="filter-select"
          >
            <option value="">Seleccionar año</option>
            {years.map(year => (
              <option key={year} value={year}>{year}° Año</option>
            ))}
          </select>
        </div>

        {selectedYear && (
          <div className="filter-group">
            <label>Semestre:</label>
            <div className="semester-buttons">
              <button
                className={`semester-btn ${selectedSemester === 1 ? 'active' : ''}`}
                onClick={() => handleSemesterChange(1)}
              >
                1° Semestre
              </button>
              <button
                className={`semester-btn ${selectedSemester === 2 ? 'active' : ''}`}
                onClick={() => handleSemesterChange(2)}
              >
                2° Semestre
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Show selected subjects from all years */}
      {selectedSubjects.length > 0 && (
        <div className="selected-subjects-section">
          <div className="subjects-header">
            <h3>Asignaturas Seleccionadas ({selectedSubjects.length})</h3>
            <button
              className="clear-all-btn"
              onClick={() => onSelectionChange([])}
              title="Limpiar todas las selecciones"
            >
              <i className="bi bi-x-circle"></i> Limpiar todo
            </button>
          </div>
          <div className="subjects-grid">
            {selectedSubjects.map(subject => (
              <div 
                key={subject.id} 
                className={`subject-card selected ${conflictingIds.has(subject.id) ? 'conflicting' : ''}`}
                onClick={() => handleSubjectToggle(subject)}
              >
                <div className="subject-card-header">
                  <input
                    type="checkbox"
                    checked={true}
                    onChange={() => handleSubjectToggle(subject)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <h4>{subject.name}</h4>
                  <span className="subject-year-badge">{subject.year}° Año</span>
                </div>
                <div className="subject-card-body">
                  <div className="subject-info">
                    <span className="info-item">
                      <i className="bi bi-calendar"></i>
                      {formatDays(subject.days)}
                    </span>
                    {subject.schedule && (
                      <span className="info-item">
                        <i className="bi bi-clock"></i>
                        {subject.schedule.start} - {subject.schedule.end}
                      </span>
                    )}
                    {subject.notes && (
                      <span className="info-item notes">
                        <i className="bi bi-info-circle"></i>
                        {subject.notes}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {conflictingIds.size > 0 && (
            <div className="conflict-warning">
              <i className="bi bi-exclamation-triangle"></i>
              <span>Las asignaturas marcadas en amarillo tienen conflictos de horario entre sí.</span>
            </div>
          )}
        </div>
      )}

      {selectedYear && selectedSemester && (
        <div className="subjects-list">
          {availableSubjects.length === 0 ? (
            <Message variant="blue">
              <p>No hay asignaturas disponibles para esta combinación.</p>
            </Message>
          ) : (
            <>
              <div className="subjects-header">
                <h3>Asignaturas disponibles - {selectedYear}° Año, {selectedSemester}° Semestre ({availableSubjects.length})</h3>
              </div>
              <div className="subjects-grid">
                {availableSubjects.map(subject => (
                  <div 
                    key={subject.id} 
                    className={`subject-card ${checkedSubjects.has(subject.id) ? 'selected' : ''} ${conflictingIds.has(subject.id) ? 'conflicting' : ''}`}
                    onClick={() => handleSubjectToggle(subject)}
                  >
                    <div className="subject-card-header">
                      <input
                        type="checkbox"
                        checked={checkedSubjects.has(subject.id)}
                        onChange={() => handleSubjectToggle(subject)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <h4>{subject.name}</h4>
                    </div>
                    <div className="subject-card-body">
                      <div className="subject-info">
                        <span className="info-item">
                          <i className="bi bi-calendar"></i>
                          {formatDays(subject.days)}
                        </span>
                        {subject.schedule && (
                          <span className="info-item">
                            <i className="bi bi-clock"></i>
                            {subject.schedule.start} - {subject.schedule.end}
                          </span>
                        )}
                        {subject.notes && (
                          <span className="info-item notes">
                            <i className="bi bi-info-circle"></i>
                            {subject.notes}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {!selectedYear && (
        <Message variant="blue">
          <p>Selecciona un año y semestre para ver las asignaturas disponibles.</p>
        </Message>
      )}
    </div>
  );
};

export default SubjectSelector;

