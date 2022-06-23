import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

import { DISPATCH_ACTION } from "../constants";

export function Sales({ dispatch, formState }) {
  const [salesKpi, setSalesKpi] = useState('');
  const [salesTarget, setSalesTarget] = useState('');

  const addSalesData = () => {
    dispatch({type: DISPATCH_ACTION.addSalesKpi, payload: { salesKpi: salesKpi }})
    dispatch({type: DISPATCH_ACTION.addSalesTarget, payload: { salesTarget: salesTarget }})
    setSalesKpi('');
    setSalesTarget('');
  }

  return (
    <div className="col m-6 tile">
      <div>
        <h3>Sales Targets</h3>
      </div>
      <Form.Field>
        <label>KPI achieved</label>
        <Input
          name='salesKpi'
          value={salesKpi}
          placeholder="Input achieved here"
          onChange={(e, d) => setSalesKpi(d.value)}
        />
      </Form.Field>  
      <Form.Field>
        <label>KPI target</label>
        <Input
          name='salesTarget'
          value={salesTarget}
          placeholder="Input target here"
          onChange={(e, d) => setSalesTarget(d.value)}
        />
      </Form.Field>
        <div>
          <Button type='button' onClick={addSalesData}>Submit</Button>
        </div>
        <div>
          <p>Entered in values:</p>
          <p>KPI achieved: {formState.salesKpi}</p>
          <p>Target achieved: {formState.salesTarget}</p>
        </div>
    </div>
  );
}
