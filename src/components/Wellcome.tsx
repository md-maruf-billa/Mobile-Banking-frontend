"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
      Card,
      CardContent,
      CardDescription,
      CardHeader,
      CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { loginUser } from "@/serverActions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Link from "next/link"
const Wellcome = () => {
      const router = useRouter()
      const { register, handleSubmit } = useForm()

      const handleLoginUser: SubmitHandler<FieldValues> = async (payload) => {
            const res = await loginUser(payload)
            if (res.success) {
                  toast.success(res.message)
                  if (res?.data?.user?.accountType == "user") {
                        router.push("/home")
                  }
                  else if (res?.data?.user?.accountType == "agent") {
                        router.push("/agent-home")
                  }
                  else if (res?.data?.user?.accountType == "admin") {
                        router.push("/admin-home")
                  }
            }
            else {
                  toast.error(res.message)
            }
      }
      return (
            <Card className="w-[350px]">
                  <CardHeader>
                        <CardTitle className="text-center text-xl font-semibold"><span className="text-5xl text-[#ffb500]">CashaGo</span></CardTitle>
                        <CardDescription className="text-center">This is a simple MFS system</CardDescription>
                  </CardHeader>
                  <CardContent>
                        <form onSubmit={handleSubmit(handleLoginUser)}>
                              <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="name">Mobile Number/email</Label>
                                          <Input {...register("accountNo", { required: true })} id="name" placeholder="Enter Number or Email" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="pin">PIN</Label>
                                          <Input {...register("pin", { required: true })} id="pin" type="password" placeholder="Enter valid PIN" />
                                    </div>
                              </div>
                              <Button type="submit" className="w-full mt-8">Login Now</Button>
                        </form>
                        <p className="text-center mt-4 text-gray-600">Don't Have Account? <Link className="text-blue-500" href={"/register"}>Register Now</Link></p>
                  </CardContent>
            </Card>
      );
};

export default Wellcome;