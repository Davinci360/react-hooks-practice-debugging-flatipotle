import React, { useState } from "react";
import ProteinForm from "./ProteinForm";
import FillingForm from "./FillingForm";
import ToppingForm from "./ToppingForm";
import SideForm from "./SideForm";

const DEFAULT_STATE = {
  proteins: [], //Are our functions defined with the correct parameters?
  fillings: [],
  toppings: [],
  sides: [],
};

function Form() {
  const [formState, setFormState] = useState(DEFAULT_STATE);
// <button onClick={() => this.handleClick()}>
/*// Traditional Anonymous Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;*/
  function handleSubmit() {
    event.preventDefault();
    props.addOrder(formState); // change to a =>

    setFormState({
      ...DEFAULT_STATE,
    });
    event.target.reset();
  }

  function handleChange() {
    const itemType = event.target.name;
    const item = event.target.value;

    if (formState[itemType].includes(item)) {
      setFormState({
        ...formState,
        [itemType]: formState[itemType].filter((ingr) => ingr !== item),
      });
    } else {
      setFormState({
        ...formState,
        [itemType]: formState[itemType].concat(item),
      });
    }
  }

  return (
    <div className="ui raised container segment">
      <h1 className="ui block header">Order Form</h1>
      <form className="ui form" id="order-form" onSubmit={handleSubmit}>
        <ProteinForm
          protein={formState.protein}
          handleOnChange={handleChange}
        />

        <FillingForm
          fillings={formState.fillings}
          handleOnChange={handleChange}
        />

        <ToppingForm
          toppings={formState.toppings}
          handleOnChange={handleChange}
        />

        <SideForm sides={formState.sides} handleOnChange={handleChange} />

        <br />

        <button className="ui blue big button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
