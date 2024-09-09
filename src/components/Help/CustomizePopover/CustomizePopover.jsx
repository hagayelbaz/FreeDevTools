import {Popover} from "react-bootstrap";

const CustomizePopover = (header, text) => {
    return (
        <Popover className="secondary-bg p-0 shadow-nbs border-2">
            <Popover.Header className="secodary-bg text-light p-2" as="h3">
                {header}
            </Popover.Header>
            <Popover.Body className="p-2 text-color">
                {text}
            </Popover.Body>
        </Popover>
    )
}

export default CustomizePopover;

