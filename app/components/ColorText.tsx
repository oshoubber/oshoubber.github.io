type ColorTextType = {
  text: string;
  color?: string;
};

const ColorText: React.FC<ColorTextType> = ({ text, color }) => (
  <span
    style={color ? { color } : {}}
    className={`font-semibold ${
      color
        ? ''
        : 'text-yellow-500 hover:text-blue-500 transition-color duration-300'
    }`}
  >
    {text}
  </span>
);

export default ColorText;
