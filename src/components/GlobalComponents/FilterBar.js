import React, { useState , useRef } from "react";

export default function FilterBar() {
  const [filterType, setFilterType] = useState([])
  let [selectedCategories, setSelectedCategories] = useState([]);
  const [customYear , setCustomYear] = useState('')
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
      <div className={`w-max m-2 rounded-xl border-4 cursor-pointer font-bold p-1.5 border-dotted border-gray-700  ${selectedCategories.includes(year) && 'border-red-500 text-red-600'} `}
        onClick={() => {
          if (!selectedCategories.includes(year)) {
            setSelectedCategories((selectedCategories) => [...selectedCategories, year])
          } else {
            setSelectedCategories((selectedCategories) => selectedCategories.filter(category => category !== year))
          }
        }}
      >{year}</div>
    )
  }
  const PopularityOption = ({ option }) => {
    return (
      <div className={`w-max m-2 rounded-xl border-4    cursor-pointer font-bold p-1.5 border-dotted border-gray-700  ${selectedCategories.includes(option) && 'border-red-500 text-red-600'} `}
        onClick={() => {
          if (!selectedCategories.includes(option)) {
            setSelectedCategories((selectedCategories) => [...selectedCategories, option])
          } else {
            setSelectedCategories((selectedCategories) => selectedCategories.filter(category => category !== option))
          }
        }}
      >{option}</div>
    )
  }

  return (
    <div className="absolute top-0 text-left md:w-2/5 lg:w-1/4 place-self-center DarkGlassBackGround mt-3 flex flex-col space-y-3 py-3 px-2 ">
      {/* //!  filterBy = Category  !//  */}
      <div>
        <h1 className='font-bold text-darkTheme-primaryBackGround text-shadow-xl cursor-pointer' onClick={() => {
          if (filterType !== 'Category') {
            setFilterType('Category')
          } else {
            setFilterType('')
          }
        }}>Categories</h1>
        <div className={`${filterType === '' ? 'flex flex-wrap  items-center ' : "hidden"} w-full pt-5  flex-wrap items-center`}>
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
          <h1 className='font-bold text-darkTheme-primaryBackGround text-shadow-xl cursor-pointer' onClick={() => {
            if (filterType !== 'Year') {
              setFilterType('Year')
            } else {
              setFilterType('')
            }
          }}>Select by released year</h1>
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
              }}  />
              </div>
          </div>
        </div>
      </div>
      {/* //!  filterBy = Popularity !//  */}
        <div>
          <div>
            <h1 className='font-bold text-darkTheme-primaryBackGround text-shadow-xl cursor-pointer' onClick={() => {
              if (filterType !== 'popularity') {
                setFilterType('popularity')
              } else {
                setFilterType('')
              }
            }}>Scores & Popularity</h1>
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
