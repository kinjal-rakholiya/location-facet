import React, {useEffect} from 'react'

export default function CityLists({data, updateData, clickedChar}) {
  const refs = data.reduce((acc, value) => {
      acc[value.id] = React.createRef();
      return acc;
    }, {});
  
  useEffect(() => {
    if(clickedChar !== undefined){
      data.forEach(item => {
        if(item.name.substring(0,1) === clickedChar){
          refs[item.id].current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          refs[item.id].current.style.backgroundColor = '#ccc'
        }
        else{
          refs[item.id].current.style.backgroundColor = ''
        }             
      })
    }
  }, [clickedChar])

  const truncate = (input) => {
      if (input.length > 14) {
        return input.substring(0, 14) + '...';
      }
      return input;
  };
  return (
      <div className="list-container">
          {
            data.map(item => (
              <div key={item.id} ref={refs[item.id]}>
                <input type="checkbox" checked={item.checked} onChange={() => updateData(item.name)}/>
                <span className="img" >{item.flagUrl}</span>
                <span className="list-name">{truncate(item.name)}</span>
              </div>
            ))
          }
          <hr />
      </div>
  )
}
