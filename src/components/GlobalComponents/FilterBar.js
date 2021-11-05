import React, { useState } from "react";

export default function FilterBar() {
    const [filterType, setFilterType] = useState('')
    const [selectedCategories , setSelectedCategories] = useState([]);
    const Category = ({title}) => {
        return(
            <div className={`w-max rounded-xl border-2 border-gray-600  ${selectedCategories.includes(title) && 'border-blue-400 text-blue-500'} `}></div>
        )
    }
  return (
    <div className="w-full DarkGlassBackGround mt-3 flex flex-col space-y-3 text-center">
      {/* //!  filterBy = Category  !//  */}
      <div>

      <div className={`hidden ${filterType === 'Category' && 'flex' } w-full  flex-wrap items-center`}>

      </div>
      </div>
      {/* //!  filterBy = Year !//  */}
      <div></div>
      {/* //!  filterBy = Popularity !//  */}
      <div></div>
      {/* //!  filterBy = Date Added !//  */}
      <div></div>
    </div>
  );
}
