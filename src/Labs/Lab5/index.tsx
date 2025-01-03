import Session from "../../Kanbas/Account/Session";
import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Lab5() {
  return (
    <Session>
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href={`${REMOTE_SERVER}/lab5/welcome`}       
           className="list-group-item">
           Welcome
        </a>
      </div><hr/>
      <EnvironmentVariables />
      <PathParameters/>
      <QueryParameters/>
      <WorkingWithObjects/>
      <WorkingWithArrays/>
      <HttpClient/>
      <WorkingWithObjectsAsynchronously/>
      <WorkingWithArraysAsynchronously/>
    </div>
    </Session>
    
  );
}
