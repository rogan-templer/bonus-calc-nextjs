import React from "react";
import { Input } from "semantic-ui-react";

import { DISPATCH_ACTION } from "../constants";

export function AddKpi({ formState, dispatch }) {
  return (
    <>
      <p>KPI Component</p>
      <Input
        placeholder="Input KPI here"
        onChange={(e, d) =>
          dispatch({
            type: DISPATCH_ACTION.addSales,
            payload: { sales: d.value },
          })
        }
      />
    </>
  );
}
