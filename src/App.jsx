import TreeView from "./components";
import menus from "./dummyData/data";
console.log(menus);

const App = () => {
  return (
    <div>
      <TreeView menu={menus} />
    </div>
  );
};

export default App;
