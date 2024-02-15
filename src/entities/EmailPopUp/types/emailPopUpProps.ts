import { Dispatch, SetStateAction } from "react";

type emailPopUpProps = {
    opened: boolean,
    setOpened: Dispatch<SetStateAction<boolean>>,
};

export default emailPopUpProps;