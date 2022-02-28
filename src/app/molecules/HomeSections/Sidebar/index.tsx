import { ChangeEvent } from "react";
import { getUTCTimestamp } from "src/utils";
import Button from "src/app/atoms/Button";
import { SidebarProps } from "./type";

function Sidebar({onTimeChange}: SidebarProps) {

  const getCurrentTime = (date?: Date) => () => {
    onTimeChange(getUTCTimestamp(date));
  }
  const handleChangeDateTime = (ev: ChangeEvent<HTMLInputElement>) => {
    getCurrentTime(new Date(ev.target.value))();
  }

  return (
    <div className="absolute top-2 left-2 z-20 bg-slate-200 p-4 rounded-md">
      <h2 className=" text-lg font-bold">Weather Forcast</h2>
      <div className="flex flex-col mt-8 gap-3">
        <Button expanded onClick={getCurrentTime()}>Current</Button>
        <input type="date" data-testid="datepicker" name="datepicker" onChange={handleChangeDateTime} className=" p-2"/> 
      </div>
    </div>
  );
}
export default Sidebar;