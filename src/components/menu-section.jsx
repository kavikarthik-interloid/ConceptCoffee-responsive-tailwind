import MenuItems from "./menu-items";

export default function MenuSection() {
  return (
    <section className="text-center py-20! p-5! font-montserrat w-full">
      <h1 className="font-bold text-2xl lg:text-3xl">Menu</h1>
      <div className="py-20! grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:px-25!">
        <MenuItems />
      </div>
    </section>
  );
}
