// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'sFarmer. THOXIA tarafından tasarlandı ve geliştirildi.',
	siteDescription:
		'sFarmer, THOXIA tarafından tasarlanmış, gelişmiş bir çiftçi eklentisidir.',
	ogImage: '/sFarmer.png',
	logo: {
		src: 'thoxia.webp',
		alt: 'THOXIA logo'
	},
	canonical: true,
	noindex: false,
	mode: 'dark',
	scrollAnimations: true
}
