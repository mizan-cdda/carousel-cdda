import { NavProps } from '@/data/carousel';
import React from 'react'
import { BsDashLg } from 'react-icons/bs'
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from 'react-icons/md';

export type CarouselNavigationProps = {
    totalPage : number,
    navigation : NavProps,
    currentPage :number,
    handleNavigate : (i : number) => void
}

const Navigation = (props : CarouselNavigationProps) => {
    const {totalPage, navigation, currentPage, handleNavigate} = props;
  return (
    <div className="flex justify-center mt-8">
        {[...Array(totalPage)].map((n, i) => {
          switch (navigation.type) {
            case "line":
              return <BsDashLg
                      key={i}
                      size={24}
                      className={`${i === currentPage &&
                        "text-green-600"} transition-all duration-150 cursor-pointer`}
                      onClick={() => handleNavigate(i)}
                    />
            
            case "circle" : 
                return i === currentPage ? <MdOutlineRadioButtonChecked
                      key={i}
                      size={24}
                      className={`${i === currentPage &&
                        "text-green-600"} transition-all duration-150 cursor-pointer`}
                      onClick={() => handleNavigate(i)}
                    />:
                    <MdOutlineRadioButtonUnchecked
                      key={i}
                      size={23}
                      className={`${i === currentPage &&
                        "text-green-600"} transition-all duration-150 cursor-pointer`}
                      onClick={() => handleNavigate(i)}
                    />
            default:
              return null
          }
        })}
      </div>
  )
}

export default Navigation