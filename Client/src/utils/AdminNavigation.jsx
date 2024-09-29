import {
	HiOutlineViewGrid,
	HiArrowNarrowDown,
	HiOfficeBuilding ,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiTruck,
	HiOutlineLocationMarker ,
	HiOutlineQuestionMarkCircle,
	HiCube
} from 'react-icons/hi'

export const ADMIN_DASHBOARD_SIDEBAR_UPPER_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/AdminDashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'request',
		label: 'Request',
		path: '/AdminDashboard/request',
		icon: <HiArrowNarrowDown  />
	},
	{
		key: 'route',
		label: 'Route',
		path: '/AdminDashboard/route',
		icon: <HiOutlineLocationMarker   />
	},
	{
		key: 'staf',
		label: 'Staf',
		path: '/AdminDashboard/staf',
		icon: <HiOutlineUsers />
	},
	{
		key: 'company',
		label: 'Company',
		path: '/AdminDashboard/company',
		icon: <HiOfficeBuilding  />
	},
	{
		key: 'item',
		label: 'Item',
		path: '/AdminDashboard/item',
		icon: <HiCube  />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/AdminDashboard/transaction',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'vehicle',
		label: 'Vehicle',
		path: '/AdminDashboard/vehicle',
		icon: <HiTruck />
	}
]

export const ADMIN_DASHBOARD_SIDEBAR_BOTTOM_LINKS = [

	{
		key: 'support',
		label: 'Help & Support',
		path: '/admin/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]