export default function ModulesDao(db) {
  const findModulesForCourse = (courseId) =>
    db.modules.filter((module) => module.course === courseId);
  return { findModulesForCourse };
}