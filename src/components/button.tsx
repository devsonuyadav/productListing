interface Props {
  title: string;
  onClick: () => void;
  disabled: boolean;
}
export const Button = ({ title = "Button", onClick, disabled }: Props) => {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {title}
    </button>
  );
};
