import React from "react";
import { Input } from "semantic-ui-react";

import { DISPATCH_ACTION } from "../constants";

export function AddTarget({ formState, dispatch }) {
  return (
    <div>
      <p>Target Component</p>
      <Input
        placeholder="Input target here"
      />
    </div>
  );
}
