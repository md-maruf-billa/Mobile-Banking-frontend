'use server'

import { cookies } from 'next/headers'
import { FieldValues } from 'react-hook-form'

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
