import {
	BookOpen,
	Dumbbell,
	Sword,
	Users,
	ScrollText,
	Wrench,
	Package,
	Gamepad2,
	type LucideIcon,
} from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'guide' -> t('nav.guide')
	path: string // URL 路径，如 '/guide'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'builds', path: '/builds', icon: Dumbbell, isContentType: true },
	{ key: 'weapons', path: '/weapons', icon: Sword, isContentType: true },
	{ key: 'characters', path: '/characters', icon: Users, isContentType: true },
	{ key: 'quests', path: '/quests', icon: ScrollText, isContentType: true },
	{ key: 'mods', path: '/mods', icon: Wrench, isContentType: true },
	{ key: 'dlc', path: '/dlc', icon: Package, isContentType: true },
	{ key: 'remaster', path: '/remaster', icon: Gamepad2, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/' -> ['guide', 'builds', 'weapons', ...]

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
