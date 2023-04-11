const { useState, useEffect } = require("react");

export const useScreenSizes = () =>{

    const [mobileScreen, setMobileScreen] = useState(640);
    const [tabletScreen, setTabletScreen] = useState(768);
    const [desktopLargeScreen, setDesktopLargeScreen] = useState(1024)

    useEffect(()=>{
        setMobileScreen(Number(getComputedStyle(document.body).getPropertyValue('--mobile-size')));
        setTabletScreen(Number(getComputedStyle(document.body).getPropertyValue('--tablet-size')));
        setDesktopLargeScreen(Number(getComputedStyle(document.body).getPropertyValue('--desktopLg-size')));
    },[])

    return {mobileScreen, tabletScreen, desktopLargeScreen};
};