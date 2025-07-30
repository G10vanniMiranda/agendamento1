import { FaHistory, FaSortAmountUp } from "react-icons/fa";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";

export default function MenuItem() {
    return (
        <div
            className="flex flex-col gap-3 md:flex-row gap-2items-center justify-between 
            px-3 py-1 h-6 rounded-full"
        >
            <div className="flex gap-2 hover:bg-sky-300 duration-300 items-center justify-between bg-slate-300 w-full md:w-28 px-3 py-2 h-6  cursor-pointer rounded-full">
                <h3>Home</h3>
                <IoHomeOutline />
            </div>

            <div className="flex gap-2 hover:bg-sky-300 duration-300 items-center justify-between bg-slate-300 px-3 py-1 h-6  cursor-pointer rounded-full">
                <h3>Histórico</h3>
                <FaHistory />
            </div>

            <div className="flex gap-2 hover:bg-sky-300 duration-300 items-center justify-between bg-slate-300 px-3 py-1 h-6  cursor-pointer rounded-full">
                <h3>Entradas</h3>
                <FaSortAmountUp />
            </div>

            <div className="flex gap-2 hover:bg-sky-300 duration-300 items-center justify-between bg-slate-300 px-3 py-1 h-6  cursor-pointer rounded-full">
                <h3>Saídas</h3>
                <FaArrowDownWideShort />
            </div>

        </div>
    );
}
