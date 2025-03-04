interface IButton {
  buttonName: string;
  classname: string;
  onclick?: undefined;
}

const Button = ({ buttonName, classname, onclick }: IButton) => {
  return (
    <button className={classname} onClick={onclick}>
      {buttonName}
    </button>
  );
};

export default Button;
