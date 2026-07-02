import dishes from "../data/specialItems.json";

export default function SpecialItem() {
  return (
    <section className=" gap-6 p-6! py-20! font-montserrat">
        <h3 className="text-center font-bold text-xl lg:text-3xl"> Our Special 
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 lg:grid-cols-4 gap-6 p-5!">
        {dishes.map((item) => (
        <div key={item.id} className="p-4! text-center">

          <img
            src={item.dishImage}
            alt={item.dishName}
            className="w-full rounded-full object-cover"
          />

          <div className="pt-5! ">
            <h3 className="font-bold  pb-6! capitalize">
              {item.dishName}
            </h3>

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