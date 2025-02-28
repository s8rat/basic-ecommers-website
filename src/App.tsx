import PorductCard from "./componenets/PorductCard";

const App = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <PorductCard />
      <PorductCard />
      <PorductCard />
      <PorductCard />
      <PorductCard />
    </div>
  );
};

export default App;
