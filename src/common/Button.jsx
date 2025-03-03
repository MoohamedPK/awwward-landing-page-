
function Button({ title, leftIcon, containerClass}) {

  return (
    <button className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-primary px-7 py-3 text-black ${containerClass}`} >
        {leftIcon}

        <span className="relative inline-flex overflow-hidden uppercase text-xs font-general font-semibold">{title}</span>
    </button>
  )
}

export default Button