import Image from 'next/image'
import Item from './components/item'

const techs = [
	{
		name: "JS sets",
		list: [
			{
				id: 0x001,
				label: "Vanilla",
				percent: 98.5
			},
			{
				id: 0x002,
				label: "Typescript",
				percent: 80
			}
		]
	},
	{
		name: "Libraries",
		list: [
			{
				id: 0x003,
				label: "React",
				percent: 80
			},
			{
				id: 0x004,
				label: "Jquery",
				percent: 75
			},
			{
				id: 0x005,
				label: "Leaflet",
				percent: 60
			},
			{
				id: 0x006,
				label: "Next",
				percent: 20
			},
			{
				id: 0x007,
				label: "Lodash",
				percent: 5
			},
			{
				id: 0x008,
				label: "Svelte",
				percent: 2.25
			},
			{
				id: 0x009,
				label: "Angular",
				percent: 0
			},
			{
				id: 0x010,
				label: "Anime",
				percent: 5
			},
		]
	},
	{
		name: "Styling",
		list: [
			{
				id: 0x001,
				label: "CSS",
				percent: 90
			},
			{
				id: 0x002,
				label: "SCSS",
				percent: 70
			},
			{
				id: 0x003,
				label: "SASS",
				percent: 65
			},
			{
				id: 0x004,
				label: "MUI",
				percent: 60
			},
			{
				id: 0x005,
				label: "Styled",
				percent: 55
			},
			{
				id: 0x006,
				label: "Tailwind",
				percent: 20
			},
		]
	}
]

export default function Home() {
	return <main className="flex min-h-screen flex-col items-center justify-between p-24">
		<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-3">
			<div className="group rounded-lg border border-gray-200 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
				<h1 className={`mb-3 text-3xl font-semibold`}>
					↓ Web Technologies
				</h1>
				<h1 className={`mb-3 text-2xl font-semibold`}>
					Front End
				</h1>

				{techs.map(item => <>
					<h2 className={`mb-3 mt-5 text-xl font-semibold`}>{item.name}</h2>
					{item.list.map(item => <Item key={item.id} label={item.label} percent={item.percent} />)}
				</>)}
			</div>

			<div className="group rounded-lg border border-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
				<h1 className={`mb-3 text-2xl font-semibold`}>
					↓ Desktop Technologies
				</h1>
				<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
					Find in-depth information about Next.js features and API.
				</p>
			</div>
		</div>
	</main>
}
