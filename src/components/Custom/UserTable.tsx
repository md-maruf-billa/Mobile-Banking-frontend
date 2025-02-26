"use client"
import {
      Table,
      TableBody,
      TableCell,
      TableFooter,
      TableHead,
      TableHeader,
      TableRow,
} from "@/components/ui/table"
import { TUser } from "@/types"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { updateUserStatus } from "@/serverActions"
import { toast } from "sonner"
import Link from "next/link"


export function UserTable({ users }: { users: TUser[] }) {
      const handleUpdateStatus = async (id: string, status: boolean) => {
            const result = await updateUserStatus({ id, status: !status })
            if (result?.success) {
                  toast.success(result?.message)
            } else {
                  toast.error(result?.message)
            }
      }

      return (
            <Table>
                  <TableHeader>
                        <TableRow>
                              <TableHead className="w-[100px]">Image</TableHead>
                              <TableHead>Name</TableHead>
                              <TableHead>Account</TableHead>
                              <TableHead>Balance</TableHead>
                              <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                  </TableHeader>
                  <TableBody>
                        {users?.map((user) => (
                              <TableRow key={user?._id}>
                                    <TableCell >
                                          <Avatar>
                                                <AvatarImage src={user?.profileImage} alt="@shadcn" />
                                                <AvatarFallback>{user?.name.slice(0, 2)?.toUpperCase()}</AvatarFallback>
                                          </Avatar>
                                    </TableCell>
                                    <TableCell><Link className="hover:text-blue-500" href={`/users/${user?._id}`}>{user?.name}</Link> <br /><span className={`${user?.accountType == "agent" ? "bg-blue-200" : "bg-yellow-200"} px-2 py-1 rounded-2xl text-xs`}>{user?.accountType}</span></TableCell>
                                    <TableCell>{user?.email} <br /> {user?.mobileNo}</TableCell>
                                    <TableCell >{user?.balance}</TableCell>
                                    <TableCell className="text-right">
                                          <Button onClick={() => handleUpdateStatus(user?._id!, user?.isActive)} className={user?.isActive ? "bg-green-600" : "bg-red-600"}>{user?.isActive ? "Active" : "Block"}</Button>
                                    </TableCell>
                              </TableRow>
                        ))}
                  </TableBody>
            </Table>
      )
}
