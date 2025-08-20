function Checkbox() {
  return (
    <div className="flex gap-4 text-sm justify-center items-center cursor-pointer target:_blank">
      <input type="checkbox" name="checkbox" className="size-4" />
      <a href="https://tailwindcss.com" target="_blank">
        "I agree to the terms and conditions"
      </a>
    </div>
  );
}

export default Checkbox;
