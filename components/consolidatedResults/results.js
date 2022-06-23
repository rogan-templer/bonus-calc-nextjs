import { isNaN } from "lodash";
import React from "react";
import { Button } from "semantic-ui-react";

export function Results({ formState }) {


  const salesResult = ((parseInt(formState.salesKpi) / parseInt(formState.salesTarget)) * 30) / 100;
  const appsConvertedResult = ((parseInt(formState.appsConvertedKpi) / parseInt(formState.appsConvertedTarget)) * 20) / 100;
  const freeCallsResult = ((parseInt(formState.freeCallsKpi) / parseInt(formState.freeCallsTarget)) * 10) / 100;
  const npsResult = ((parseInt(formState.npsKpi) / parseInt(formState.npsTarget)) * 20) / 100;
  const totalCallsResult = ((parseInt(formState.totalCallsKpi) / parseInt(formState.totalCallsTarget)) * 10) / 100;

  const overallResult = (salesResult + appsConvertedResult + freeCallsResult + npsResult + totalCallsResult) * 100;

  return (
    <div className="col m-12 results-section">
      <h2>Consolidated results:</h2>
      <h2>Results section</h2>
      <h4>{isNaN(overallResult) ? '' : Math.floor(overallResult)}%</h4>
      <span>
        <Button onClick={() => window.location.reload()}>Reset</Button>
      </span>
    </div>
  );
}
