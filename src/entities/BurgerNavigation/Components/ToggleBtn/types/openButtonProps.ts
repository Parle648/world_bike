import { ReactElement } from "react";

type OpentButtonProps = {
    navigationToggle: React.MouseEventHandler<HTMLButtonElement>,
    children: ReactElement<any, any>,
};

export default OpentButtonProps;