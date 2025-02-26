"use client"
import { DollarSign, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
      Popover,
      PopoverContent,
      PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { getMe } from '@/serverActions';
import { useEffect, useState } from 'react';
import { TUser } from '@/types';

const TopBanner = () => {
      const [user, setUser] = useState<TUser>()
      const [isBalanceVisible, setIsBalanceVisible] = useState(false);

      // Handle click to show/hide balance
      const toggleBalanceVisibility = () => {
            if (user?.accountType === 'user' || user?.accountType === 'agent') {
                  setIsBalanceVisible(prev => !prev);
            }
      };
      useEffect(() => {
            const loadUser = async () => {
                  const userData = await getMe();
                  setUser(userData)
            }
            loadUser()
      }, [])

      return (
            <div className='flex justify-between items-center h-20 bg-[#ffb500] rounded-b-2xl shadow-xl px-8'>
                  {/* User Info */}
                  <Avatar>
                        <AvatarImage src={user?.profileImage} alt="@shadcn" />
                        <AvatarFallback>{user?.name?.slice(0, 2)?.toUpperCase()}</AvatarFallback>
                  </Avatar>

                  {/* Balance Section */}
                  <div>
                        {user?.accountType === 'admin' ? (
                              // Admin - Shows both current income and total money
                              <div className="flex items-center gap-2">
                                    <p className='flex items-center gap-2 text-sm bg-white px-4 py-2 text-[#ffb500] rounded-full'>
                                          <DollarSign className='text-2xl' />
                                          {`Balance: ${user?.balance}`}
                                    </p>
                                    <p className='flex items-center gap-2 bg-white px-4 py-2 text-[#ffb500] text-sm rounded-full'>
                                          <DollarSign className='text-2xl' />
                                          {`Total Money: ${user?.totalMoney}`}
                                    </p>
                              </div>
                        ) : (
                              // User and Agent - Balance is blurred initially, click to reveal
                              <p
                                    className='flex items-center gap-3 bg-white px-8 py-2 text-[#ffb500] text-xl rounded-full cursor-pointer'
                                    onClick={toggleBalanceVisibility}
                              >
                                    <DollarSign className='text-2xl' />
                                    {isBalanceVisible
                                          ? user?.accountType === 'user'
                                                ? user?.balance
                                                : user?.balance
                                          : '••••••'}
                              </p>
                        )}
                  </div>

                  {/* Setting */}
                  <Popover>
                        <PopoverTrigger asChild>
                              <Button variant="outline"><Settings /></Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                              <div className="grid gap-4">
                                    <div className="space-y-2">
                                          <h4 className="font-medium leading-none">Dimensions</h4>
                                          <p className="text-sm text-muted-foreground">
                                                Set the dimensions for the layer.
                                          </p>
                                    </div>
                                    <div className="grid gap-2">
                                          <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="width">Width</Label>
                                                <Input
                                                      id="width"
                                                      defaultValue="100%"
                                                      className="col-span-2 h-8"
                                                />
                                          </div>
                                          <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="maxWidth">Max. width</Label>
                                                <Input
                                                      id="maxWidth"
                                                      defaultValue="300px"
                                                      className="col-span-2 h-8"
                                                />
                                          </div>
                                          <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="height">Height</Label>
                                                <Input
                                                      id="height"
                                                      defaultValue="25px"
                                                      className="col-span-2 h-8"
                                                />
                                          </div>
                                          <div className="grid grid-cols-3 items-center gap-4">
                                                <Label htmlFor="maxHeight">Max. height</Label>
                                                <Input
                                                      id="maxHeight"
                                                      defaultValue="none"
                                                      className="col-span-2 h-8"
                                                />
                                          </div>
                                    </div>
                              </div>
                        </PopoverContent>
                  </Popover>
            </div>
      );
};

export default TopBanner;
