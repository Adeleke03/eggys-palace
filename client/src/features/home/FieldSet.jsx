import React from 'react'

const FieldSet = ({selectedCat,setSelectedCat}) => {
  return (
    <>
     <fieldset className="fieldset mt-5 ">
            <select className="select w-full rounded-[12px] h-[56px]"         onChange={(e) => setSelectedCat(e.target.value)}
         value={selectedCat}
            >
              <option disabled={true}>Select a category</option>
              <option value="Burger">Burger</option>
              <option value="Drinks">Drinks</option>
              <option value="Salads">Salads</option>
              <option value="Combos">Combos</option>
              <option value="Chips">Chips</option>
              <option value="Chicken">Chicken</option>
            </select>
          </fieldset>
    </>
  )
}

export default FieldSet