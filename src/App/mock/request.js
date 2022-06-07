
export const request = async () => {
  const resp = await fetch('https://6271666fc455a64564b27e22.mockapi.io/prods');
  const data = await resp.json();
  return data;
}


export const requestPopular = async () => {
  const resp = await fetch('https://6271666fc455a64564b27e22.mockapi.io/popular');
  const data = await resp.json();
  return data;
}
