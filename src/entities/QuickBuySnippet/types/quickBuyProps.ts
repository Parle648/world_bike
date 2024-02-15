import { Dispatch, ReactNode, SetStateAction } from "react";

type quickBuyProps = {
    img: string,
    title: string,
    opened: boolean,
    setOpened: Dispatch<SetStateAction<boolean>>,
    children: ReactNode,
};

export default quickBuyProps;