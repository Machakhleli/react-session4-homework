function Checkbox({ checked, onChange }) {
  return (
    <form>
      <label className="flex gap-4 text-sm justify-center items-center target:_blank">
        <input
          type="checkbox"
          name="checkbox"
          className="size-4 cursor-pointer"
          // checked={checked}
          onChange={onChange}
        />
        <span className="text-sm flex gap-2">
          I agree to the stron
          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="text-blue-500 underline"
          >
            terms and conditions
          </a>
        </span>
      </label>
    </form>
  );
}

export default Checkbox;
