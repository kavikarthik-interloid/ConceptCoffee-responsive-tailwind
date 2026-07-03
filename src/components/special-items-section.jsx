export default function SpecialItem() {
  const specialItems = [
    {
      id: 1,
      dishName: "Salads",
      dishImage: "/60.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Nulla convallis pulvinar.",
    },
    {
      id: 2,
      dishName: "Breakfast",
      dishImage: "/20.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Nulla convallis pulvinar.",
    },
    {
      id: 3,
      dishName: "Bakery",
      dishImage: "/62.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Nulla convallis pulvinar.",
    },
    {
      id: 4,
      dishName: "Desserts",
      dishImage: "/63.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Nulla convallis pulvinar.",
    },
  ];
  return (
    <section className=" gap-6 p-6! py-20! font-montserrat">
      <h3 className="text-center font-bold text-xl lg:text-3xl">
        Our Special
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 lg:grid-cols-4 gap-6 p-5! lg:px-15!">
          {specialItems.map((item) => (
            <div key={item.id} className="p-4! lg:p-6! text-center">
              <img
                src={item.dishImage}
                alt={item.dishName}
                fetchPriority="high"
                className="w-full rounded-full object-cover"
              />

              <div className="pt-5! ">
                <h3 className="font-bold  pb-6! capitalize">{item.dishName}</h3>

                <p className="text-sm font-medium text-[#333]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </h3>
    </section>
  );
}
