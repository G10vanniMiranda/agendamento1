import { IoHomeOutline } from "react-icons/io5";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { Button } from "./ui/button";
import { MdMenuOpen } from "react-icons/md";
import MenuItem from "./MenuItem";

export default function Header() {
    return (
        <div className="flex items-center justify-between bg-slate-800 w-full h-20 px-10">

            <div className="flex items-center gap-2 p-3">
                <span className="text-red-500 font-semibold text-xl">Logo</span>
                <span className="text-slate-300 font-semibold text-md">My App</span>
            </div>

            <div className="hidden md:flex gap-3 mx-auto items-center justify-center">

                <MenuItem />
            </div>
            <div className="hidden md:flex items-center gap-2 p-3 cursor-pointer hover:bg-slate-700 duration-300">
                <h2 className="text-white font-semibold text-md">Giovanni</h2>
                <Image src="https://avatars.githubusercontent.com/u/134082250?v=4"
                    alt="Giovanni" width={60} height={60}
                    className="rounded-full cursor-pointer hover:scale-110 duration-300"
                />
            </div>

            <Sheet>
                <SheetTrigger asChild className="md:hidden flex items-center justify-center bg-slate-200">
                    <Button variant="outline"><MdMenuOpen /></Button>
                </SheetTrigger>
                <SheetContent className="px-3">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <div className="md:hidden flex flex-col-reverse items-center gap-2 p-3">
                        <h2 className="text-black font-semibold text-md">Giovanni</h2>
                        <Image src="https://avatars.githubusercontent.com/u/134082250?v=4"
                            alt="Giovanni" width={150} height={150}
                            className="rounded-full cursor-pointer hover:scale-110 duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-3 justify-center mt-2 px-2 pr-5 w-full">
                        <MenuItem />
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    );
}