import React from "react";
import { useState } from "react";
import "../Dropdown/select.css";

const Select = (props) => {
  const [SlectItem, setSelectItem] = useState(props.heading);
  const [SlectIndex, setSelectIndex] = useState();
  const sitem = (index, name) => {
    setSelectIndex(index);
    setSelectItem(name);
  };

const [listData,setlistData]=useState(props.data);
const [listData2,setlistData2]=useState(props.data);
const filterList=(e)=>{
    const keyword=e.target.value.toLowerCase();
    const list=listData2.filter((item)=>{
      return item.toLowerCase().includes(keyword);
    })
    // for avoid duplicate data
 const list2=list.filter((item,index)=>list.indexOf(item)===index);
    setlistData(list2);
}

const refresh=()=>{
  setlistData(listData2);
}
  return (
    <>
      <div className="Dropdown" style={{height:props.height,paddingTop:props.padding,width:props.width}}>
        <div class="dropdown">
          <a
            class="btn dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="true"
            style={{outline:'none'}}
          >
            {props.icon}
            {SlectItem.length>12 ? SlectItem.substr(0,12)+'...':SlectItem}
          </a>

          <ul class="dropdown-menu">
            <li className="d-flex">
              <input type="text" class="dropdown-item" href="#" onChange={filterList}/>
              <span style={{border:'1px solid black',width:'30px',height:'33px',marginTop:'9px',marginRight:'5px',borderRadius:'5px'}} onClick={refresh}><i class="bi bi-arrow-clockwise" style={{fontSize:'20px',marginLeft:'3px'}}></i></span>
            </li>
            {listData.map((item, index) => {
              return (
                <li onClick={() => sitem(index, item)}>
                  <a class="dropdown-item" href="#">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Select;
