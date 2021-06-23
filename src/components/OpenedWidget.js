import React, { useState, useEffect } from 'react'
import CityLists from './CityLists'
import {cities} from '../util/constant'


export default function OpenedWidget() {
  const [data, setData] = useState(cities)
  const [indexChar, setIndexChar] = useState([])
  const [clickedChar, setClickedChar] = useState()
  
  useEffect(() => {
    prepareIndexList([...cities])
  }, [])

  const prepareIndexList = (cityData) => {
    const indexCharObj = {};
    cityData.map(item => {
      let firstChar = item.name.substring(0,1);
      if(!(firstChar in indexChar)) {
          indexCharObj[firstChar] = 1;
      }
      return indexCharObj;
    })
    setIndexChar(Object.keys(indexCharObj));
  }

  const updateData = (changedEle) => {
    const myData = data.map(item => ({...item}));
    const updatedData = myData.map(item => {
      if(item.name === changedEle){
          item.checked = !item.checked
      }
      return item
    })
    setData(updatedData)
  }

  const clearAll = () => {
    const myData = data.map(item => ({...item}));
    const updatedData = myData.map(item => {
        item.checked = false
        return item
    })
    setData(updatedData)
  }

  const handleFilter = (e) => {
    const filterValue = e.target.value
    if(filterValue.length > 0){
        const updatedData = cities.filter(item => item.name.toLowerCase().search(filterValue.toLowerCase()) >= 0)
        prepareIndexList(updatedData)
        setData(updatedData)
    }
    else{
      setData(cities)
      prepareIndexList(cities)
    }
  }

  return (
    <>
      <input type="text" className="filter" placeholder="Filter locations" onChange={handleFilter}/>
      <div className="result-container">
          <div className="data-container">
             <button className="clear-btn" onClick={clearAll}>
                <i className="fas fa-times"></i> Clear All
              </button>
             <CityLists data={data} updateData={updateData} clickedChar={clickedChar} />
          </div>
          <div className="index-container">
              <ul>
                  {indexChar.map(item => <li key={item} name={item} onClick={() => setClickedChar(item)}>{item}</li>)}
              </ul>
          </div>
      </div>
    </>
  )
}
