import "./button.css";

type ButtonProps = {
  content: string;
};

const StartMyTrialButton = ({ content }: ButtonProps) => {
  return <button className="card-footer-btn">{content}</button>;
};

export default StartMyTrialButton;
