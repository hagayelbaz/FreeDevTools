import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import './Help.css';
import {OverlayTrigger, Popover} from "react-bootstrap";
import PropTypes from "prop-types";

const popover = (header, text) => {

    return (
        <Popover className="secondary-bg p-0 shadow-nbs border-2 position-fixed">
            <Popover.Header className="secodary-bg text-light p-2" as="h3">
                {header}
            </Popover.Header>
            <Popover.Body className="p-2 text-color">
                {text}
            </Popover.Body>
        </Popover>
    )
};

function useTooltip() {
    const [visible, setVisible] = useState(false);

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return {visible, show, hide};
}


function Help({className, children, header, text, placement = 'bottom'}) {
    const {visible, show, hide} = useTooltip();


    return (
        <OverlayTrigger show={visible}
                        placement={placement}
                        overlay={popover(header, text)}>
            <div role="button"
                 className={`d-inline help-icon ${className}`}
                 onMouseEnter={show}
                 onMouseLeave={hide}>
                {children}
            </div>
        </OverlayTrigger>
    )
}

Help.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    header: PropTypes.string,
    text: PropTypes.string,
    placement: PropTypes.string
};

export default Help;