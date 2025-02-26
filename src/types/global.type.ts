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

export type TUser = {
  _id?: string
  name: string
  profileImage?: string
  pin: string
  mobileNo: string
  email: string
  accountType: 'admin' | 'agent' | 'user'
  nid: string
  balance: number
  isDeleted: boolean
  isActive: boolean
  totalMoney?: number
}
