
function Card({title, description, src}) {
  return (
    <div className="relative size-full">
        <video src={src} autoPlay loop className="absolute top-0 left-0 size-full object-cover object-center rounded-lg"/>

        <div className="card_info text-white absolute top-0 left-0 p-4">
            <h1 className="font-zentry-regular uppercase text-[70px] tracking-wider">{title}</h1>

            <p className="max-w-[220px] text-sm font-circular py-5">{description}</p>
        </div>
    </div>
  )
}

export default Card