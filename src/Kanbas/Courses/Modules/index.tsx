import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButton";
import React, { useEffect, useState } from "react";
import * as coursesClient from "../client";


import { useParams } from "react-router";
import * as db from "../../Database";

import LessonControlButtons from "./LessonControlButtons";
import { addModule, editModule, updateModule, deleteModule, setModules }
  from "./reducer";

import { useSelector, useDispatch } from "react-redux";

import * as modulesClient from "./client";


export default function Modules() {
//   const { cid } = useParams();
//   const [moduleName, setModuleName] = useState("");
//   const { modules } = useSelector((state: any) => state.modulesReducer);
//   const dispatch = useDispatch();
//   const saveModule = async (module: any) => {
//     await modulesClient.updateModule(module);
//     dispatch(updateModule(module));
//   };

//   const removeModule = async (moduleId: string) => {
//     await modulesClient.deleteModule(moduleId);
//     dispatch(deleteModule(moduleId));
//   };
  const { cid } = useParams();
const [moduleName, setModuleName] = useState("");
const { modules } = useSelector((state: any) => state.modulesReducer);
const dispatch = useDispatch();
const fetchModules = async () => {
  const modules = await coursesClient.findModulesForCourse(cid as string);
  dispatch(setModules(modules));
};
useEffect(() => {
  fetchModules();
}, []);


// Save (update) a module for the specific course
const saveModule = async (module: any) => {
  await modulesClient.updateModule(module);
  dispatch(updateModule(module));
};


// Remove a module for the specific course
const removeModule = async (moduleId: String) => {
  await modulesClient.deleteModule(moduleId);
  dispatch(deleteModule(moduleId));
  console.log("module has been deleted")
};

 
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };




  
  return (
      <div>

  <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={ createModuleForCourse
  }/><br /><br /><br /><br />

<ul id="wd-modules" className="list-group rounded-0">
        {modules
          
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {!module.editing && module.name}
      { module.editing && (
        <input className="form-control w-50 d-inline-block"
               onChange={(e) =>dispatch(
                updateModule({ ...module, name: e.target.value })
              )
}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                  saveModule({ ...module, editing: false });


                 }
               }}
               defaultValue={module.name}/>
      )}
 <ModuleControlButtons  moduleId={module.moduleId}
       deleteModule={(moduleId) => removeModule(moduleId)}
       

        editModule={(moduleId) => dispatch(editModule(moduleId))} />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
</div>

     
  );}
  