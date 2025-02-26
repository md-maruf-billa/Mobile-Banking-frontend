'use server'

import { cookies } from 'next/headers'
import { FieldValues } from 'react-hook-form'
import { jwtDecode } from 'jwt-decode'
import { revalidateTag } from 'next/cache'

export const getAllUser = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/all-user-admin`,
    {
      next: {
        tags: ['USERS']
      }
    }
  )
  const result = await res.json()
  return result?.data
}
export const getAllAgent = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/all-agent`,
    {
      next: {
        tags: ['USERS']
      }
    }
  )
  const result = await res.json()
  return result?.data
}

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
  const accessToken = (await cookies()).get('accessToken')?.value
  const user = await getLogeduser()
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/${user?.userId}`,

    {
      headers: {
        Authorization: accessToken as string
      },
      next: { tags: ['SENDMONEY'] }
    }
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

export const getMyTransaction = async () => {
  const accessToken = (await cookies()).get('accessToken')?.value
  const user = await getLogeduser()
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/my-transaction/${user?.userId}`,
    {
      next: { tags: ['SENDMONEY'] },
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken as string
      }
    }
  )
  const data = await res.json()
  return data?.data
}
export const getAllTransactionForAdmin = async (params?: string) => {
  const accessToken = (await cookies()).get('accessToken')?.value
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/all-transaction?userId=${params}`,
    {
      next: { tags: ['SENDMONEY'] },
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken as string
      }
    }
  )
  const data = await res.json()
  return data?.data
}
export const getSingleTransaction = async (params: string) => {
  const accessToken = (await cookies()).get('accessToken')?.value
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/transaction/single-trans/${params}`,
    {
      next: { tags: ['SENDMONEY'] },
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken as string
      }
    }
  )
  const data = await res.json()
  return data?.data
}

export const updateUserStatus = async (payload: {
  id: string
  status: boolean
}) => {
  const accessToken = (await cookies()).get('accessToken')?.value
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/update-status/${payload?.id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken as string
      },
      body: JSON.stringify({ status: payload.status })
    }
  )
  revalidateTag('USERS')
  return res.json()
}
