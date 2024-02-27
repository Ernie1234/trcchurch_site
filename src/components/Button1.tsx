interface IButton {
  title: string;
}

const Button1 = ({ title }: IButton) => {
  return (
    <button className="bg-red-500 text-white border-none text-lg uppercase px-6 py-3 cursor-pointer transition-all duration-300">
      {title}
    </button>
  );
};

export default Button1;
