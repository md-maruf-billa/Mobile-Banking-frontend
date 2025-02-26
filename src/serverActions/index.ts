'use server'

import { cookies } from 'next/headers'
import { FieldValues } from 'react-hook-form'
import { jwtDecode } from 'jwt-decode'
export const loginUser = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const result = await res.json()
  if (result.success) {
    ;(await cookies()).set('accessToken', result.data.accessToken)
  }
  return result
}
export const registerUser = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return res.json()
}

export const getLogeduser = async () => {
  const res = (await cookies()).get('accessToken')?.value
  let decoded = null
  if (res) {
    decoded = await jwtDecode(res)
    return decoded
  } else {
    return null
  }
}

export const getMe = async () => {
  const user = await getLogeduser()
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/${user?.userId}`
  )
  const data = await res.json()
  return data?.data
}

export const logOutUser = async () => {
  try {
    ;(await cookies()).delete('accessToken')
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
