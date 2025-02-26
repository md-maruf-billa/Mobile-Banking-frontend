"use client";
import { Button } from "@/components/ui/button";
import {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import { sendMoney } from "@/serverActions/paymentAction";
import { toast } from "sonner";

const SendMoneyForm = ({ user }: { user: any }) => {
      // Form state
      const [receiverId, setReceiverId] = useState("");
      const [amount, setAmount] = useState("");
      const [ref, setRef] = useState("");
      const [pin, setPin] = useState("");
      const [errors, setErrors] = useState<{ [key: string]: string }>({});

      // Handle form submit manually
      const handleSendMoney = async (e: React.FormEvent) => {
            e.preventDefault();
            let formErrors: { [key: string]: string } = {};
            if (!receiverId) formErrors.receiverId = "Receiver ID is required";
            if (!amount) formErrors.amount = "Amount is required";
            if (!pin) formErrors.pin = "PIN is required";
            setErrors(formErrors);

            if (Object.keys(formErrors).length === 0) {
                  const payload = { reciverId: receiverId, amount: Number(amount), ref, pin, senderId: user?.userId, payType: "Send Money" };
                  const res = await sendMoney(payload)
                  if (res?.success) {
                        toast.success(res?.message)
                        // Reset form 
                        setReceiverId("");
                        setAmount("");
                        setRef("");
                        setPin("");
                  } else {
                        toast.error(res?.message)
                  }

            }
      };

      return (
            <Card className="max-w-md w-full mt-10">
                  <CardHeader>
                        <CardTitle className="text-center">Send Money</CardTitle>
                        <CardDescription className="text-center">
                              Over 100 TK transaction charge 5 TK
                        </CardDescription>
                  </CardHeader>

                  <CardContent>
                        <div className="grid w-full items-center gap-4">
                              <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="number">Number / Email</Label>
                                    <Input
                                          value={receiverId}
                                          onChange={(e) => setReceiverId(e.target.value)}
                                          id="number"
                                          placeholder="Enter a number or email"
                                    />
                                    {errors.receiverId && <p className="text-red-500">{errors.receiverId}</p>}
                              </div>
                              <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="amount">Amount</Label>
                                    <Input
                                          value={amount}
                                          onChange={(e) => setAmount(e.target.value)}
                                          id="amount"
                                          placeholder="Enter amount"
                                    />
                                    {errors.amount && <p className="text-red-500">{errors.amount}</p>}
                              </div>
                              <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="reference">Reference</Label>
                                    <Textarea
                                          value={ref}
                                          onChange={(e) => setRef(e.target.value)}
                                          id="reference"
                                          rows={5}
                                          placeholder="Enter any note for receiver."
                                    />
                              </div>
                        </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                        <Dialog>
                              <DialogTrigger asChild>
                                    <Button type="button">Send Now</Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                          <DialogTitle className="text-center text-2xl">Verified You</DialogTitle>
                                          <DialogDescription></DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                          <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="password">PIN</Label>
                                                <Input
                                                      value={pin}
                                                      onChange={(e) => setPin(e.target.value)}
                                                      id="password"
                                                      placeholder="Enter your PIN"
                                                />
                                                {errors.pin && <p className="text-red-500">{errors.pin}</p>}
                                          </div>
                                    </div>
                                    <DialogFooter>
                                          {/* Submit button */}
                                          <Button onClick={handleSendMoney}>Confirm Payment</Button>
                                    </DialogFooter>
                              </DialogContent>
                        </Dialog>
                  </CardFooter>

            </Card>
      );
};

export default SendMoneyForm;
