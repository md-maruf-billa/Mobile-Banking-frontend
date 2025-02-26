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
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { registerUser } from "@/serverActions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
const RegisterPage = () => {
      const router = useRouter()
      const { register, handleSubmit, control } = useForm()

      const handleRegisterUser: SubmitHandler<FieldValues> = async (payload) => {
            const res = await registerUser(payload)
            if (res.success) {
                  toast.success(res.message)
                  if (res?.data?.accountType == "user") {
                        router.push("/home")
                  }
                  else if (res?.data?.accountType == "agent") {
                        router.push("/agent-home")
                  }
                  else if (res?.data?.accountType == "admin") {
                        router.push("/admin-home")
                  }
            }
            else {
                  toast.error(res.message)
            }
      }
      return (
            <Card className="max-w-lg w-full">
                  <CardHeader>
                        <CardTitle className="text-center text-4xl font-semibold"><span className="text-5xl text-[#ffb500]">Wellcom </span><br /> CashaGo</CardTitle>
                        <CardDescription className="text-center">Just one step fot create your account</CardDescription>
                  </CardHeader>
                  <CardContent>
                        <form onSubmit={handleSubmit(handleRegisterUser)}>
                              <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="name">Name</Label>
                                          <Input {...register("name", { required: true })} id="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="email">Email</Label>
                                          <Input {...register("email", { required: true })} id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="account">Mobile Number</Label>
                                          <Input {...register("mobileNo", { required: true })} id="account" placeholder="Enter your number" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="nid">NID</Label>
                                          <Input {...register("nid", { required: true })} id="nid" placeholder="Enter your NID" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="framework">Accout Type</Label>
                                          <Controller
                                                name="accountType"
                                                control={control}
                                                render={({ field }) => (
                                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <SelectTrigger id="accountType">
                                                                  <SelectValue placeholder="Select type" />
                                                            </SelectTrigger>
                                                            <SelectContent position="popper">
                                                                  <SelectItem value="user">Personal Account</SelectItem>
                                                                  <SelectItem value="agent">Agent Account</SelectItem>
                                                            </SelectContent>
                                                      </Select>
                                                )}
                                          />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="pin">Set PIN</Label>
                                          <Input {...register("pin", { required: true })} id="pin" type="password" placeholder="Enter valid PIN" />
                                    </div>
                              </div>
                              <Button type="submit" className="w-full mt-8">Register Now</Button>
                        </form>
                  </CardContent>
            </Card>
      );
};

export default RegisterPage;