import React from "react";
import { Input } from "semantic-ui-react";

import { DISPATCH_ACTION } from "../constants";

export function Nps({ dispatch }) {
  return (
    <div className="col m-6">
      <div>
        <h3>Net promoter score</h3>
      </div>
      <div>
        <Input
          placeholder="Input achieved here"
          onChange={(e, d) =>
            dispatch({
              type: DISPATCH_ACTION.addNpsKpi,
              payload: { npsKpi: d.value },
            })
          }
        />
        <div>
          <Input
            placeholder="Input target here"
            onChange={(e, d) =>
              dispatch({
                type: DISPATCH_ACTION.addNpsTarget,
                payload: { npsTarget: d.value },
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
