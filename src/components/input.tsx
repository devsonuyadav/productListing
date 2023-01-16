import "./style.css";

interface Props {
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const Input = ({
  onChangeText,
  placeholder = "Search Product..",
}: Props) => {
  return (
    <input
      className="search-input"
      placeholder={placeholder}
      onChange={(ev) => onChangeText(ev.target.value)}
    />
  );
};
