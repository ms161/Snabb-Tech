const Input = (props) => {
  console.log(props.onChange);
  return (
    <input className="border border-black mt-4 text-center w-96 m-auto"
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
