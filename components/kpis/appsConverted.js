import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

import { DISPATCH_ACTION } from "../constants";

export function AppsConverted({ dispatch, formState }) {
  const [appsConvertedKpi, setAppsConvertedKpi] = useState('');
  const [appsConvertedTarget, setAppsConvertedTarget] = useState('');

  const addAppsConvertedData = () => {
    dispatch({type: DISPATCH_ACTION.addAppsConvertedKpi, payload: { appsConvertedKpi: appsConvertedKpi }})
    dispatch({type: DISPATCH_ACTION.addAppsConvertedTarget, payload: { appsConvertedTarget: appsConvertedTarget }})
    setAppsConvertedKpi('');
    setAppsConvertedTarget('');
  }


  return (
    <div className="col m-6">
      <div>
        <h3>Applications converted</h3>
      </div>
      <Form.Field>
        <label>KPI achieved</label>
        <Input
          name='appsConvertedKpi'
          value={appsConvertedKpi}
          placeholder="Input achieved here"
          onChange={(e, d) => setAppsConvertedKpi(d.value)}
        />
      </Form.Field>  
      <Form.Field>
        <label>KPI target</label>
        <Input
          name='appsConvertedTarget'
          value={appsConvertedTarget}
          placeholder="Input target here"
          onChange={(e, d) => setAppsConvertedTarget(d.value)}
        />
      </Form.Field>
        <div>
          <Button type='button' onClick={addAppsConvertedData}>Submit</Button>
        </div>
        <div>
          <p>Entered in values:</p>
          <p>KPI achieved: {formState.appsConvertedKpi}</p>
          <p>Target achieved: {formState.appsConvertedTarget}</p>
        </div>
    </div>
  );
}
