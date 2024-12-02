'use client';

import { RxCornerTopLeft, RxCornerTopRight, RxCornerBottomLeft, RxCornerBottomRight } from 'react-icons/rx';

export function HeroArt() {
  return (
    <div className="flex flex-col space-y-10">
      <div className="text-6xl md:text-7xl font-semibold tracking-tight relative">
        <span className="text-[#313131]">we </span>
        <span className="text-[#9A9C9B] relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%-64px)] text-xs tracking-wider flex-nowrap w-full font-mono text-[#B9BBBC]">
            1-WEEK DELIVERY
          </div>
          <div className="absolute left-1 top-1/2 -translate-y-1/2 w-[2px] h-[130px] bg-[#DCDCDC]" />
          <div className="absolute right-px bottom-3 w-[2px] h-[93px] origin-bottom bg-[#DCDCDC]" />
          <RxCornerTopLeft className="absolute -top-2 -left-4 size-6 text-black" />
          <RxCornerTopRight className="absolute -top-2 -right-4 size-6 text-black" />
          <RxCornerBottomLeft className="absolute -bottom-2 -left-4 size-6 text-black" />
          <RxCornerBottomRight className="absolute -bottom-2 -right-4 size-6 text-black" />
          build
        </span>
        <div className="absolute right-0 bottom-2 w-screen -translate-x-1/2 left-1/2 h-[2px] bg-[linear-gradient(to_right,#DCDCDC_33%,transparent_33%)] bg-[length:24px_1px]" />
      </div>
      <div className="-ml-2 text-6xl text-[#313131] md:text-7xl font-semibold tracking-tight relative">
        <span className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%+67px)] text-xs tracking-wider flex-nowrap w-full font-mono text-[#B9BBBC]">
            GROWTH 10X
          </div>
          <div className="absolute left-px top-1/2 -translate-y-1/2 w-[2px] h-[167px] bg-[#DCDCDC]" />
          <div className="absolute right-px top-1/2 -translate-y-1/2 w-[2px] h-[167px] bg-[#DCDCDC]" />
          software
        </span>
        <span> products</span>
        <div className="absolute right-0 bottom-2 w-screen -translate-x-1/2 left-1/2 h-[2px] bg-[linear-gradient(to_right,#DCDCDC_33%,transparent_33%)] bg-[length:24px_1px]" />
      </div>
    </div>
  );
}
