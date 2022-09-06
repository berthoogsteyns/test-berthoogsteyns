type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

type Company = {
  name: string
  catchphrase: string
  bs: string
}

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

const userApiUrl = process.env.REACT_APP_USER_API

const allUsers = async (): Promise<User[] | undefined> => {
  return fetch(userApiUrl as string, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err))
}

export default { allUsers }
