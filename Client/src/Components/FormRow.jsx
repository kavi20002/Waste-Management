import React from "react";

const FormRow = ({
  type,
  name,
  labelText,
  defaulyValue,
  className,
  labelClass,
}) => {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {labelText || name}{" "}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaulyValue || ""}
        required
        className={className}
      />
      <br /> <br />
    </div>
  );
};

export default FormRow;
