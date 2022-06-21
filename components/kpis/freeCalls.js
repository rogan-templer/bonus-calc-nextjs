import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

import { DISPATCH_ACTION } from "../constants";

export function FreeCalls({ dispatch, formState }) {
  const [freeCallsKpi, setFreeCallsKpi] = useState('');
  const [freeCallsTarget, setFreeCallsTarget] = useState('');

  const addFreeCallsData = () => {
    dispatch({type: DISPATCH_ACTION.addFreeCallsKpi, payload: { freeCallsKpi: freeCallsKpi }})
    dispatch({type: DISPATCH_ACTION.addFreeCallsTarget, payload: { freeCallsTarget: freeCallsTarget }})
    setFreeCallsKpi('');
    setFreeCallsTarget('');
  }

  return (
    <div className="col m-6 tile">
      <div>
        <h3>Call availability</h3>
      </div>
      <Form.Field>
        <label>KPI achieved</label>
        <Input
          name='freeCallsKpi'
          value={freeCallsKpi}
          placeholder="Input achieved here"
          onChange={(e, d) => setFreeCallsKpi(d.value)}
        />
      </Form.Field>  
      <Form.Field>
        <label>KPI target</label>
        <Input
          name='freeCallsTarget'
          value={freeCallsTarget}
          placeholder="Input target here"
          onChange={(e, d) => setFreeCallsTarget(d.value)}
        />
      </Form.Field>
        <div>
          <Button type='button' onClick={addFreeCallsData}>Submit</Button>
        </div>
        <div>
          <p>Entered in values:</p>
          <p>KPI achieved: {formState.freeCallsKpi}</p>
          <p>Target achieved: {formState.freeCallsTarget}</p>
        </div>
    </div>
  );
}
