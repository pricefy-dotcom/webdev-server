import { v4 as uuidv4 } from "uuid";

export default function AssignmentsDao(db) {
  const findAssignmentsForCourse = (courseId) =>
    db.assignments.filter((assignment) => assignment.course === courseId);
  const createAssignment = (assignment) => {
    const newAssignment = { ...assignment, _id: uuidv4() };
    db.assignments = [...db.assignments, newAssignment];
    return newAssignment;
  };
  const updateAssignment = (assignmentId, assignmentUpdates) => {
    const assignment = db.assignments.find((a) => a._id === assignmentId);
    if (!assignment) return null;
    Object.assign(assignment, assignmentUpdates);
    return assignment;
  };
  const deleteAssignment = (assignmentId) => {
    db.assignments = db.assignments.filter((a) => a._id !== assignmentId);
  };
  return {
    findAssignmentsForCourse,
    createAssignment,
    updateAssignment,
    deleteAssignment,
  };
}