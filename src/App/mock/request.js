import baseMostPopular  from "./data";
import dbProducts from "./db";

export const requestPopular  = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(baseMostPopular)
    }, 3000)
  })
}

export const requestAll = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(dbProducts)
    }, 3000)
  })
}
