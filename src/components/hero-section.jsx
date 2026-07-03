export default function HeroSection({
  heading,
  shopFirstName,
  shopLastName,
  subHeading,
}) {
  return (
    <section
      className="flex flex-col justify-center items-center h-1/2 lg:h-2/3 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/hero-image.jpg)` }}
    >
      <div className="relative z-1 text-center text-white font-montserrat ">
        <h3 className="text-lg font-bold">{heading}</h3>

        <h1 className=" p-4! text-4xl lg:text-7xl tracking-[0]">
          <span className="font-bold">{shopFirstName}</span>
          <span className="font-medium">{shopLastName}</span>
        </h1>

        <span className="bg-[#D60012] px-3! py-1! font-semibold rounded-md">
          {subHeading}
        </span>
      </div>
      <div className="absolute inset-0 z-0 bg-black/40 h-1/2 lg:h-2/3"></div>
    </section>
  );
}
