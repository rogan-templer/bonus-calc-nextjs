import React from "react";
import { Input } from "semantic-ui-react";

import { DISPATCH_ACTION } from "../constants";

export function TotalCalls({ dispatch }) {
  return (
    <div className="col m-6">
      <div>
        <h3>Total number of calls handled</h3>
      </div>
      <div>
        <Input
          placeholder="Input achieved here"
          onChange={(e, d) =>
            dispatch({
              type: DISPATCH_ACTION.addTotalCallsKpi,
              payload: { totalCallsKpi: d.value },
            })
          }
        />
        <div>
          <Input
            placeholder="Input target here"
            onChange={(e, d) =>
              dispatch({
                type: DISPATCH_ACTION.addTotalCallsTarget,
                payload: { totalCallsTarget: d.value },
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
