import data from "../Pages/Menu/FastFood/data";
import menu1 from "../Pages/Menu/Sweets/data"



export function getById(id){
    const menu = data.find(item => item.id === id);
    const menu2 = menu1.find(item => item.id === id);
     if(menu2 === undefined)
      return Promise.resolve(menu)
      else return Promise.resolve(menu2);
}
export default getById;
