import React, { createContext, useContext, useReducer } from "react";

export const BonusFormContext = createContext({});

const InitialFormState = {
  target = '',
  sales = '',
  totalCalls = '',
  appsConverted = '',
  freeCalls = '',
  nps = ''
}

export function BonusCategoryLanding() {
  const [formState, dispatch] = useReducer(reducer, InitialFormState)
  
  const stateData = useContext(BonusFormContext)


}

function reducer(state, action) {
  switch (action.type) {
    case DISPATCH_ACTION.addTarget:
      return { ...state, target: action.payload.target };
    case DISPATCH_ACTION.addSales:
      return { ...state, sales: action.payload.sales };
    case DISPATCH_ACTION.addTotalCalls:
      return { ...state, totalCalls: action.payload.totalCalls };
    case DISPATCH_ACTION.addAppsConverted:
      return { ...state, appsConverted: action.payload.appsConverted };
    case DISPATCH_ACTION.addFreeCalls:
      return { ...state, freeCalls: action.payload.freeCalls };
    case DISPATCH_ACTION.addNps:
      return { ...state, nps: action.payload.nps };
  }
}
