import { NavProps, TypesEnum } from '@/data/carousel';
import React from 'react'
import { BsDashLg } from 'react-icons/bs'
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from 'react-icons/md';

export type CarouselNavigationProps = {
    totalPage : number,
    navigation : NavProps,
    currentPage :number,
    handleNavigate : (i : number) => void
};

const Navigation = (props : CarouselNavigationProps) => {
    const {totalPage, navigation, currentPage, handleNavigate} = props;
  return (
    <div className="flex justify-center mt-8 gap-2">
        {[...Array(totalPage)].map((n, i) => {
          switch (navigation.type) {
            case TypesEnum.Line:
              return <BsDashLg
                      key={i}
                      size={24}
                      className={`${i === currentPage &&
                        "text-green-600"} transition-all duration-150 cursor-pointer`}
                      onClick={() => handleNavigate(i)}
                    />
            
            case TypesEnum.Circle : 
                return i === currentPage ? <MdOutlineRadioButtonChecked
                      key={i}
                      size={18}
                      className={`${i === currentPage &&
                        "text-green-600"} transition-all duration-150 cursor-pointer`}
                      onClick={() => handleNavigate(i)}
                    />:
                    <MdOutlineRadioButtonUnchecked
                      key={i}
                      size={18}
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