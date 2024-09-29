import Image from "next/image";
import "./benefitsItem.css";

type Props = {
  image: string;
  text: string;
};

const BenefitsItem = ({ image, text }: Props) => {
  return (
    <li className="benefits-item">
      <Image src={image} alt="check" />
      <span>{text}</span>
    </li>
  );
};

export default BenefitsItem;
