import React from "react";
import { AddKpi } from "../inputs/addKpi";
import { AddTarget } from "../inputs/addTarget";

export function Nps({ formState, dispatch }) {
  return (
    <div className="col m-6">
      <div>
        <h3>Net promoter score</h3>
      </div>
      <AddKpi formState={formState} dispatch={dispatch} />
      <AddTarget formState={formState} dispatch={dispatch} />
    </div>
  );
}
