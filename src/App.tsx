import { ChangeEvent, FormEvent, useState } from "react";
import PorductCard from "./componenets/PorductCard";
import Button from "./componenets/Button";
import { formInputsList, productList } from "./data";
import Modal from "./componenets/Modal";
import Input from "./componenets/Input";
import { IProduct } from "./interfaces";

const App = () => {
  //* ----------- State ------------ *//

  const defaultProductValues = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductValues);

  //* ----------- Handlers ------------ *//

  const close = () => setIsOpen(false);

  const open = () => setIsOpen(true);

  function inputOnchange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setProduct({ ...product, [name]: value });
  }

  const submithandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(product);
  };

  const closehandler = () => {
    setProduct(defaultProductValues);
    close();
  };

  //* ----------- Render ------------ *//
  const renderProducts = productList.map((product) => (
    <PorductCard
      key={product.id}
      title={product.title}
      descreption={product.descreption}
      productImage={product.productImage}
      price={product.price}
      category={product.category}
      colors={product.colors}
    />
  ));

  const renderFormInput = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={inputOnchange}
      />
    </div>
  ));

  return (
    <main className="container mx-auto lg:p-20 md:p-15">
      <Button
        buttonName="Add Product"
        classname="text-white w-full rounded-3xl bg-indigo-700"
        onclick={open}
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {renderProducts}
      </div>
      <Modal isOpen={isOpen} close={close} title="Add Product">
        <form className="space-y-3" onSubmit={submithandler}>
          {renderFormInput}

          <div className="flex items-center space-x-3">
            <Button
              classname="text-white w-full rounded-lg bg-indigo-700"
              buttonName="Sumbit"
            ></Button>
            <Button
              classname="text-white w-full rounded-lg bg-gray-400 hover:bg-gray-700"
              buttonName="Cancel"
              onclick={closehandler}
            ></Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
