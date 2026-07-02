import menu from "../data/menuSection.json";

const MenuItems = () => {
  return (
    <>
      {menu.map((item) => (
        <div key={item.id} className="shadow-[0_1px_3px_rgba(0,0,0,0.15)]">
          <h4 className="bg-gray-200 font-bold p-5!">
            {item.category}
          </h4>

          <ul>
            {item.dishes.map((dish) => (
              <li
                key={dish.id}
                className="p-5! lg:pt-8 text-sm font-medium shadow-[0_1px_1px_rgba(0,0,0,0.15)]"
              >
                {dish.name}

                {dish.isNew && (
                  <span className="ml-2 bg-red-500 text-white px-2 py-1 font-bold rounded text-[10px]">
                    new
                  </span>
                )}
              </li>
            ))}
          </ul>

          <span className="block p-5 font-thin! text-[60px] shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
            ${item.price}
          </span>
        </div>
      ))}
    </>
  );
};

export default MenuItems;