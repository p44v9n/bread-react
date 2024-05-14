import { CircleDot, ListOrdered } from "lucide-react";
import { Button } from "./ui/button";


export default function OverviewToggle() {

    return (
        <div className="w-[120px] h-12 items-center rounded-full flex flex-row gap- bg-[#FFE096] mr-10">
            <Button className="rounded-full" variant={"secondary"}><ListOrdered /></Button>
            <Button className="rounded-full"><CircleDot /></Button>
        </div>
    )
}