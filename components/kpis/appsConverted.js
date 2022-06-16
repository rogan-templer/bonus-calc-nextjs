import React from "react";
import { Input } from "semantic-ui-react";
import { DISPATCH_ACTION } from "../constants";

export function AppsConverted({ dispatch }) {
  return (
    <div className="col m-6">
      <div>
        <h3>Applications converted</h3>
      </div>
      <div>
        <Input
          placeholder="Input achieved here"
          onChange={(e, d) =>
            dispatch({
              type: DISPATCH_ACTION.addAppsConvertedKpi,
              payload: { appsConvertedKpi: d.value },
            })
          }
        />
        <div>
          <Input
            placeholder="Input target here"
            onChange={(e, d) =>
              dispatch({
                type: DISPATCH_ACTION.addAppsConvertedTarget,
                payload: { appsConvertedTarget: d.value },
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
