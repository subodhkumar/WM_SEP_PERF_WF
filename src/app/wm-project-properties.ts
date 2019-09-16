import { setWmProjectProperties } from '@wm/core';

const properties = {
    "copyrightMsg": "Copyright (c) 2018-2019 wavemaker.com All Rights Reserved.\n This software is the confidential and proprietary information of wavemaker.com You shall not disclose such Confidential Information and shall use it only in accordance\n with the terms of the source code license agreement you entered into with wavemaker.com",
    "dateFormat": "",
    "homePage": "Main",
    "studioProjectUpgradeVersion": "94.8",
    "timeFormat": "",
    "packagePrefix": "com.wmperflistproj",
    "platformType": "WEB",
    "version": "1.0",
    "deviceTypes": "",
    "defaultLanguage": "en",
    "type": "APPLICATION",
    "icon": "default.png",
    "displayName": "WMPerfListProj",
    "projectShellName": "WM_DEFAULT",
    "activeTheme": "material",
    "description": ""
}

setWmProjectProperties(properties);

export default () => {};
