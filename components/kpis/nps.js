import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

import { DISPATCH_ACTION } from "../constants";

export function Nps({ dispatch, formState }) {
  const [npsKpi, setNpsKpi] = useState('');
  const [npsTarget, setNpsTarget] = useState('');

  const addNpsData = () => {
    dispatch({type: DISPATCH_ACTION.addNpsKpi, payload: { npsKpi: npsKpi }})
    dispatch({type: DISPATCH_ACTION.addNpsTarget, payload: { npsTarget: npsTarget }})
    setNpsKpi('');
    setNpsTarget('');
  }

  return (
    <div className="col m-6 tile">
      <div>
        <h3>NPS Targets</h3>
      </div>
      <Form.Field>
        <label>KPI achieved</label>
        <Input
          name='npsKpi'
          value={npsKpi}
          placeholder="Input achieved here"
          onChange={(e, d) => setNpsKpi(d.value)}
        />
      </Form.Field>  
      <Form.Field>
        <label>KPI target</label>
        <Input
          name='npsTarget'
          value={npsTarget}
          placeholder="Input target here"
          onChange={(e, d) => setNpsTarget(d.value)}
        />
      </Form.Field>
        <div>
          <Button type='button' onClick={addNpsData}>Submit</Button>
        </div>
        <div>
          <p>Entered in values:</p>
          <p>KPI achieved: {formState.npsKpi}</p>
          <p>Target achieved: {formState.npsTarget}</p>
        </div>
    </div>
  );
}
