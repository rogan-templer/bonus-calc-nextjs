import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

import { DISPATCH_ACTION } from "../constants";

export function TotalCalls({ dispatch, formState }) {
  const [totalCallsKpi, setTotalCallsKpi] = useState('');
  const [totalCallsTarget, setTotalCallsTarget] = useState('');

  const addTotalCallsData = () => {
    dispatch({type: DISPATCH_ACTION.totalCalls, payload: [...formState.totalCalls, { totalCallsKpi: totalCallsKpi, totalCallsTarget: totalCallsTarget }]})
    setTotalCallsKpi('');
    setTotalCallsTarget('');
  }

  return (
    <div className="col m-6">
      <div>
        <h3>Sales Targets</h3>
      </div>
      <Form.Field>
        <label>KPI achieved</label>
        <Input
          name='totalCallsKpi'
          value={totalCallsKpi}
          placeholder="Input achieved here"
          onChange={(e, d) => setTotalCallsKpi(d.value)}
        />
      </Form.Field>  
      <Form.Field>
        <label>KPI target</label>
        <Input
          name='totalCallsTarget'
          value={totalCallsTarget}
          placeholder="Input target here"
          onChange={(e, d) => setTotalCallsTarget(d.value)}
        />
      </Form.Field>
        <div>
          <Button type='button' onClick={addTotalCallsData}>Submit</Button>
        </div>
    </div>
  );
}
