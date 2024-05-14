import { CircleDot, ListOrdered } from "lucide-react";
import { Button } from "./ui/button";


export default function OverviewToggle() {

    return (
        <div className="w-[124px] h-12 items-center rounded-full flex flex-row gap- bg-[#FFE096] pl-1">
            <Button className="rounded-full" variant={"default"}><ListOrdered /></Button>
            <Button className="rounded-full" variant={"secondary"}><CircleDot /></Button>
        </div>
    )
}