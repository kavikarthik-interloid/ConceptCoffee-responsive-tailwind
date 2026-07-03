export default function Moments({moments}) {
  return (
    <section className="w-full h-full py-30 md:h-1/2 font-montserrat">
      <h1 className="text-center text-2xl lg:text-3xl font-bold p-5">
        Our Moments
      </h1>
      <div className="grid grid-cols-1 py-15 md:grid-cols-3">
        {moments.map((image) => (
          <img src={image} alt="food" loading="lazy" className="p-0.5 pb-1" />
        ))}
      </div>
    </section>
  );
}
