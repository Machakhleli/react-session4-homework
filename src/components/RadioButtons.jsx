import { useState } from "react";

function RadioButtons() {
  const [contactMethod, setContactMethod] = useState("");

  return (
    <form className="mt-4 p-4 text-center border rounded-lg">
      <span className="font-semibold">Preferred contact method</span>

      <div className="flex justify-around mt-4">
        <label className="flex flex-col items-center gap-1 text-sm">
          <input
            type="radio"
            name="contactMethod"
            value="email"
            checked={contactMethod === "email"}
            onChange={(e) => setContactMethod(e.target.value)}
          />
          <span>Email</span>
        </label>

        <label className="flex flex-col items-center gap-1 text-sm">
          <input
            type="radio"
            name="contactMethod"
            value="phone"
            checked={contactMethod === "phone"}
            onChange={(e) => setContactMethod(e.target.value)}
          />
          <span>Phone</span>
        </label>

        <label className="flex flex-col items-center gap-1 text-sm">
          <input
            type="radio"
            name="contactMethod"
            value="noPreference"
            checked={contactMethod === "noPreference"}
            onChange={(e) => setContactMethod(e.target.value)}
          />
          <span>No Preference</span>
        </label>
      </div>
    </form>
  );
}

export default RadioButtons;
