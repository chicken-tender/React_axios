import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get(
                "https://newsapi.org/v2/top-headlines?country=kr&apiKey=290a026202e747268d2e8a3b720957e6",
            );
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    return(
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
    )
};
export default Axios;