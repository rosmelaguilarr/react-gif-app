import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [input, setInput] = useState('')

  const handleOnChange = ({ target }) => setInput(target.value)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const inputClean = input.trim();
    if (!inputClean) return

    onAddCategory(inputClean)
    setInput('')
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        className="form-control"
        onChange={handleOnChange}
        value={input}
      />
    </form>
  );
}
