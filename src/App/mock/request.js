import { baseMostPopular } from "./data";

export const requestPopular  = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(baseMostPopular)
    }, 3000)
  })
  .then((resp)=>resp.json())
}