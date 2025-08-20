import { useState } from "react";

function RadioButtons() {
  return (
    <form>
      <label htmlFor="email" className="flex text-sm">
        <input type="radio" name="email" className="size-4" />
        <span>Email</span>
      </label>
      <label htmlFor="phone">
        <input type="radio" name="phone" />
        <span>Phone</span>
      </label>
      <label htmlFor="noPreference">
        <input type="radio" name="noPreference" />
        <span>No Preference</span>
      </label>
    </form>
  );
}
// need to syle all radio buttons in index.css
export default RadioButtons;
