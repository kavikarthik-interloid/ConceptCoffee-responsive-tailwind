export default function ProductHighlight({
  price,
  unit,
  title,
  heading,
  description,
  image,
  signature,
  buyButton,
}) {
  return (
    <section className="pt-10! lg:flex lg:pt-0! w-full font-montserrat shadow-[0px_4px_20px_rgba(0,0,0,0.2)]">
      <div className="flex flex-col justify-center text-center p-10! lg:p-16! lg:py-3! xl:pl-24! lg:w-1/2 lg:text-left">
        {price ? (
          <span className="text-[60px] font-thin">
            <sup className="text-sm relative text-[#999] font-bold">$</sup>
            {price}
            <sub className="text-sm text-[#999] font-bold">{unit}</sub>
          </span>
        ) : (
          <h4 className="text-3xl pb-10! lg:text-xl lg:pb-5! font-bold">
            {title}
          </h4>
        )}
        {heading && (
          <h3 className="font-bold text-xl lg:text-2xl pt-5">{heading}</h3>
        )}
        <p className="text-sm font-medium text-[#333] lg:text-md">
          {description}
        </p>
        {signature && (
          <h3 className="font-bold pt-10 -rotate-5 font-gloria">{signature}</h3>
        )}
      </div>

      <div className="relative pt-10 lg:pt-0 lg:w-1/2">
        <img src={image} alt={heading} className="w-full  object-cover" />
        {buyButton ? (
          <button className="absolute bottom-4 text-sm left-5 rounded-3xl bg-white px-4 py-1 font-bold uppercase shadow-md">
            {buyButton}
          </button>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
