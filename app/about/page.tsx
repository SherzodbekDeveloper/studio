"use client"

import { motion } from "framer-motion"
import { Camera, Heart, Award, Users } from "lucide-react"
import PageLayout from "@/components/page-layout"

const stats = [
	{ icon: Camera, label: "Loyihalar", value: "500+" },
	{ icon: Heart, label: "Baxtli Juftliklar", value: "300+" },
	{ icon: Award, label: "Mukofotlar", value: "15+" },
	{ icon: Users, label: "Jamoa A'zolari", value: "12" },
]

const fadeUpVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			delay: i * 0.15,
			ease: [0.25, 0.1, 0.25, 1] as const,
		},
	}),
}

export default function AboutPage() {
	return (
		<PageLayout>
			<div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
				<div className="max-w-4xl mx-auto">
					{/* Header */}
					<motion.div
						custom={0}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
						className="text-center mb-16"
					>
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300 font-pacifico">
								Biz Haqimizda
							</span>
						</h1>
						<p className="text-lg md:text-xl text-white/60 leading-relaxed">
							Kokonut Studio - bu sizning eng muhim kunlaringizni abadiy esdalik qiladigan professional video studiya
						</p>
					</motion.div>

					{/* Story */}
					<motion.div
						custom={1}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
						className="mb-16 space-y-6"
					>
						<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Bizning Hikoyamiz</h2>
							<div className="space-y-4 text-white/70 leading-relaxed">
								<p>
									2015-yilda tashkil etilgan Kokonut Studio O'zbekistondagi eng yaxshi video ishlab chiqarish
									studiyalaridan biriga aylandi. Biz har bir to'y va bayramni noyob san'at asariga aylantiramiz.
								</p>
								<p>
									Bizning jamoamiz professional operatorlar, rejissyorlar va montajchilardan iborat bo'lib, ular sizning
									eng muhim lahzalaringizni eng go'zal tarzda yozib olishadi. Biz zamonaviy texnologiyalar va ijodiy
									yondashuvni birlashtirib, har bir loyihaga alohida e'tibor beramiz.
								</p>
								<p>
									Bizning maqsadimiz - sizning baxtli kunlaringizni abadiy saqlab qolish va har safar ko'rganingizda
									o'sha his-tuyg'ularni qayta boshdan kechirishingiz uchun imkoniyat yaratish.
								</p>
							</div>
						</div>
					</motion.div>

					{/* Stats */}
					<motion.div
						custom={2}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
						className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
					>
						{stats.map((stat, index) => (
							<div
								key={index}
								className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
							>
								<stat.icon className="w-8 h-8 mx-auto mb-3 text-indigo-400" />
								<div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
								<div className="text-sm text-white/60">{stat.label}</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</PageLayout>
	)
}
