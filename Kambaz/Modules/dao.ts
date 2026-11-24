import { v4 as uuidv4 } from "uuid";

export default function ModulesDao(db) {
  const findModulesForCourse = (courseId) =>
    db.modules.filter((module) => module.course === courseId);
  const createModule = (module) => {
    const newModule = { ...module, _id: uuidv4() };
    db.modules = [...db.modules, newModule];
    return newModule;
  };
  return { findModulesForCourse, createModule };
}