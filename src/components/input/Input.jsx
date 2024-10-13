const Input = ({ label, type, placeholder, onChange, name, className }) => {
  return (
    <div className="h-2 my-6 w-[100%]">
      <label>{label}</label>
      <div className="p-2">
        <input
          type={type}
          name={name}
          required
          placeholder={placeholder}
          onChange={onChange}
          className={`" rounded-lg border text-textClr bg-bgClr1 p-2 border-#E8E8E8 w-[100%] m-4" + ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
