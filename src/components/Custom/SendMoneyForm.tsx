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
import { Textarea } from "../ui/textarea"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

const SendMoneyForm = () => {
      return (
            <Card className="max-w-md w-full mt-10">
                  <CardHeader>
                        <CardTitle className="text-center">Send Money</CardTitle>
                  </CardHeader>
                  <form>
                        <CardContent>
                              <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="number">Number / Email</Label>
                                          <Input id="number" placeholder="Enter a number or email" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="amout">Amout</Label>
                                          <Input id="amout" placeholder="Enter amout" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                          <Label htmlFor="reference">Reference</Label>
                                          <Textarea id="reference" rows={5} placeholder="Enter any note for reciver." />
                                    </div>

                              </div>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                              <Dialog>
                                    <DialogTrigger asChild>
                                          <Button >Send Now</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                          <DialogHeader>
                                                <DialogTitle className="text-center text-2xl">Verified You</DialogTitle>
                                          </DialogHeader>
                                          <div className="grid gap-4 py-4">
                                                <div className="flex flex-col space-y-1.5">
                                                      <Label htmlFor="password">PIN</Label>
                                                      <Input id="password" placeholder="Enter you PIN" />
                                                </div>

                                          </div>
                                          <DialogFooter>
                                                <Button type="submit">Confirm Payment</Button>
                                          </DialogFooter>
                                    </DialogContent>
                              </Dialog>
                        </CardFooter>
                  </form>
            </Card>
      );
};

export default SendMoneyForm;