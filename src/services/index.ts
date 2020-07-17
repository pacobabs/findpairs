export const API = 'https://api.fifa.com/api/v1'

export const fetcher = async function <JSON>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await window.fetch(input, init)
  return res.json()
}
