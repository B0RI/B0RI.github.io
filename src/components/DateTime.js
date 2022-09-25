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
            <Moment format=" M월 DD일 (dd) a hh:mm">{seconds}</Moment>
        </>
    );
};

export default DateTime;