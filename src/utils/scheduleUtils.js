/**
 * Utility functions for schedule conflict detection and generation
 */

// Map days to numbers for easier comparison
const DAY_MAP = {
  'L': 0, // Monday (Lunes)
  'M': 1, // Tuesday (Martes)
  'X': 2, // Wednesday (Miércoles)
  'J': 3, // Thursday (Jueves)
  'V': 4  // Friday (Viernes)
};

/**
 * Convert time string (HH:MM) to minutes since midnight
 */
const timeToMinutes = (timeStr) => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
};

/**
 * Check if two time ranges overlap
 */
const timeRangesOverlap = (start1, end1, start2, end2) => {
  const start1Min = timeToMinutes(start1);
  const end1Min = timeToMinutes(end1);
  const start2Min = timeToMinutes(start2);
  const end2Min = timeToMinutes(end2);
  
  return start1Min < end2Min && start2Min < end1Min;
};

/**
 * Check if two subjects have a schedule conflict
 */
export const hasConflict = (subject1, subject2) => {
  // If either subject has no schedule, no conflict
  if (!subject1.schedule || !subject2.schedule) {
    return false;
  }

  // Check if they share any common day
  const commonDays = subject1.days.filter(day => subject2.days.includes(day));
  
  if (commonDays.length === 0) {
    return false; // No common days, no conflict
  }

  // Check time overlap for each common day
  for (const day of commonDays) {
    // Get the schedule for this day
    let schedule1 = subject1.schedule;
    let schedule2 = subject2.schedule;
    
    // Handle subjects with different schedules on different days (like Admin I)
    // Check if this day is the last day and subject has schedule2
    const dayIndex1 = subject1.days.indexOf(day);
    const dayIndex2 = subject2.days.indexOf(day);
    
    // Only use schedule2 if this specific day is the last day in the array
    if (subject1.schedule2 && dayIndex1 === subject1.days.length - 1) {
      schedule1 = subject1.schedule2;
    }
    if (subject2.schedule2 && dayIndex2 === subject2.days.length - 1) {
      schedule2 = subject2.schedule2;
    }

    if (schedule1 && schedule2) {
      // Check if time ranges overlap
      const overlaps = timeRangesOverlap(
        schedule1.start,
        schedule1.end,
        schedule2.start,
        schedule2.end
      );
      
      if (overlaps) {
        return true; // Conflict found
      }
    }
  }

  return false;
};

/**
 * Check if a set of subjects has any conflicts
 */
export const hasAnyConflict = (subjects) => {
  for (let i = 0; i < subjects.length; i++) {
    for (let j = i + 1; j < subjects.length; j++) {
      if (hasConflict(subjects[i], subjects[j])) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Get all conflicts in a set of subjects
 * Returns an array of pairs [subject1, subject2] that conflict
 */
export const getConflicts = (subjects) => {
  const conflicts = [];
  for (let i = 0; i < subjects.length; i++) {
    for (let j = i + 1; j < subjects.length; j++) {
      if (hasConflict(subjects[i], subjects[j])) {
        conflicts.push([subjects[i], subjects[j]]);
      }
    }
  }
  return conflicts;
};

/**
 * Get set of subject IDs that have conflicts
 */
export const getConflictingSubjectIds = (subjects) => {
  const conflictingIds = new Set();
  const conflicts = getConflicts(subjects);
  conflicts.forEach(([subj1, subj2]) => {
    conflictingIds.add(subj1.id);
    conflictingIds.add(subj2.id);
  });
  return conflictingIds;
};

/**
 * Generate all possible combinations of selected subjects without conflicts
 */
export const generateValidSchedules = (selectedSubjects) => {
  if (selectedSubjects.length === 0) {
    return [];
  }

  // Validate all subjects are from the same semester (only semester, not year)
  const semesters = new Set(selectedSubjects.map(s => s.semester));
  if (semesters.size > 1) {
    return []; // Different semesters selected
  }

  // Generate all combinations (power set)
  const combinations = [];
  const n = selectedSubjects.length;
  
  // Generate from 1 to n subjects (at least one subject)
  for (let mask = 1; mask < (1 << n); mask++) {
    const combination = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        combination.push(selectedSubjects[i]);
      }
    }
    
    // Check if this combination has no conflicts
    if (!hasAnyConflict(combination)) {
      combinations.push(combination);
    }
  }

  // Sort by number of subjects (descending) to show most complete schedules first
  combinations.sort((a, b) => b.length - a.length);

  return combinations;
};

/**
 * Get a color for a subject (for visualization)
 */
const colors = [
  '#4A90E2', '#50C878', '#FF6B6B', '#FFA500', '#9B59B6',
  '#1ABC9C', '#E74C3C', '#3498DB', '#F39C12', '#E91E63',
  '#00BCD4', '#8BC34A', '#FF5722', '#673AB7', '#009688'
];

let colorIndex = 0;
const subjectColors = new Map();

export const getSubjectColor = (subjectId) => {
  if (!subjectColors.has(subjectId)) {
    subjectColors.set(subjectId, colors[colorIndex % colors.length]);
    colorIndex++;
  }
  return subjectColors.get(subjectId);
};

/**
 * Reset color mapping (useful when starting a new selection)
 */
export const resetColors = () => {
  subjectColors.clear();
  colorIndex = 0;
};

