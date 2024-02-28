interface IButton {
  title: string;
  handleFn: () => void;
}

const Button1 = ({ title, handleFn }: IButton) => {
  return (
    <button
      onClick={handleFn}
      className="bg-red-500 text-white border-none text-lg uppercase px-6 py-3 cursor-pointer transition-all duration-300"
    >
      {title}
    </button>
  );
};

export default Button1;
