const MenuItems = () => {
  const menu = [
    {
      id: 1,
      category: "Lunch",
      dishes: [
        {
          id: 1,
          name: "Seafood Paella",
          isNew: true,
        },
        {
          id: 2,
          name: "Grilled Fillet",
          isNew: false,
        },
        {
          id: 3,
          name: "Roast Sea Trout",
          isNew: false,
        },
        {
          id: 4,
          name: "French Toast",
          isNew: false,
        },
      ],
      price: 24,
    },
    {
      id: 2,
      category: "Dinner",
      dishes: [
        {
          id: 1,
          name: "Grilled Chicken",
          isNew: false,
        },
        {
          id: 2,
          name: "Steak Frites",
          isNew: false,
        },
        {
          id: 3,
          name: "Grilled Asparagus",
          isNew: false,
        },
        {
          id: 4,
          name: "Pork Fillet",
          isNew: false,
        },
      ],
      price: 34,
    },
    {
      id: 3,
      category: "Dessert",
      dishes: [
        {
          id: 1,
          name: "Crepe Complete",
          isNew: false,
        },
        {
          id: 2,
          name: "Blueberry Sweet Rolls",
          isNew: false,
        },
        {
          id: 3,
          name: "Pancake",
          isNew: false,
        },
        {
          id: 4,
          name: "Pain au Chocolat",
          isNew: false,
        },
      ],
      price: 18,
    },
    {
      id: 4,
      category: "Breakfast",
      dishes: [
        {
          id: 1,
          name: "French Breakfast",
          isNew: false,
        },
        {
          id: 2,
          name: "English Breakfast",
          isNew: false,
        },
        {
          id: 3,
          name: "Eggs Benedict",
          isNew: true,
        },
        {
          id: 4,
          name: "Veg Breakfast",
          isNew: false,
        },
      ],
      price: 28,
    },
  ];

  return (
    <>
      {menu.map((item) => (
        <div key={item.id} className="shadow-[0_1px_3px_rgba(0,0,0,0.15)]">
          <h4 className="bg-gray-200 font-bold p-5!">{item.category}</h4>

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
