import React from "react";
import { useCustomToneContext } from "../providers/CustomToneProvider";

//import { CustomToneContext } from "../providers/CustomToneProvider";

export default function CustomTone() {
  //const { customTone, handleClick } = useContext(CustomToneContext)
  const { customTone, handleClick } = useCustomToneContext();

  return (
    <section className="custom-tone">
      <h3>3. What tone would you like the Cover Letter to have? </h3>

      <div className="tone-btns">
        <button
          className="tone-select-btns"
          value="Friendly"
          onClick={(event) => handleClick(event.target.value)}
        >
          Friendly
        </button>
        <button
          className="tone-select-btns"
          value="Professional"
          onClick={(event) => handleClick(event.target.value)}
        >
          Professional
        </button>
      </div>
    </section>
  );
}
