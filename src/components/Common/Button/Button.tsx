import './Button.css';

type ButtonPropTypes = {
  children?: React.ReactNode
}

export const Button: React.FC<ButtonPropTypes> = ({
  children
}) => {
  return (
    <button className="styled_button">
      {children}
    </button>
  );
};
