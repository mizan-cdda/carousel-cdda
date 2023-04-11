const { useState, useEffect } = require("react");

export const useScreenSizes = () =>{

    const [mobileScreen, setMobileScreen] = useState(0);
    const [tabletScreen, setTabletScreen] = useState(0);

    useEffect(()=>{
        setMobileScreen(Number(getComputedStyle(document.body).getPropertyValue('--mobile-size')));
        setTabletScreen(Number(getComputedStyle(document.body).getPropertyValue('--tablet-size')))
    },[])

    return {mobileScreen, tabletScreen};
};