import { DollarSign, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
      Popover,
      PopoverContent,
      PopoverTrigger,
} from "@/components/ui/popover"

const TopBanner = () => {
      return (
            <div className='flex justify-between items-center h-20 bg-[#ffb500] rounded-b-2xl shadow-xl px-8'>
                  {/* User Info */}
                  <div>
                        <div className='size-[50px] rounded-full'>
                              <img className='w-full rounded-full' src="" alt="" />
                        </div>
                  </div>


                  {/* view Balance   */}
                  <div >
                        <p className='flex items-center gap-3 bg-white px-8 py-2 text-[#ffb500] text-xl rounded-full'>
                              <DollarSign className='text-2xl' /> 0.00
                        </p>
                  </div>


                  {/* setting */}
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