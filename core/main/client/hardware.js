//
// Copyright (c) 2006-2013 Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - http://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.hardware = {

	ua: navigator.userAgent,

	isNokia: function() {
		return (this.ua.match('(Maemo Browser)|(Symbian)|(Nokia)')) ? true : false;
	},

	isZune: function() {
		return (this.ua.match('ZuneWP7')) ? true : false;
	},

	isHtc: function() {
		return (this.ua.match('HTC')) ? true : false;
	},

	isEricsson: function() {
		return (this.ua.match('Ericsson')) ? true : false;
	},

	isMotorola: function() {
		return (this.ua.match('Motorola')) ? true : false;
	},

	isGoogle: function() {
		return (this.ua.match('Nexus One')) ? true : false;
	},

        /**
         * Returns true if the browser is on a Mobile Phone
         * @return: {Boolean} true or false
         *
         * @example: if(beef.browser.isMobilePhone()) { ... }
         **/
        isMobilePhone: function() {
            return DetectMobileQuick();
        },

	getMobileName: function() {
                var ua = navigator.userAgent.toLowerCase();
                if(DetectIphone())              { return "iPhone"};
                if(DetectIpod())                { return "iPod Touch"};
                if(DetectIpad())                { return "iPad"};
		if (this.isHtc())               { return 'HTC'};
		if (this.isMotorola())          { return 'Motorola'};
		if (this.isZune())              { return 'Zune'};
		if (this.isGoogle())            { return 'Google Nexus One'};
		if (this.isEricsson())          { return 'Ericsson'};
                if(DetectAndroidPhone())        { return "Android Phone"};
                if(DetectAndroidTablet())       { return "Android Tablet"};
                if(DetectS60OssBrowser())       { return "Nokia S60 Open Source"};
                if(ua.search(deviceS60) > -1)   { return "Nokia S60"};
                if(ua.search(deviceS70) > -1)   { return "Nokia S70"};
                if(ua.search(deviceS80) > -1)   { return "Nokia S80"};
                if(ua.search(deviceS90) > -1)   { return "Nokia S90"};
                if(ua.search(deviceSymbian) > -1)   { return "Nokia Symbian"};
		if (this.isNokia())             { return 'Nokia'};
                if(DetectWindowsPhone7())       { return "Windows Phone 7"};
                if(DetectWindowsMobile())       { return "Windows Mobile"};
                if(DetectBlackBerryTablet())    { return "BlackBerry Tablet"};
                if(DetectBlackBerryWebKit())    { return "BlackBerry OS 6"};
                if(DetectBlackBerryTouch())     { return "BlackBerry Touch"};
                if(DetectBlackBerryHigh())      { return "BlackBerry OS 5"};
                if(DetectBlackBerry())          { return "BlackBerry"};
                if(DetectPalmOS())              { return "Palm OS"};
                if(DetectPalmWebOS())           { return "Palm Web OS"};
                if(DetectGarminNuvifone())      { return "Gamin Nuvifone"};
                if(DetectArchos())              { return "Archos"}
                if(DetectBrewDevice())          { return "Brew"};
                if(DetectDangerHiptop())        { return "Danger Hiptop"};
                if(DetectMaemoTablet())         { return "Maemo Tablet"};
                if(DetectSonyMylo())            { return "Sony Mylo"};
                if(DetectAmazonSilk())          { return "Kindle Fire"};
                if(DetectKindle())              { return "Kindle"};
                if(DetectSonyPlaystation())                 { return "Playstation" };
                if(ua.search(deviceNintendoDs) > -1)        { return "Nintendo DS"};
                if(ua.search(deviceWii) > -1)               { return "Nintendo Wii"};
                if(ua.search(deviceNintendo) > -1)          { return "Nintendo"};
                if(DetectXbox())                            { return "Xbox"};

		return 'Unknown';
	}
};

beef.regCmp('beef.net.hardware');
