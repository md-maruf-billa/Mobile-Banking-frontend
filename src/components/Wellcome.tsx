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
const Wellcome = () => {
      const router = useRouter()
      const { register, handleSubmit } = useForm()

      const handleLoginUser: SubmitHandler<FieldValues> = async (payload) => {
            const res = await loginUser(payload)
            if (res.success) {
                  toast.success(res.message)
                  router.push("/home")
            }
            else {
                  toast.error(res.message)
            }
      }
      return (
            <Card className="w-[350px]">
                  <CardHeader>
                        <CardTitle className="text-center text-4xl font-semibold">CashaGo</CardTitle>
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
                  </CardContent>
            </Card>
      );
};

export default Wellcome;