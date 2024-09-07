import {useState} from "react";

function useTooltip() {
    const [visible, setVisible] = useState(false);

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return {visible, show, hide};
}

export default useTooltip;