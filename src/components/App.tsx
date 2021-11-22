import React from "react";
import { FormBlock } from './Form';

export const App = (): JSX.Element => {

  return (
    <div>
      <h2>Cyrillic to latin script converter</h2>
      <p>
        "Englify" option will convert cyrillic text into 
        &nbsp;
        <a target="_blank"
          href="https://en.wikipedia.org/wiki/BGN/PCGN_romanization">BGN/PCGN</a>
      </p>
      <FormBlock />
    </div>
  );
}