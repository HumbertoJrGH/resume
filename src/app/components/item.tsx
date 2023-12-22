"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"

interface Item {
	label: string
	percent: number
}

// 

export default function Item({ label, percent }: Item) {
	const progRef = useRef(null)
	function animateProgBar(percent: number) {
		const element = progRef.current

		anime({
			targets: element,
			width: `calc(100% - ${percent}%)`,
			duration: 250,
			easing: "spring(1, 100, 10, 0)"
		})
	}

	useEffect(() => {
		animateProgBar(percent)
	}, [percent])

	return <div className="mt-3">
		<div className="flex">
			<p className={`basis-1/2 m-0 max-w-[30ch] text-sm opacity-50`}>
				{label}
			</p>
			<p className={`basis-1/2 text-end m-0 max-w-[30ch] text-sm opacity-50`}>
				{percent.toFixed(2)}%
			</p>
		</div>
		<div>
			<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
				<div className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 h-2.5 rounded-full flex justify-end">
					<div ref={progRef} className="bg-gray-200 dark:bg-gray-700 rounded-r-full h-2.5" style={{ width: "100%" }} />
				</div>
			</div>
		</div>
	</div>
}