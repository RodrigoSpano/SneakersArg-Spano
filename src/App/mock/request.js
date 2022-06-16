import dbProducts from "./db";

export const requestAll = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(dbProducts)
    }, 1000)
  })
}
