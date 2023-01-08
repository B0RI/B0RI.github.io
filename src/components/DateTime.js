import React, { useState } from "react";

import moment from "moment";
import Moment from "react-moment";
import "moment/locale/ko";
import { useInterval } from "react-use";

const DateTime = () => {
    const [seconds, setSeconds] = useState(moment());

    // useInterval
    useInterval(() => {
        setSeconds(moment());
    }, 1000);

    return (
        <>
            <Moment format=" M월 D일 (dd) a h:mm">{seconds}</Moment>
        </>
    );
};

export default DateTime;
