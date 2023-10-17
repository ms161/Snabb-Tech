const Input = (props) => {
  // console.log(props.onChange);
  return (
    <input className="border border-black mt-4 text-center w-[40rem] m-auto p-3 rounded-xl"
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
};

export default Input;
