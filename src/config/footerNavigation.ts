// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'THOXIA',
		aboutText:
			'sFarmer, klasikleşmiş çiftçi deneyimini olabilecek en iyi seviyeye taşır. Oyuncularınızın yardımcı ve destekçisi olur.',
		logo: {
			src: '/thoxia.webp',
			alt: 'sFarmer Tanıtım',
			text: 'THOXIA'
		}
	},
	footerColumns: [
		{
			category: 'Hakkımızda',
			subCategories: [
				{
					subCategory: 'Discord',
					subCategoryLink: 'https://discord.gg/thoxia'
				},
				{
					subCategory: 'Satın alım',
					subCategoryLink: 'https://thoxia.com'
				},
				{
					subCategory: 'Döküman',
					subCategoryLink: 'https://docs.thoxia.com'
				},
			]
		}
	],
	subFooter: {
		copywriteText: '© THOXIA 2024.'
	}
}
