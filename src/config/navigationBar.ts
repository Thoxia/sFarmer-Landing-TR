// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/thoxia.webp',
		alt: 'The tailwind astro theme',
		text: 'THOXIA'
	},
	navItems: [
		{ name: 'Ana Sayfa', link: '/' },
		{ name: 'Tüm Özellikler', link: '/features' },
		{ name: 'Discord', link: 'https://discord.gg/thoxia' }
	],
	navActions: [{ name: 'Şimdi Satın Al!', link: 'https://thoxia.com', style: 'primary', size: 'lg' }]
}
