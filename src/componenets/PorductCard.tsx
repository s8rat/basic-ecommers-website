// interface IPorductCard {
//   props: string;
// }

import ImageHolder from "./ImageHolder";

const PorductCard = () => {
  return (
    <div className="border rounded-3xl p-2 flex flex-col bg-white m-1">
      <ImageHolder
        imageUrl="src/assets/tgfh13b9.bmp"
        alt="Product Photo"
        className="rounded-3xl"
      />
      <h1>Porche 911 Gt3</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
        ducimus illum aliquam laborum voluptates optio sed veritatis ut
        distinctio incidunt voluptatibus corrupti atque necessitatibus dolorum
        esse sint cumque labore ratione!
      </p>
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
        <button className="text-white w-full bg-indigo-700 rounded-md ">
          Edit
        </button>
        <button className="text-white w-full bg-red-500 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PorductCard;
