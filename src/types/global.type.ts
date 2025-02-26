export type TTransaction = {
  senderId: string
  reciverId: string
  amount: number
  ref?: string
  payType: 'Send Money' | 'Cash Out' | 'Cash In'
  PIN: string
}

export type TUserLogin = {
  accountNo: string
  pin: string
}
