const Textarea = ({ properties}) => {
  const { id, value, name, onChange, placeholder, rows , className , autoComplete} = properties;

  return (
    <textarea
      id={id}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows || 3}
      className={className}
      // autoComplete={autoComplete}
    />
  )
}

export default Textarea
