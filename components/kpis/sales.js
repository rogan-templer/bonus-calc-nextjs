import React from "react";
import { Input } from "semantic-ui-react";

import { DISPATCH_ACTION } from "../constants";

export function Sales({ formState, dispatch }) {
  return (
    <div className="col m-6">
      <div>
        <h3>Sales Targets</h3>
      </div>
      <div>
        <Input placeholder="Input achieved here" />
        <Input
          placeholder="Input target here"
          onChange={(e, d) =>
            dispatch({
              type: DISPATCH_ACTION.addSalesTarget,
              payload: { salesTarget: d.value },
            })
          }
        />
      </div>
    </div>
  );
}
