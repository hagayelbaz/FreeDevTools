import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import './Help.css';
import {OverlayTrigger} from "react-bootstrap";
import PropTypes from "prop-types";
import useTooltip from "../../hooks/useTooltip.js";
import CustomizePopover from "./CustomizePopover/CustomizePopover.jsx";

function Help({className, children, header, text, placement = 'bottom'}) {
    const {visible, show, hide} = useTooltip();


    return (
        <OverlayTrigger show={visible} placement={placement}
                        overlay={CustomizePopover(header, text)}>
            <div role="button" className={`d-inline help-icon ${className}`}
                 onMouseEnter={show} onMouseLeave={hide}>
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