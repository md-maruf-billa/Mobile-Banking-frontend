'use server'

import { cookies } from 'next/headers'
import { FieldValues } from 'react-hook-form'

export const sendMoney = async (payload: FieldValues) => {
  const accessToken = (await cookies()).get('accessToken')?.value

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/transaction/send-money`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken as string
      },
      body: JSON.stringify(payload)
    }
  )
  return res.json()
}
