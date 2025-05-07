type Props = {
  text: string;
  className?: string;
  onClick?: () => void;
};

function Button({ text, className = "", onClick = () => {} }: Props) {
  return (
    <button className={`p-[2px] relative ${className}`} onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-4 to-blue-5 rounded-lg" />
      <div className="text-xs lg:text-base font-semibold px-8 py-2  bg-blue-9 rounded-[6px] relative group transition duration-200 hover:bg-transparent hover:text-blue-9 active:blur-sm">
        {text}
      </div>
    </button>
  );
}

export default Button;
