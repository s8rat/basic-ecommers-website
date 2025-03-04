import TextSlicer from "../functions/TextSlicer";
import { IProductCard } from "../interfaces";
import Button from "./Button";
import ImageHolder from "./ImageHolder";

const PorductCard = ({ title, descreption, productImage }: IProductCard) => {
  return (
    <div className="border rounded-3xl p-2 flex flex-col bg-white m-1">
      <ImageHolder
        imageUrl={productImage}
        alt="Product Photo"
        className="rounded-3xl"
      />
      <h1>{title}</h1>
      <p>{TextSlicer(descreption)}</p>
      <div className="flex space-x-2 m-2">
        <span className="w-5 h-5 bg-amber-400 my-1 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-green-400 my-1 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-400 my-1 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between m-2">
        <p>$150,000</p>
        <img
          src="src/assets/tgfh13b9.bmp"
          alt="catagory photo"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex m-1 space-x-3">
        <Button
          buttonName="Edit"
          classname="text-white w-full rounded-3xl bg-indigo-700"
        />
        <Button
          buttonName="Delete"
          classname="text-white w-full rounded-3xl bg-red-600"
        />
      </div>
    </div>
  );
};

export default PorductCard;
