import React, { FC, useEffect, useState } from 'react'
import userApi, { User } from '../api/users'
import { Table } from 'antd'

const Users: FC = () => {
  const [users, setUsers] = useState<User[]>()
  useEffect(() => {
    async function fetchUsers(): Promise<void> {
      const users = await userApi.allUsers()
      if (users) setUsers(users)
    }
    fetchUsers()
  }, [])

  const dataSource = users?.map((user) => ({
    key: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    address: `${user.address.city} ${user.address.street} ${user.address.suite}`,
    phone: user.phone,
    website: user.website,
    company: user.company.name,
  }))

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Website', dataIndex: 'website', key: 'website' },
    { title: 'Company', dataIndex: 'company', key: 'company' },
  ]

  return <Table loading={!users} dataSource={dataSource} columns={columns} />
}

export default Users
