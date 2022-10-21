export const Input = ({ name, label, ...props }) => (
    <div className="flex flex-col p-5">
      <label className="text-sm font-bol text-grey-500" htmlFor={name}>
        {label}
      </label>
      <input
        className="p-3 border border-grey-700 rounded-xl focus:outline focus:outline-1 "
        {...props}
        name={name}
        id={name}
      />
    </div>
  );
