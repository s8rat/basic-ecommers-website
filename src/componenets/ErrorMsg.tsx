interface IErrorMsg {
  msg: string;
}

const ErrorMsg = ({ msg }: IErrorMsg) => {
  return (
    <span className="block text-red-500 text-sm font-semibold">{msg}</span>
  );
};

export default ErrorMsg;
