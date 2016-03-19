import {Page} from 'ionic-angular';

@Page({
	templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	title = 'Anis Momin';
	author = {
		name: 'Anis Momin',
		description: 'Web and Mobile Developer from karachi. Passionate to work with new web/mobile technologies.',
		skills: ['logo-html5', 'logo-css3', 'logo-sass', 'logo-javascript', 'logo-nodejs', 'logo-angular', 'ios-ionic'],
		contact: [
			{ item: 'anis_momin@hotmail.com', icon: 'ios-mail', link: 'mailto:smkamranqadri@yahoo.com' },
			{ item: '923343853136', icon: 'ios-call', link: 'tel:+923343853136' },
			{ item: 'anisshamsuddin', icon: 'logo-skype', link: 'skype:anisshamduddin' },
			{ item: 'anismomin', icon: 'logo-github', link: 'github:anismomin' },
			{ item: 'anismomin', icon: 'logo-facebook', link: 'facebook:anismomin' },
			{ item: 'anismomin', icon: 'logo-twitter', link: 'twitter:anismomin' },
		]	
	};
	constructor(){

	}
}
