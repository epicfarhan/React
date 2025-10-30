function Button({ children, type, disable }) {
  const disabled =
    "bg-[red] pt-3 pb-3 pl-7 pr-7 rounded-[40px] mt-4 cursor-pointer";
  const enabled =
    "bg-[gray] pt-3 pb-3 pl-7 pr-7 rounded-[40px] mt-4 cursor-pointer";
  return (
    <button
      type={type}
      className={disable ? enabled : disabled}
      disabled={disable}
    >
      {children}
    </button>
  );
}

export default Button;
