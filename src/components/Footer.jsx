import React from 'react'

function Footer() {
  return (
    <div className="bg-violet-primary ">
      <div className="uppercase flex justify-around items-center font-circular w-full h-72 ">
        <div className="explore">
          <h1 className="mb-5 text-xs">explore</h1>
          <ul className=" font-semibold">
            <li className="relative my-2 font-general font-semibold uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg- cursor-pointer">
              <a className="" href="" />
              Home
            </li>
            <li className="relative my-2 font-general font-semibold uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg- cursor-pointer">
              <a className="" href="" />
              Prologue
            </li>
            <li className="relative my-2 font-general font-semibold uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg- cursor-pointer">
              <a className="" href="" />
              About
            </li>
            <li className="relative my-2 font-general font-semibold uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg- cursor-pointer">
              <a className="" href="" />
              Contact
            </li>
          </ul>
        </div>

        <div className="follow px-3 py-1">
          <h1 className="mb-5 text-xs">follow us</h1>
          <ul className="font-semibold ">
            <li className="relative my-2 font-general font-semibold uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg- cursor-pointer">
              <a className="" href="" />
              discord
            </li>
            <li className="relative my-2 font-general font-semibold uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg- cursor-pointer">
              <a className="" href="" />X
            </li>
            <li className="relative my-2 font-general font-semibold uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg- cursor-pointer">
              <a className="" href="" />
              youtube
            </li>
            <li className="relative my-2 font-general font-semibold uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg- cursor-pointer">
              <a className="" href="" />
              medium
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center pb-5 font-circular">©Zentry 2024. All rights reserved</p>
    </div>
  );
}

export default Footer