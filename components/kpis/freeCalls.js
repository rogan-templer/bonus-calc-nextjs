import React from "react";
import { Input } from "semantic-ui-react";

import { DISPATCH_ACTION } from "../constants";

export function FreeCalls({ dispatch }) {
  return (
    <div className="col m-6">
      <div>
        <h3>Call availability</h3>
      </div>
      <div>
        <Input
          placeholder="Input achieved here"
          onChange={(e, d) =>
            dispatch({
              type: DISPATCH_ACTION.addFreeCallsKpi,
              payload: { freeCallsKpi: d.value },
            })
          }
        />
        <div>
          <Input
            placeholder="Input target here"
            onChange={(e, d) =>
              dispatch({
                type: DISPATCH_ACTION.addFreeCallsTarget,
                payload: { freeCallsTarget: d.value },
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
