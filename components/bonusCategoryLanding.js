import React, { createContext, useContext, useReducer } from "react";

import { Sales } from "./kpis/sales";
import { FreeCalls } from "./kpis/freeCalls";
import { TotalCalls } from "./kpis/totalCalls";
import { AppsConverted } from "./kpis/appsConverted";
import { Nps } from "./kpis/nps";
import { Form } from "semantic-ui-react";

import { DISPATCH_ACTION } from "./constants";
import { Results } from "./consolidatedResults/results";

export const BonusFormContext = createContext({});

const InitialFormState = {
  sales: [],
  // salesKpi: "",
  // salesTarget: "",
  totalCalls: [],
  // totalCallsTarget: "",
  // totalCallsKpi: "",
  appsConverted: [],
  // appsConvertedKpi: "",
  // appsConvertedTarget: "",
  freeCalls: [],
  // freeCallsTarget: "",
  // freeCallsKpi: "",
  nps: [],
  // npsTarget: "",
  // npsKpi: "",
};

//TO DO - REMOVE INPUTS COMPONENTS - EACH KPI WILL HAVE THEIR OWN INPUT FIELDS.

export function BonusCategoryLanding() {
  const [formState, dispatch] = useReducer(reducer, InitialFormState);

  const stateData = useContext(BonusFormContext);

  return (
    <>
      <h2>Here is the calculator</h2>
      <BonusFormContext.Provider value={formState}>
        {console.log(formState)}
        <Form>
          <div className="grid">
            <Sales formState={formState} dispatch={dispatch} />
            <FreeCalls formState={formState} dispatch={dispatch} />
            <TotalCalls formState={formState} dispatch={dispatch} />
            <AppsConverted formState={formState} dispatch={dispatch} />
            <Nps formState={formState} dispatch={dispatch} />
          </div>
          <div>
            <h2>Consolidated results:</h2>
            <Results formState={formState} />
          </div>
        </Form>
      </BonusFormContext.Provider>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case DISPATCH_ACTION.sales: 
      return { ...state, sales: action.payload }
    // case DISPATCH_ACTION.addSalesTarget:
    //   return { ...state, salesTarget: action.payload.salesTarget };
    // case DISPATCH_ACTION.addSalesKpi:
    //   return { ...state, salesKpi: action.payload.salesKpi };
    case DISPATCH_ACTION.totalCalls: 
      return { ...state, totalCalls: action.payload }
    // case DISPATCH_ACTION.addTotalCallsTarget:
    //   return { ...state, totalCallsTarget: action.payload.totalCallsTarget };
    // case DISPATCH_ACTION.addTotalCallsKpi:
    //   return { ...state, totalCallsKpi: action.payload.totalCallsKpi };
    case DISPATCH_ACTION.appsConverted: 
      return { ...state, appsConverted: action.payload }
    // case DISPATCH_ACTION.addAppsConvertedTarget:
    //   return {
    //     ...state,
    //     appsConvertedTarget: action.payload.appsConvertedTarget,
    //   };
    // case DISPATCH_ACTION.addAppsConvertedKpi:
    //   return { ...state, appsConvertedKpi: action.payload.appsConvertedKpi };
    case DISPATCH_ACTION.freeCalls: 
      return { ...state, freeCalls: action.payload }
    // case DISPATCH_ACTION.addFreeCallsTarget:
    //   return { ...state, freeCallsTarget: action.payload.freeCallsTarget };
    // case DISPATCH_ACTION.addFreeCallsKpi:
    //   return { ...state, freeCallsKpi: action.payload.freeCallsKpi };
    case DISPATCH_ACTION.nps: 
      return { ...state, nps: action.payload }
    // case DISPATCH_ACTION.addNpsTarget:
    //   return { ...state, npsTarget: action.payload.npsTarget };
    // case DISPATCH_ACTION.addNpsKpi:
    //   return { ...state, npsKpi: action.payload.npsKpi };
  }
}
