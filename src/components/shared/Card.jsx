function Card({ children }) {
  const light =
    "bg-[#0C359E] text-amber-50 w-[370px] h-full m-auto pl-7 pt-5 pb-5 pr-7 mt-5 relative";
  return <div className={light}>{children}</div>;
}

export default Card;
