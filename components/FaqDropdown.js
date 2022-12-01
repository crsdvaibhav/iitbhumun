import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function Dropdown(props) {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Fragment>
            <Accordion open={open === 1} className={open ? "flex flex-col sm:mx-[8.188rem] mb-[2.938rem] w-[80vw] sm:w-[34.313rem] sm:h-[12.563rem] bg-white shadow-black/10 shadow-xl rounded-lg px-4 py-2" : "flex flex-col sm:mx-[8.188rem] mb-[2.938rem] w-[80vw] sm:w-[34.313rem] sm:h-[6rem] bg-white shadow-black/10 shadow-xl rounded-lg px-4 py-2}?"}>
                <AccordionHeader onClick={() => handleOpen(1)} className="sm:text-[1.375rem] font-custom border-none">
                    Q.{props.id} {props.question}
                </AccordionHeader>
                <AccordionBody className="text-[1.125rem] font-custom border-t-[1px] border-black/50">
                    {props.ans}
                </AccordionBody>
            </Accordion>
        </Fragment>
    );
}
