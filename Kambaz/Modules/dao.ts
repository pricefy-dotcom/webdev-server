import { v4 as uuidv4 } from "uuid";

export default function ModulesDao(db) {
  const findModulesForCourse = (courseId) =>
    db.modules.filter((module) => module.course === courseId);
  const createModule = (module) => {
    const newModule = { ...module, _id: uuidv4() };
    db.modules = [...db.modules, newModule];
    return newModule;
  };
  const deleteModule = (moduleId) => {
    db.modules = db.modules.filter((module) => module._id !== moduleId);
  };
  const updateModule = (moduleId, moduleUpdates) => {
    const module = db.modules.find((module) => module._id === moduleId);
    Object.assign(module, moduleUpdates);
    return module;
  };
  return { findModulesForCourse, createModule, deleteModule, updateModule };
}