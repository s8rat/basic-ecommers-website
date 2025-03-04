import PorductCard from "./componenets/PorductCard";
import { productList } from "./data";

const App = () => {
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
  return (
    <main className="container mx-auto lg:p-20 md:p-15">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {renderProducts}
      </div>
    </main>
  );
};

export default App;
