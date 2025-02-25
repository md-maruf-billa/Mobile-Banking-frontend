import * as React from "react"

import { Button } from "@/components/ui/button"
import {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue,
} from "@/components/ui/select"
const Wellcome = () => {
      return (
            <Card className="w-[350px]">
                  <CardHeader>
                        <CardTitle className="text-center text-4xl font-semibold">CashaGo</CardTitle>
                        <CardDescription className="text-center">This is a simple MFS system</CardDescription>
                  </CardHeader>
                  <CardContent>
                        <form>
                              <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="name">Mobile Number/email</Label>
                                          <Input id="name" placeholder="Enter Number or Email" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="pin">PIN</Label>
                                          <Input id="pin" type="password" placeholder="Enter valid PIN" />
                                    </div>
                              </div>
                              <Button className="w-full mt-8">Login Now</Button>
                        </form>
                  </CardContent>
            </Card>
      );
};

export default Wellcome;