import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from 'react-icons/io'
import { useDispatch } from "react-redux";
const FilterBar = ({ isShown }) => {
  const [filterType, setFilterType] = useState([])
  let [selectedCategories, setSelectedCategories] = useState([]);
  let [selectedYears, setSelectedYears] = useState([]);
  let [selectedPopularityAmount, setSelectedPopularityAmount] = useState([]);
  const [customYear, setCustomYear] = useState('')
  const ref = useRef()
  const handleYearChange = () => {
    setCustomYear(ref.current.value)
  }
  const CategoryOption = ({ title }) => {
    return (
      <div className={`w-max m-2 rounded-xl border-4 cursor-pointer font-bold p-1.5 border-dotted border-gray-700  ${selectedCategories.includes(title) && 'border-red-500 text-red-600'} `}
        onClick={() => {
          if (!selectedCategories.includes(title)) {
            setSelectedCategories((selectedCategories) => [...selectedCategories, title])
          } else {
            setSelectedCategories((selectedCategories) => selectedCategories.filter(category => category !== title))
          }
        }}
      >{title}</div>
    )
  }
  const YearOption = ({ year }) => {
    return (
      <div className={`w-max m-2 rounded-xl border-4 cursor-pointer font-bold p-1.5 border-dotted border-gray-700  ${selectedYears.includes(year) && 'border-red-500 text-red-600'} `}
        onClick={() => {
          if (!selectedYears.includes(year)) {
            setSelectedYears((selectedYears) => [...selectedYears, year])
          } else {
            setSelectedYears((selectedYears) => selectedYears.filter(category => category !== year))
          }
        }}
      >{year}</div>
    )
  }
  const PopularityOption = ({ option }) => {
    return (
      <div className={`w-max m-2 rounded-xl border-4    cursor-pointer font-bold p-1.5 border-dotted border-gray-700  ${selectedPopularityAmount.includes(option) && 'border-red-500 text-red-600'} `}
        onClick={() => {
          if (!selectedPopularityAmount.includes(option)) {
            setSelectedPopularityAmount((selectedPopularityAmount) => [...selectedPopularityAmount, option])
          } else {
            setSelectedPopularityAmount((selectedPopularityAmount) => selectedPopularityAmount.filter(category => category !== option))
          }
        }}
      >{option}</div>
    )
  }



  return (
    <div className={`absolute  ${isShown ? 'top-20' : '-top-full'} transition-all text-left w-4/6 md:w-2/5 lg:w-1/6 place-self-center DarkGlassBackGround mt-3 flex flex-col space-y-3 py-3 px-2 `}>
      {/* //!  filterBy = Category  !//  */}
      <div>
        <div className="flex items-center text-lg text-darkTheme-primaryBackGround text-shadow-xl cursor-pointer transition duration-500" onClick={() => {
          if (filterType !== 'Category') {
            setFilterType('Category')
          } else {
            setFilterType('')
          }
        }}>
          <h1 className='font-bold' >Categories</h1>
          <IoMdArrowDropdown />
        </div>
        <div className={`${filterType === 'Category' ? 'flex flex-wrap  items-center ' : "hidden"} w-full pt-5  flex-wrap items-center`}>
          <CategoryOption key={1} title={'Action'} />
          <CategoryOption key={2} title={'Science-Fiction'} />
          <CategoryOption key={3} title={'Dram'} />
          <CategoryOption key={4} title={'Horror'} />
          <CategoryOption key={5} title={'Comedy'} />
          <CategoryOption key={6} title={'Document'} />
          <CategoryOption key={7} title={'Shows'} />
        </div>
      </div>
      {/* //!  filterBy = Year !//  */}
      <div>
        <div>
          <div className="flex items-center text-lg text-darkTheme-primaryBackGround text-shadow-xl cursor-pointer transition duration-500" onClick={() => {
            if (filterType !== 'Year') {
              setFilterType('Year')
            } else {
              setFilterType('')
            }
          }}>
            <h1 className='font-bold' >Released Year</h1>
            <IoMdArrowDropdown />
          </div>
          <div className={`${filterType === 'Year' ? 'flex flex-wrap  items-center ' : "hidden"} w-full pt-5  flex-wrap items-center`}>
            <YearOption key={2} year={'2021'} />
            <YearOption key={3} year={'2020'} />
            <YearOption key={1} year={'2019'} />
            <YearOption key={4} year={'2018'} />
            <YearOption key={5} year={'2017'} />
            <YearOption key={6} year={'2016'} />
            <YearOption key={7} year={'2015'} />
            {/* //? custom year option */}
            <div className='w-full block my-3'>
              <label htmlFor='customYear' className='text-red-600 font-semibold text-lg block'>{customYear ? customYear : '1995'}</label>
              <input type="range" name='customYear' className='customYearInput block  rounded-full w-full p-1 py-1 h-4' min={1995} max={new Date().getFullYear()} step={1} id="customYear" ref={ref} onChange={() => {
                handleYearChange()
              }} />
            </div>
          </div>
        </div>
      </div>
      {/* //!  filterBy = Popularity !//  */}
      <div>
        <div>
          <div className="flex items-center text-lg text-darkTheme-primaryBackGround text-shadow-xl cursor-pointer transition duration-500" onClick={() => {
            if (filterType !== 'popularity') {
              setFilterType('popularity')
            } else {
              setFilterType('')
            }
          }}>
            <h1 className='font-bold' >Scores & Popularity</h1>
            <IoMdArrowDropdown />
          </div>
          <div className={`${filterType === 'popularity' ? 'flex flex-wrap  items-center ' : "hidden"} w-full pt-5  flex-wrap items-center`}>
            <PopularityOption key={2} option="oscar winner" />
            <PopularityOption key={3} option={'imd best movie'} />
            <PopularityOption key={1} option={'golden group winner'} />
            <PopularityOption key={4} option={'8-10 score'} />
            <PopularityOption key={5} option={'6-8 score'} />
            <PopularityOption key={6} option={'4-6 score'} />
            <PopularityOption key={7} option={'0-4 score'} />
            {/* //? custom year option */}

          </div>
        </div>
      </div>      {/* //!  filterBy = Date Added !//  */}
      <div></div>
    </div>
  );
}

export default React.memo(FilterBar)