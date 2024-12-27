import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
} from "@material-tailwind/react";
import Image from "next/image";

const DialogBox = (props) => {
    return (
        <Dialog open={props.open} size={"xl"} handler={props.handleOpen}>
            <DialogHeader className="font-bold font-sans text-[2rem]   text-[#189BA5]">
                <span className=" p-4 mt-[1rem]"> {props.title}</span>
                <a href={`${props.href}`}>
                    {/* <Button
                        color="[#189BA5]"
                        className="mr-1"
                        variant="gradient"
                        size="sm"
                        ripple="true"
                    >
                        <span className="font-bold text-sm text-[#ffffff]">Background
                            Guide</span>
                    </Button> */}
                </a>
            </DialogHeader>
            <DialogBody divider>
                <div className="h-full ">
                    <div className="font-custom sm:text-[1.25rem] font-medium px-4 py-4">
                        {props.data}
                    </div>
                    <div className="font-heading font-bold  text-[1rem] sm:text-[2rem] text-center py-4">
                        EXECUTIVE BOARD
                    </div>
                    <div className="flex justify-around py-2 w-[50%] m-auto">
                        <div className="font-custom flex flex-col items-center">
                            <div className="h-32 w-32 sm:h-48 sm:w-48 rounded-full border-2 border-black overflow-hidden relative">
                                <Image src={props.csrc} layout="fill"></Image>
                            </div>
                            <div className="font-bold sm:text-[1.5rem]">
                                {props.chair}
                            </div>
                            {props.chair==="Aditya Sharma"?<div className="sm:text-[1.25rem] font-medium">
                               Co-Chair
                            </div>:<div className="sm:text-[1.25rem] font-medium">
                               Chair
                            </div>
                        
                        }
                        </div>
                        <div className="font-custom flex flex-col items-center">
                            <div className="h-32 w-32 sm:h-48 sm:w-48 rounded-full border-2 border-black overflow-hidden relative">
                                <img src={props.vcsrc} className="h-48 w-96" layout="fill"></img>
                            </div>
                            <div className="font-bold sm:text-[1.5rem]">
                                {props.vicechair}
                            </div>
                            {props.chair==="Aditya Sharma"?<div className="sm:text-[1.25rem] font-medium">
                               Co-Chair
                            </div>:<div className="sm:text-[1.25rem] font-medium">
                              Vice-Chair
                            </div>
                        
                        }
                        </div>
                    </div>
                    <div className="font-heading font-bold text-[1rem] sm:text-[2rem] text-center py-4">
                        Delegate Resources
                    </div>
                    <div className="font-custom text-center">
                        <span className="font-bold text-xl">Agenda: </span> <span className="font-medium text-base">{props.agenda}</span>
                    </div>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="gradient"
                    color="red"
                    onClick={props.handleOpen}
                    className="mr-1"
                >
                    <span>Close</span>
                </Button>

            </DialogFooter>
        </Dialog>
    );
};

export default DialogBox;
