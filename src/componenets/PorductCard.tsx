import TextSlicer from "../functions/TextSlicer";
import { IProductCard } from "../interfaces";
import Button from "./Button";
import ImageHolder from "./ImageHolder";

const PorductCard = ({
  title,
  descreption,
  productImage,
  price,
  category,
  colors,
}: IProductCard) => {
  return (
    <div className="max-w-sm mx-auto md:max-w-lg 2xl:max-w-80 border rounded-3xl p-2 flex flex-col bg-white m-1">
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
        <p>${price}</p>
        <img
          src={category.imgURL}
          alt={category.name}
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
