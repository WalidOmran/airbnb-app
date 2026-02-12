const Select = ({options,properties}) => {
    const { id, value, onChange, name, className } = properties;
    return (
      <select
        id={id}
        value={value || ""}
        onChange={onChange}
        className={className}
        name={name}
      >
      <option value="" disabled>Choose...</option>
        {options?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    )
  }

export default Select
