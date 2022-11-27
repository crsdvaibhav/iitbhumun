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
            <Accordion open={open === 1} className={open ? "flex flex-col mx-[8.188rem] mb-[2.938rem] w-[34.313rem] h-[12.563rem] bg-white shadow-black/10 shadow-xl rounded-lg px-4 py-2" : "flex flex-col mx-[8.188rem] mb-[2.938rem] w-[34.313rem] h-[4rem] bg-white shadow-black/10 shadow-xl rounded-lg px-4 py-2}?"}>
                <AccordionHeader onClick={() => handleOpen(1)} className="text-[1.375rem] font-custom">
                    Q.{props.id} {props.question}
                </AccordionHeader>
                <AccordionBody className="text-[1.125rem] font-custom">
                    {props.ans}
                </AccordionBody>
            </Accordion>
        </Fragment>
    );
}
