"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import serviceLeftAngle from "@/public/serviceLeftAngle.svg";
import serviceRightAngle from "@/public/serviceRightAngle.svg";
import profile from "@/public/mypicfinal.jpg";
import awardsicons from "@/public/awardsIcons.svg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import ScrollAnimation from "@/components/ScrollAnimation";
import { scaleUpVariants } from "@/animation/variants";

const About = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		mobile: "",
		services: "",
		company: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("/api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			toast.success("Inquiry Sent Successfully.", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
			});
		} else {
			const errorData = await response.json();
			toast.error("Something went wrong.", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
			});
		}
	};
	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				Bounce="true"
			/>
			<ToastContainer />
			<main>
				<ScrollAnimation variants={scaleUpVariants}>
				<div className="Herro-Section">
					<div className="lg:h-[500px] min-h-[400px] my-cardBG flex relative">
						<div className="w-1/3 pt-20 lg:flex hidden">
							<Image src={serviceLeftAngle} width={600} height={700} alt="" />
						</div>
						<div className="w-1/3 mt-20 lg:block hidden"> </div>
						<div className="w-1/3 pt-20 lg:flex justify-end  hidden">
							<Image src={serviceRightAngle} width={600} height={700} alt="" />
						</div>
					</div>
					<div className="sm:flex absolute top-20 left-0 hidden">
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
					</div>
					<div className="sm:flex absolute top-20 right-0 hidden ">
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20 hidden lg:block"></div>
					</div>
					<div className="absolute top-[280px] lg:top-[350px] lg:w-[47vw] gap-5 flex flex-col  justify-center transform -translate-y-1/2 max-h-[460px] lg:p-4 min-px-5 mx-10 lg:left-[18%]">
						<h1 className="lg:text-4xl md:text-2xl text-xl font-semibold">
							Elevating Brands{" "}
							<span className="text-[#666666]">in the Digital Age</span>
						</h1>
						<p className="text-[#c7c5c5] sm:text-sm text-xs">
							Welcome to DigitX, your trusted partner in the dynamic world of
							digital solutions. We are a passionate team of creative minds,
							tech enthusiasts, and digital strategists, dedicated to empowering
							businesses and individuals in the digital realm. Our mission is to
							deliver exceptional results that drive success, create meaningful
							connections, and bring your digital vision to life. With a
							customer-centric approach and a focus on innovation, we are
							committed to being at the forefront of the ever-evolving digital
							landscape.
						</p>
					</div>
				</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
				<div className="flex flex-col items-center mt-24  sm:max-w-[1280px] mx-auto gap-10 p-2 sm:p-10">
					<h1 className="text-center text-3xl font-semibold lg:w-[500px]">
						<span className="text-[#808080]">Our</span> Team Members
					</h1>
					<p className="text-sm text-[#808080] text-center lg:w-[900px]">
						Partnering with Deltosparkoffers a multitude of advantages. Experience
						increased brand visibility, improved customer engagement, and higher
						ROI. Our tailored solutions are designed to meet your unique
						business needs, ensuring lasting success.
					</p>
					<div className="w-full min-h-[350px] flex sm:flex-row lg:flex-col flex-col  gap-4 p-8">
						<div className="w-full lg:h-1/2 flex lg:flex-row flex-col items-center justify-center gap-8">
							<div className="lg:w-1/4 w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="g:w-1/4 w-full flex flex-col justify-center items-center gap-4 h-full team-BG border border-[#1F1F1F] rounded-xl">
										<div className="w-24 flex justify-center items-center h-24 relative Dp-bg mt-4">
										<div className="w-full h-full rounded-full overflow-hidden">
										<Image
											width={2000}
											height={2000}
											src={profile}
											className="object-cover w-full h-full"
											alt=""
										/>
									</div>
						</div>
										<span className="font-semibold">Raihan Khan</span>
										<div className="text-sm font-light border border-[#1F1F1F] px-3 py-2 rounded-full relative  bg-gradient-to-r from-[#424242] to-transparent">
											<span className=" text-xs">Founder, CEO & CTO</span>
										</div>
										<svg
											width="250"
											height="2"
											viewBox="0 0 305 1"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<line
												y1="0.5"
												x2="305"
												y2="0.5"
												stroke="url(#paint0_linear_26_1761)"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_26_1761"
													x1="0"
													y1="1"
													x2="305.405"
													y2="1"
													gradientUnits="userSpaceOnUse"
												>
													<stop stop-color="#262626" stop-opacity="0" />
													<stop offset="0.5" stop-color="#262626" />
													<stop offset="1" stop-color="#262626" stop-opacity="0" />
												</linearGradient>
											</defs>
										</svg>
										<div className="flex justify-center gap-3 items-center">
											<button>
												<svg
													width="45"
													height="45"
													viewBox="0 0 53 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														fill="url(#paint0_linear_26_1707)"
													/>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														stroke="url(#paint1_linear_26_1707)"
													/>
													<rect
														x="17.75"
														y="17.25"
														width="17.5"
														height="17.5"
														rx="6"
														fill="url(#paint2_radial_26_1707)"
													/>
													<rect
														x="17.75"
														y="17.25"
														width="17.5"
														height="17.5"
														rx="6"
														fill="url(#paint3_radial_26_1707)"
													/>
													<rect
														x="17.75"
														y="17.25"
														width="17.5"
														height="17.5"
														rx="6"
														fill="white"
													/>
													<path
														d="M30.875 22.5625C30.875 23.0803 30.4553 23.5 29.9375 23.5C29.4197 23.5 29 23.0803 29 22.5625C29 22.0447 29.4197 21.625 29.9375 21.625C30.4553 21.625 30.875 22.0447 30.875 22.5625Z"
														fill="#1A1A1A"
													/>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M26.5 29.125C28.2259 29.125 29.625 27.7259 29.625 26C29.625 24.2741 28.2259 22.875 26.5 22.875C24.7741 22.875 23.375 24.2741 23.375 26C23.375 27.7259 24.7741 29.125 26.5 29.125ZM26.5 27.875C27.5355 27.875 28.375 27.0355 28.375 26C28.375 24.9645 27.5355 24.125 26.5 24.125C25.4645 24.125 24.625 24.9645 24.625 26C24.625 27.0355 25.4645 27.875 26.5 27.875Z"
														fill="#1A1A1A"
													/>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M20.25 25.75C20.25 23.6498 20.25 22.5997 20.6587 21.7975C21.0183 21.0919 21.5919 20.5183 22.2975 20.1587C23.0997 19.75 24.1498 19.75 26.25 19.75H26.75C28.8502 19.75 29.9003 19.75 30.7025 20.1587C31.4081 20.5183 31.9817 21.0919 32.3413 21.7975C32.75 22.5997 32.75 23.6498 32.75 25.75V26.25C32.75 28.3502 32.75 29.4003 32.3413 30.2025C31.9817 30.9081 31.4081 31.4817 30.7025 31.8413C29.9003 32.25 28.8502 32.25 26.75 32.25H26.25C24.1498 32.25 23.0997 32.25 22.2975 31.8413C21.5919 31.4817 21.0183 30.9081 20.6587 30.2025C20.25 29.4003 20.25 28.3502 20.25 26.25V25.75ZM26.25 21H26.75C27.8207 21 28.5486 21.001 29.1112 21.0469C29.6592 21.0917 29.9395 21.1729 30.135 21.2725C30.6054 21.5122 30.9878 21.8946 31.2275 22.365C31.3271 22.5605 31.4083 22.8408 31.4531 23.3888C31.499 23.9514 31.5 24.6793 31.5 25.75V26.25C31.5 27.3207 31.499 28.0486 31.4531 28.6112C31.4083 29.1592 31.3271 29.4395 31.2275 29.635C30.9878 30.1054 30.6054 30.4878 30.135 30.7275C29.9395 30.8271 29.6592 30.9083 29.1112 30.9531C28.5486 30.999 27.8207 31 26.75 31H26.25C25.1793 31 24.4514 30.999 23.8888 30.9531C23.3408 30.9083 23.0605 30.8271 22.865 30.7275C22.3946 30.4878 22.0122 30.1054 21.7725 29.635C21.6729 29.4395 21.5917 29.1592 21.5469 28.6112C21.501 28.0486 21.5 27.3207 21.5 26.25V25.75C21.5 24.6793 21.501 23.9514 21.5469 23.3888C21.5917 22.8408 21.6729 22.5605 21.7725 22.365C22.0122 21.8946 22.3946 21.5122 22.865 21.2725C23.0605 21.1729 23.3408 21.0917 23.8888 21.0469C24.4514 21.001 25.1793 21 26.25 21Z"
														fill="#1A1A1A"
													/>
													<defs>
														<linearGradient
															id="paint0_linear_26_1707"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#1A1A1A" />
															<stop
																offset="1"
																stop-color="#1A1A1A"
																stop-opacity="0"
															/>
														</linearGradient>
														<linearGradient
															id="paint1_linear_26_1707"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#262626" />
															<stop
																offset="1"
																stop-color="#262626"
																stop-opacity="0"
															/>
														</linearGradient>
														<radialGradient
															id="paint2_radial_26_1707"
															cx="0"
															cy="0"
															r="1"
															gradientUnits="userSpaceOnUse"
															gradientTransform="translate(24 30.375) rotate(-55.3758) scale(15.9498)"
														>
															<stop stop-color="#B13589" />
															<stop offset="0.79309" stop-color="#C62F94" />
															<stop offset="1" stop-color="#8A3AC8" />
														</radialGradient>
														<radialGradient
															id="paint3_radial_26_1707"
															cx="0"
															cy="0"
															r="1"
															gradientUnits="userSpaceOnUse"
															gradientTransform="translate(23.375 35.375) rotate(-65.1363) scale(14.1214)"
														>
															<stop stop-color="#E0E8B7" />
															<stop offset="0.444662" stop-color="#FB8A2E" />
															<stop offset="0.71474" stop-color="#E2425C" />
															<stop
																offset="1"
																stop-color="#E2425C"
																stop-opacity="0"
															/>
														</radialGradient>
													</defs>
												</svg>
											</button>
											<button>
												<svg
													width="45"
													height="45"
													viewBox="0 0 53 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														fill="url(#paint0_linear_26_1713)"
													/>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														stroke="url(#paint1_linear_26_1713)"
													/>
													<g clip-path="url(#clip0_26_1713)">
														<path
															d="M22.8228 34.0163C30.2785 34.0163 34.3565 27.8391 34.3565 22.4825C34.3565 22.3071 34.3565 22.1324 34.3446 21.9585C35.138 21.3847 35.8227 20.6743 36.367 19.8602C35.6271 20.188 34.8423 20.4031 34.0386 20.498C34.8849 19.9913 35.5183 19.1946 35.8208 18.2559C35.025 18.7281 34.1545 19.0609 33.2468 19.2398C31.7116 17.6074 29.1437 17.5286 27.5113 19.0638C26.4584 20.0539 26.0119 21.5291 26.3386 22.937C23.0796 22.7734 20.0428 21.2341 17.9845 18.7016C16.9086 20.5537 17.4581 22.9234 19.2396 24.1128C18.5944 24.0937 17.9634 23.9196 17.3997 23.6054C17.3997 23.6221 17.3997 23.6395 17.3997 23.6568C17.4001 25.5865 18.7603 27.2483 20.6518 27.6306C20.0551 27.7932 19.4288 27.8172 18.8214 27.7001C19.3524 29.3515 20.8742 30.4827 22.6085 30.5152C21.173 31.6434 19.3998 32.2556 17.5742 32.2539C17.2517 32.2532 16.9297 32.2337 16.6094 32.1953C18.4631 33.3849 20.6202 34.0158 22.8228 34.013"
															fill="white"
														/>
													</g>
													<defs>
														<linearGradient
															id="paint0_linear_26_1713"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#1A1A1A" />
															<stop
																offset="1"
																stop-color="#1A1A1A"
																stop-opacity="0"
															/>
														</linearGradient>
														<linearGradient
															id="paint1_linear_26_1713"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#262626" />
															<stop
																offset="1"
																stop-color="#262626"
																stop-opacity="0"
															/>
														</linearGradient>
														<clipPath id="clip0_26_1713">
															<rect
																width="20"
																height="20"
																fill="white"
																transform="translate(16.5 16)"
															/>
														</clipPath>
													</defs>
												</svg>
											</button>
											<button>
												<svg
													width="45"
													height="45"
													viewBox="0 0 53 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														fill="url(#paint0_linear_26_1717)"
													/>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														stroke="url(#paint1_linear_26_1717)"
													/>
													<g clip-path="url(#clip0_26_1717)">
														<path
															d="M16.6094 17.5252C16.6094 16.7436 17.2631 16.1099 18.0695 16.1099H34.9071C35.7134 16.1099 36.3672 16.7436 36.3672 17.5252V34.4524C36.3672 35.2341 35.7134 35.8677 34.9071 35.8677H18.0695C17.2631 35.8677 16.6094 35.2341 16.6094 34.4524V17.5252Z"
															fill="white"
														/>
														<path
															d="M21.1059 22.5098C22.1465 22.5098 22.7944 21.8246 22.7944 20.9684C22.775 20.0929 22.1467 19.4269 21.1257 19.4269C20.1049 19.4269 19.4375 20.0929 19.4375 20.9684C19.4375 21.8246 20.0851 22.5098 21.0866 22.5098H21.1059Z"
															fill="#0F0F0F"
														/>
														<path
															d="M22.5995 32.6488V23.7271H19.6152V32.6488H22.5995Z"
															fill="#0F0F0F"
														/>
														<path
															d="M24.25 32.6489H27.2343V27.6666C27.2343 27.3999 27.2536 27.1336 27.3324 26.9431C27.5482 26.4103 28.0391 25.8586 28.8637 25.8586C29.9435 25.8586 30.3756 26.6768 30.3756 27.8761V32.6489H33.3595V27.5334C33.3595 24.793 31.8873 23.5179 29.9238 23.5179C28.314 23.5179 27.6071 24.4121 27.2143 25.0211H27.2343V23.7272H24.25C24.2891 24.5645 24.25 32.6489 24.25 32.6489Z"
															fill="#0F0F0F"
														/>
													</g>
													<defs>
														<linearGradient
															id="paint0_linear_26_1717"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#1A1A1A" />
															<stop
																offset="1"
																stop-color="#1A1A1A"
																stop-opacity="0"
															/>
														</linearGradient>
														<linearGradient
															id="paint1_linear_26_1717"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#262626" />
															<stop
																offset="1"
																stop-color="#262626"
																stop-opacity="0"
															/>
														</linearGradient>
														<clipPath id="clip0_26_1717">
															<rect
																width="20"
																height="20"
																fill="white"
																transform="translate(16.5 16)"
															/>
														</clipPath>
													</defs>
												</svg>
											</button>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="lg:w-1/4 w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className=" flex flex-col justify-center items-center gap-4 h-full team-BG border border-[#1F1F1F] rounded-xl">
										<div className="w-24 flex justify-center items-center h-24 relative Dp-bg mt-4">
											<div className=" w-14 h-14 rounded-full overflow-hidden">
												<Image
													width={2000}
													height={2000}
													src={profile}
													className="object-cover w-14 h-14"
													alt=""
												/>
											</div>
										</div>
										<span className="font-semibold">Sarah Adams</span>
										<div className="text-sm font-light border border-[#1F1F1F] px-3 py-2 rounded-full relative  bg-gradient-to-r from-[#424242] to-transparent">
											<span className=" text-xs">Head of Design</span>
										</div>
										<svg
											width="250"
											height="2"
											viewBox="0 0 305 1"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<line
												y1="0.5"
												x2="305"
												y2="0.5"
												stroke="url(#paint0_linear_26_1761)"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_26_1761"
													x1="0"
													y1="1"
													x2="305.405"
													y2="1"
													gradientUnits="userSpaceOnUse"
												>
													<stop stop-color="#262626" stop-opacity="0" />
													<stop offset="0.5" stop-color="#262626" />
													<stop offset="1" stop-color="#262626" stop-opacity="0" />
												</linearGradient>
											</defs>
										</svg>
										<div className="flex justify-center gap-3 items-center">
											<button>
												<svg
													width="45"
													height="45"
													viewBox="0 0 53 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														fill="url(#paint0_linear_26_1707)"
													/>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														stroke="url(#paint1_linear_26_1707)"
													/>
													<rect
														x="17.75"
														y="17.25"
														width="17.5"
														height="17.5"
														rx="6"
														fill="url(#paint2_radial_26_1707)"
													/>
													<rect
														x="17.75"
														y="17.25"
														width="17.5"
														height="17.5"
														rx="6"
														fill="url(#paint3_radial_26_1707)"
													/>
													<rect
														x="17.75"
														y="17.25"
														width="17.5"
														height="17.5"
														rx="6"
														fill="white"
													/>
													<path
														d="M30.875 22.5625C30.875 23.0803 30.4553 23.5 29.9375 23.5C29.4197 23.5 29 23.0803 29 22.5625C29 22.0447 29.4197 21.625 29.9375 21.625C30.4553 21.625 30.875 22.0447 30.875 22.5625Z"
														fill="#1A1A1A"
													/>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M26.5 29.125C28.2259 29.125 29.625 27.7259 29.625 26C29.625 24.2741 28.2259 22.875 26.5 22.875C24.7741 22.875 23.375 24.2741 23.375 26C23.375 27.7259 24.7741 29.125 26.5 29.125ZM26.5 27.875C27.5355 27.875 28.375 27.0355 28.375 26C28.375 24.9645 27.5355 24.125 26.5 24.125C25.4645 24.125 24.625 24.9645 24.625 26C24.625 27.0355 25.4645 27.875 26.5 27.875Z"
														fill="#1A1A1A"
													/>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M20.25 25.75C20.25 23.6498 20.25 22.5997 20.6587 21.7975C21.0183 21.0919 21.5919 20.5183 22.2975 20.1587C23.0997 19.75 24.1498 19.75 26.25 19.75H26.75C28.8502 19.75 29.9003 19.75 30.7025 20.1587C31.4081 20.5183 31.9817 21.0919 32.3413 21.7975C32.75 22.5997 32.75 23.6498 32.75 25.75V26.25C32.75 28.3502 32.75 29.4003 32.3413 30.2025C31.9817 30.9081 31.4081 31.4817 30.7025 31.8413C29.9003 32.25 28.8502 32.25 26.75 32.25H26.25C24.1498 32.25 23.0997 32.25 22.2975 31.8413C21.5919 31.4817 21.0183 30.9081 20.6587 30.2025C20.25 29.4003 20.25 28.3502 20.25 26.25V25.75ZM26.25 21H26.75C27.8207 21 28.5486 21.001 29.1112 21.0469C29.6592 21.0917 29.9395 21.1729 30.135 21.2725C30.6054 21.5122 30.9878 21.8946 31.2275 22.365C31.3271 22.5605 31.4083 22.8408 31.4531 23.3888C31.499 23.9514 31.5 24.6793 31.5 25.75V26.25C31.5 27.3207 31.499 28.0486 31.4531 28.6112C31.4083 29.1592 31.3271 29.4395 31.2275 29.635C30.9878 30.1054 30.6054 30.4878 30.135 30.7275C29.9395 30.8271 29.6592 30.9083 29.1112 30.9531C28.5486 30.999 27.8207 31 26.75 31H26.25C25.1793 31 24.4514 30.999 23.8888 30.9531C23.3408 30.9083 23.0605 30.8271 22.865 30.7275C22.3946 30.4878 22.0122 30.1054 21.7725 29.635C21.6729 29.4395 21.5917 29.1592 21.5469 28.6112C21.501 28.0486 21.5 27.3207 21.5 26.25V25.75C21.5 24.6793 21.501 23.9514 21.5469 23.3888C21.5917 22.8408 21.6729 22.5605 21.7725 22.365C22.0122 21.8946 22.3946 21.5122 22.865 21.2725C23.0605 21.1729 23.3408 21.0917 23.8888 21.0469C24.4514 21.001 25.1793 21 26.25 21Z"
														fill="#1A1A1A"
													/>
													<defs>
														<linearGradient
															id="paint0_linear_26_1707"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#1A1A1A" />
															<stop
																offset="1"
																stop-color="#1A1A1A"
																stop-opacity="0"
															/>
														</linearGradient>
														<linearGradient
															id="paint1_linear_26_1707"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#262626" />
															<stop
																offset="1"
																stop-color="#262626"
																stop-opacity="0"
															/>
														</linearGradient>
														<radialGradient
															id="paint2_radial_26_1707"
															cx="0"
															cy="0"
															r="1"
															gradientUnits="userSpaceOnUse"
															gradientTransform="translate(24 30.375) rotate(-55.3758) scale(15.9498)"
														>
															<stop stop-color="#B13589" />
															<stop offset="0.79309" stop-color="#C62F94" />
															<stop offset="1" stop-color="#8A3AC8" />
														</radialGradient>
														<radialGradient
															id="paint3_radial_26_1707"
															cx="0"
															cy="0"
															r="1"
															gradientUnits="userSpaceOnUse"
															gradientTransform="translate(23.375 35.375) rotate(-65.1363) scale(14.1214)"
														>
															<stop stop-color="#E0E8B7" />
															<stop offset="0.444662" stop-color="#FB8A2E" />
															<stop offset="0.71474" stop-color="#E2425C" />
															<stop
																offset="1"
																stop-color="#E2425C"
																stop-opacity="0"
															/>
														</radialGradient>
													</defs>
												</svg>
											</button>
											<button>
												<svg
													width="45"
													height="45"
													viewBox="0 0 53 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														fill="url(#paint0_linear_26_1713)"
													/>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														stroke="url(#paint1_linear_26_1713)"
													/>
													<g clip-path="url(#clip0_26_1713)">
														<path
															d="M22.8228 34.0163C30.2785 34.0163 34.3565 27.8391 34.3565 22.4825C34.3565 22.3071 34.3565 22.1324 34.3446 21.9585C35.138 21.3847 35.8227 20.6743 36.367 19.8602C35.6271 20.188 34.8423 20.4031 34.0386 20.498C34.8849 19.9913 35.5183 19.1946 35.8208 18.2559C35.025 18.7281 34.1545 19.0609 33.2468 19.2398C31.7116 17.6074 29.1437 17.5286 27.5113 19.0638C26.4584 20.0539 26.0119 21.5291 26.3386 22.937C23.0796 22.7734 20.0428 21.2341 17.9845 18.7016C16.9086 20.5537 17.4581 22.9234 19.2396 24.1128C18.5944 24.0937 17.9634 23.9196 17.3997 23.6054C17.3997 23.6221 17.3997 23.6395 17.3997 23.6568C17.4001 25.5865 18.7603 27.2483 20.6518 27.6306C20.0551 27.7932 19.4288 27.8172 18.8214 27.7001C19.3524 29.3515 20.8742 30.4827 22.6085 30.5152C21.173 31.6434 19.3998 32.2556 17.5742 32.2539C17.2517 32.2532 16.9297 32.2337 16.6094 32.1953C18.4631 33.3849 20.6202 34.0158 22.8228 34.013"
															fill="white"
														/>
													</g>
													<defs>
														<linearGradient
															id="paint0_linear_26_1713"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#1A1A1A" />
															<stop
																offset="1"
																stop-color="#1A1A1A"
																stop-opacity="0"
															/>
														</linearGradient>
														<linearGradient
															id="paint1_linear_26_1713"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#262626" />
															<stop
																offset="1"
																stop-color="#262626"
																stop-opacity="0"
															/>
														</linearGradient>
														<clipPath id="clip0_26_1713">
															<rect
																width="20"
																height="20"
																fill="white"
																transform="translate(16.5 16)"
															/>
														</clipPath>
													</defs>
												</svg>
											</button>
											<button>
												<svg
													width="45"
													height="45"
													viewBox="0 0 53 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														fill="url(#paint0_linear_26_1717)"
													/>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														stroke="url(#paint1_linear_26_1717)"
													/>
													<g clip-path="url(#clip0_26_1717)">
														<path
															d="M16.6094 17.5252C16.6094 16.7436 17.2631 16.1099 18.0695 16.1099H34.9071C35.7134 16.1099 36.3672 16.7436 36.3672 17.5252V34.4524C36.3672 35.2341 35.7134 35.8677 34.9071 35.8677H18.0695C17.2631 35.8677 16.6094 35.2341 16.6094 34.4524V17.5252Z"
															fill="white"
														/>
														<path
															d="M21.1059 22.5098C22.1465 22.5098 22.7944 21.8246 22.7944 20.9684C22.775 20.0929 22.1467 19.4269 21.1257 19.4269C20.1049 19.4269 19.4375 20.0929 19.4375 20.9684C19.4375 21.8246 20.0851 22.5098 21.0866 22.5098H21.1059Z"
															fill="#0F0F0F"
														/>
														<path
															d="M22.5995 32.6488V23.7271H19.6152V32.6488H22.5995Z"
															fill="#0F0F0F"
														/>
														<path
															d="M24.25 32.6489H27.2343V27.6666C27.2343 27.3999 27.2536 27.1336 27.3324 26.9431C27.5482 26.4103 28.0391 25.8586 28.8637 25.8586C29.9435 25.8586 30.3756 26.6768 30.3756 27.8761V32.6489H33.3595V27.5334C33.3595 24.793 31.8873 23.5179 29.9238 23.5179C28.314 23.5179 27.6071 24.4121 27.2143 25.0211H27.2343V23.7272H24.25C24.2891 24.5645 24.25 32.6489 24.25 32.6489Z"
															fill="#0F0F0F"
														/>
													</g>
													<defs>
														<linearGradient
															id="paint0_linear_26_1717"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#1A1A1A" />
															<stop
																offset="1"
																stop-color="#1A1A1A"
																stop-opacity="0"
															/>
														</linearGradient>
														<linearGradient
															id="paint1_linear_26_1717"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#262626" />
															<stop
																offset="1"
																stop-color="#262626"
																stop-opacity="0"
															/>
														</linearGradient>
														<clipPath id="clip0_26_1717">
															<rect
																width="20"
																height="20"
																fill="white"
																transform="translate(16.5 16)"
															/>
														</clipPath>
													</defs>
												</svg>
											</button>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="lg:w-1/4 w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className=" flex flex-col justify-center items-center gap-4 h-full team-BG border border-[#1F1F1F] rounded-xl">
										<div className="w-24 flex justify-center items-center h-24 relative Dp-bg mt-4">
											<div className=" w-14 h-14 rounded-full overflow-hidden">
												<Image
													width={2000}
													height={2000}
													src={profile}
													className="object-cover w-14 h-14"
													alt=""
												/>
											</div>
										</div>
										<span className="font-semibold">Michael Williams</span>
										<div className="text-sm font-light border border-[#1F1F1F] px-3 py-2 rounded-full relative  bg-gradient-to-r from-[#424242] to-transparent">
											<span className=" text-xs">Project Manager</span>
										</div>
										<svg
											width="250"
											height="2"
											viewBox="0 0 305 1"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<line
												y1="0.5"
												x2="305"
												y2="0.5"
												stroke="url(#paint0_linear_26_1761)"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_26_1761"
													x1="0"
													y1="1"
													x2="305.405"
													y2="1"
													gradientUnits="userSpaceOnUse"
												>
													<stop stop-color="#262626" stop-opacity="0" />
													<stop offset="0.5" stop-color="#262626" />
													<stop offset="1" stop-color="#262626" stop-opacity="0" />
												</linearGradient>
											</defs>
										</svg>
										<div className="flex justify-center gap-3 items-center">
											<button>
												<svg
													width="45"
													height="45"
													viewBox="0 0 53 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														fill="url(#paint0_linear_26_1707)"
													/>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														stroke="url(#paint1_linear_26_1707)"
													/>
													<rect
														x="17.75"
														y="17.25"
														width="17.5"
														height="17.5"
														rx="6"
														fill="url(#paint2_radial_26_1707)"
													/>
													<rect
														x="17.75"
														y="17.25"
														width="17.5"
														height="17.5"
														rx="6"
														fill="url(#paint3_radial_26_1707)"
													/>
													<rect
														x="17.75"
														y="17.25"
														width="17.5"
														height="17.5"
														rx="6"
														fill="white"
													/>
													<path
														d="M30.875 22.5625C30.875 23.0803 30.4553 23.5 29.9375 23.5C29.4197 23.5 29 23.0803 29 22.5625C29 22.0447 29.4197 21.625 29.9375 21.625C30.4553 21.625 30.875 22.0447 30.875 22.5625Z"
														fill="#1A1A1A"
													/>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M26.5 29.125C28.2259 29.125 29.625 27.7259 29.625 26C29.625 24.2741 28.2259 22.875 26.5 22.875C24.7741 22.875 23.375 24.2741 23.375 26C23.375 27.7259 24.7741 29.125 26.5 29.125ZM26.5 27.875C27.5355 27.875 28.375 27.0355 28.375 26C28.375 24.9645 27.5355 24.125 26.5 24.125C25.4645 24.125 24.625 24.9645 24.625 26C24.625 27.0355 25.4645 27.875 26.5 27.875Z"
														fill="#1A1A1A"
													/>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M20.25 25.75C20.25 23.6498 20.25 22.5997 20.6587 21.7975C21.0183 21.0919 21.5919 20.5183 22.2975 20.1587C23.0997 19.75 24.1498 19.75 26.25 19.75H26.75C28.8502 19.75 29.9003 19.75 30.7025 20.1587C31.4081 20.5183 31.9817 21.0919 32.3413 21.7975C32.75 22.5997 32.75 23.6498 32.75 25.75V26.25C32.75 28.3502 32.75 29.4003 32.3413 30.2025C31.9817 30.9081 31.4081 31.4817 30.7025 31.8413C29.9003 32.25 28.8502 32.25 26.75 32.25H26.25C24.1498 32.25 23.0997 32.25 22.2975 31.8413C21.5919 31.4817 21.0183 30.9081 20.6587 30.2025C20.25 29.4003 20.25 28.3502 20.25 26.25V25.75ZM26.25 21H26.75C27.8207 21 28.5486 21.001 29.1112 21.0469C29.6592 21.0917 29.9395 21.1729 30.135 21.2725C30.6054 21.5122 30.9878 21.8946 31.2275 22.365C31.3271 22.5605 31.4083 22.8408 31.4531 23.3888C31.499 23.9514 31.5 24.6793 31.5 25.75V26.25C31.5 27.3207 31.499 28.0486 31.4531 28.6112C31.4083 29.1592 31.3271 29.4395 31.2275 29.635C30.9878 30.1054 30.6054 30.4878 30.135 30.7275C29.9395 30.8271 29.6592 30.9083 29.1112 30.9531C28.5486 30.999 27.8207 31 26.75 31H26.25C25.1793 31 24.4514 30.999 23.8888 30.9531C23.3408 30.9083 23.0605 30.8271 22.865 30.7275C22.3946 30.4878 22.0122 30.1054 21.7725 29.635C21.6729 29.4395 21.5917 29.1592 21.5469 28.6112C21.501 28.0486 21.5 27.3207 21.5 26.25V25.75C21.5 24.6793 21.501 23.9514 21.5469 23.3888C21.5917 22.8408 21.6729 22.5605 21.7725 22.365C22.0122 21.8946 22.3946 21.5122 22.865 21.2725C23.0605 21.1729 23.3408 21.0917 23.8888 21.0469C24.4514 21.001 25.1793 21 26.25 21Z"
														fill="#1A1A1A"
													/>
													<defs>
														<linearGradient
															id="paint0_linear_26_1707"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#1A1A1A" />
															<stop
																offset="1"
																stop-color="#1A1A1A"
																stop-opacity="0"
															/>
														</linearGradient>
														<linearGradient
															id="paint1_linear_26_1707"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#262626" />
															<stop
																offset="1"
																stop-color="#262626"
																stop-opacity="0"
															/>
														</linearGradient>
														<radialGradient
															id="paint2_radial_26_1707"
															cx="0"
															cy="0"
															r="1"
															gradientUnits="userSpaceOnUse"
															gradientTransform="translate(24 30.375) rotate(-55.3758) scale(15.9498)"
														>
															<stop stop-color="#B13589" />
															<stop offset="0.79309" stop-color="#C62F94" />
															<stop offset="1" stop-color="#8A3AC8" />
														</radialGradient>
														<radialGradient
															id="paint3_radial_26_1707"
															cx="0"
															cy="0"
															r="1"
															gradientUnits="userSpaceOnUse"
															gradientTransform="translate(23.375 35.375) rotate(-65.1363) scale(14.1214)"
														>
															<stop stop-color="#E0E8B7" />
															<stop offset="0.444662" stop-color="#FB8A2E" />
															<stop offset="0.71474" stop-color="#E2425C" />
															<stop
																offset="1"
																stop-color="#E2425C"
																stop-opacity="0"
															/>
														</radialGradient>
													</defs>
												</svg>
											</button>
											<button>
												<svg
													width="45"
													height="45"
													viewBox="0 0 53 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														fill="url(#paint0_linear_26_1713)"
													/>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														stroke="url(#paint1_linear_26_1713)"
													/>
													<g clip-path="url(#clip0_26_1713)">
														<path
															d="M22.8228 34.0163C30.2785 34.0163 34.3565 27.8391 34.3565 22.4825C34.3565 22.3071 34.3565 22.1324 34.3446 21.9585C35.138 21.3847 35.8227 20.6743 36.367 19.8602C35.6271 20.188 34.8423 20.4031 34.0386 20.498C34.8849 19.9913 35.5183 19.1946 35.8208 18.2559C35.025 18.7281 34.1545 19.0609 33.2468 19.2398C31.7116 17.6074 29.1437 17.5286 27.5113 19.0638C26.4584 20.0539 26.0119 21.5291 26.3386 22.937C23.0796 22.7734 20.0428 21.2341 17.9845 18.7016C16.9086 20.5537 17.4581 22.9234 19.2396 24.1128C18.5944 24.0937 17.9634 23.9196 17.3997 23.6054C17.3997 23.6221 17.3997 23.6395 17.3997 23.6568C17.4001 25.5865 18.7603 27.2483 20.6518 27.6306C20.0551 27.7932 19.4288 27.8172 18.8214 27.7001C19.3524 29.3515 20.8742 30.4827 22.6085 30.5152C21.173 31.6434 19.3998 32.2556 17.5742 32.2539C17.2517 32.2532 16.9297 32.2337 16.6094 32.1953C18.4631 33.3849 20.6202 34.0158 22.8228 34.013"
															fill="white"
														/>
													</g>
													<defs>
														<linearGradient
															id="paint0_linear_26_1713"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#1A1A1A" />
															<stop
																offset="1"
																stop-color="#1A1A1A"
																stop-opacity="0"
															/>
														</linearGradient>
														<linearGradient
															id="paint1_linear_26_1713"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#262626" />
															<stop
																offset="1"
																stop-color="#262626"
																stop-opacity="0"
															/>
														</linearGradient>
														<clipPath id="clip0_26_1713">
															<rect
																width="20"
																height="20"
																fill="white"
																transform="translate(16.5 16)"
															/>
														</clipPath>
													</defs>
												</svg>
											</button>
											<button>
												<svg
													width="45"
													height="45"
													viewBox="0 0 53 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														fill="url(#paint0_linear_26_1717)"
													/>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														stroke="url(#paint1_linear_26_1717)"
													/>
													<g clip-path="url(#clip0_26_1717)">
														<path
															d="M16.6094 17.5252C16.6094 16.7436 17.2631 16.1099 18.0695 16.1099H34.9071C35.7134 16.1099 36.3672 16.7436 36.3672 17.5252V34.4524C36.3672 35.2341 35.7134 35.8677 34.9071 35.8677H18.0695C17.2631 35.8677 16.6094 35.2341 16.6094 34.4524V17.5252Z"
															fill="white"
														/>
														<path
															d="M21.1059 22.5098C22.1465 22.5098 22.7944 21.8246 22.7944 20.9684C22.775 20.0929 22.1467 19.4269 21.1257 19.4269C20.1049 19.4269 19.4375 20.0929 19.4375 20.9684C19.4375 21.8246 20.0851 22.5098 21.0866 22.5098H21.1059Z"
															fill="#0F0F0F"
														/>
														<path
															d="M22.5995 32.6488V23.7271H19.6152V32.6488H22.5995Z"
															fill="#0F0F0F"
														/>
														<path
															d="M24.25 32.6489H27.2343V27.6666C27.2343 27.3999 27.2536 27.1336 27.3324 26.9431C27.5482 26.4103 28.0391 25.8586 28.8637 25.8586C29.9435 25.8586 30.3756 26.6768 30.3756 27.8761V32.6489H33.3595V27.5334C33.3595 24.793 31.8873 23.5179 29.9238 23.5179C28.314 23.5179 27.6071 24.4121 27.2143 25.0211H27.2343V23.7272H24.25C24.2891 24.5645 24.25 32.6489 24.25 32.6489Z"
															fill="#0F0F0F"
														/>
													</g>
													<defs>
														<linearGradient
															id="paint0_linear_26_1717"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#1A1A1A" />
															<stop
																offset="1"
																stop-color="#1A1A1A"
																stop-opacity="0"
															/>
														</linearGradient>
														<linearGradient
															id="paint1_linear_26_1717"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#262626" />
															<stop
																offset="1"
																stop-color="#262626"
																stop-opacity="0"
															/>
														</linearGradient>
														<clipPath id="clip0_26_1717">
															<rect
																width="20"
																height="20"
																fill="white"
																transform="translate(16.5 16)"
															/>
														</clipPath>
													</defs>
												</svg>
											</button>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="lg:w-1/4 w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className=" flex flex-col justify-center items-center gap-4 h-full team-BG border border-[#1F1F1F] rounded-xl">
										<div className="w-24 flex justify-center items-center h-24 relative Dp-bg mt-4">
											<div className=" w-14 h-14 rounded-full overflow-hidden">
												<Image
													width={2000}
													height={2000}
													src={profile}
													className="object-cover w-14 h-14"
													alt=""
												/>
											</div>
										</div>
										<span className="font-semibold">Emily Johnson</span>
										<div className="text-sm font-light border border-[#1F1F1F] px-3 py-2 rounded-full relative  bg-gradient-to-r from-[#424242] to-transparent">
											<span className=" text-xs">Lead Web Developer</span>
										</div>
										<svg
											width="250"
											height="2"
											viewBox="0 0 305 1"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<line
												y1="0.5"
												x2="305"
												y2="0.5"
												stroke="url(#paint0_linear_26_1761)"
											/>
											<defs>
												<linearGradient
													id="paint0_linear_26_1761"
													x1="0"
													y1="1"
													x2="305.405"
													y2="1"
													gradientUnits="userSpaceOnUse"
												>
													<stop stop-color="#262626" stop-opacity="0" />
													<stop offset="0.5" stop-color="#262626" />
													<stop offset="1" stop-color="#262626" stop-opacity="0" />
												</linearGradient>
											</defs>
										</svg>
										<div className="flex justify-center gap-3 items-center">
											<button>
												<svg
													width="45"
													height="45"
													viewBox="0 0 53 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														fill="url(#paint0_linear_26_1707)"
													/>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														stroke="url(#paint1_linear_26_1707)"
													/>
													<rect
														x="17.75"
														y="17.25"
														width="17.5"
														height="17.5"
														rx="6"
														fill="url(#paint2_radial_26_1707)"
													/>
													<rect
														x="17.75"
														y="17.25"
														width="17.5"
														height="17.5"
														rx="6"
														fill="url(#paint3_radial_26_1707)"
													/>
													<rect
														x="17.75"
														y="17.25"
														width="17.5"
														height="17.5"
														rx="6"
														fill="white"
													/>
													<path
														d="M30.875 22.5625C30.875 23.0803 30.4553 23.5 29.9375 23.5C29.4197 23.5 29 23.0803 29 22.5625C29 22.0447 29.4197 21.625 29.9375 21.625C30.4553 21.625 30.875 22.0447 30.875 22.5625Z"
														fill="#1A1A1A"
													/>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M26.5 29.125C28.2259 29.125 29.625 27.7259 29.625 26C29.625 24.2741 28.2259 22.875 26.5 22.875C24.7741 22.875 23.375 24.2741 23.375 26C23.375 27.7259 24.7741 29.125 26.5 29.125ZM26.5 27.875C27.5355 27.875 28.375 27.0355 28.375 26C28.375 24.9645 27.5355 24.125 26.5 24.125C25.4645 24.125 24.625 24.9645 24.625 26C24.625 27.0355 25.4645 27.875 26.5 27.875Z"
														fill="#1A1A1A"
													/>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M20.25 25.75C20.25 23.6498 20.25 22.5997 20.6587 21.7975C21.0183 21.0919 21.5919 20.5183 22.2975 20.1587C23.0997 19.75 24.1498 19.75 26.25 19.75H26.75C28.8502 19.75 29.9003 19.75 30.7025 20.1587C31.4081 20.5183 31.9817 21.0919 32.3413 21.7975C32.75 22.5997 32.75 23.6498 32.75 25.75V26.25C32.75 28.3502 32.75 29.4003 32.3413 30.2025C31.9817 30.9081 31.4081 31.4817 30.7025 31.8413C29.9003 32.25 28.8502 32.25 26.75 32.25H26.25C24.1498 32.25 23.0997 32.25 22.2975 31.8413C21.5919 31.4817 21.0183 30.9081 20.6587 30.2025C20.25 29.4003 20.25 28.3502 20.25 26.25V25.75ZM26.25 21H26.75C27.8207 21 28.5486 21.001 29.1112 21.0469C29.6592 21.0917 29.9395 21.1729 30.135 21.2725C30.6054 21.5122 30.9878 21.8946 31.2275 22.365C31.3271 22.5605 31.4083 22.8408 31.4531 23.3888C31.499 23.9514 31.5 24.6793 31.5 25.75V26.25C31.5 27.3207 31.499 28.0486 31.4531 28.6112C31.4083 29.1592 31.3271 29.4395 31.2275 29.635C30.9878 30.1054 30.6054 30.4878 30.135 30.7275C29.9395 30.8271 29.6592 30.9083 29.1112 30.9531C28.5486 30.999 27.8207 31 26.75 31H26.25C25.1793 31 24.4514 30.999 23.8888 30.9531C23.3408 30.9083 23.0605 30.8271 22.865 30.7275C22.3946 30.4878 22.0122 30.1054 21.7725 29.635C21.6729 29.4395 21.5917 29.1592 21.5469 28.6112C21.501 28.0486 21.5 27.3207 21.5 26.25V25.75C21.5 24.6793 21.501 23.9514 21.5469 23.3888C21.5917 22.8408 21.6729 22.5605 21.7725 22.365C22.0122 21.8946 22.3946 21.5122 22.865 21.2725C23.0605 21.1729 23.3408 21.0917 23.8888 21.0469C24.4514 21.001 25.1793 21 26.25 21Z"
														fill="#1A1A1A"
													/>
													<defs>
														<linearGradient
															id="paint0_linear_26_1707"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#1A1A1A" />
															<stop
																offset="1"
																stop-color="#1A1A1A"
																stop-opacity="0"
															/>
														</linearGradient>
														<linearGradient
															id="paint1_linear_26_1707"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#262626" />
															<stop
																offset="1"
																stop-color="#262626"
																stop-opacity="0"
															/>
														</linearGradient>
														<radialGradient
															id="paint2_radial_26_1707"
															cx="0"
															cy="0"
															r="1"
															gradientUnits="userSpaceOnUse"
															gradientTransform="translate(24 30.375) rotate(-55.3758) scale(15.9498)"
														>
															<stop stop-color="#B13589" />
															<stop offset="0.79309" stop-color="#C62F94" />
															<stop offset="1" stop-color="#8A3AC8" />
														</radialGradient>
														<radialGradient
															id="paint3_radial_26_1707"
															cx="0"
															cy="0"
															r="1"
															gradientUnits="userSpaceOnUse"
															gradientTransform="translate(23.375 35.375) rotate(-65.1363) scale(14.1214)"
														>
															<stop stop-color="#E0E8B7" />
															<stop offset="0.444662" stop-color="#FB8A2E" />
															<stop offset="0.71474" stop-color="#E2425C" />
															<stop
																offset="1"
																stop-color="#E2425C"
																stop-opacity="0"
															/>
														</radialGradient>
													</defs>
												</svg>
											</button>
											<button>
												<svg
													width="45"
													height="45"
													viewBox="0 0 53 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														fill="url(#paint0_linear_26_1713)"
													/>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														stroke="url(#paint1_linear_26_1713)"
													/>
													<g clip-path="url(#clip0_26_1713)">
														<path
															d="M22.8228 34.0163C30.2785 34.0163 34.3565 27.8391 34.3565 22.4825C34.3565 22.3071 34.3565 22.1324 34.3446 21.9585C35.138 21.3847 35.8227 20.6743 36.367 19.8602C35.6271 20.188 34.8423 20.4031 34.0386 20.498C34.8849 19.9913 35.5183 19.1946 35.8208 18.2559C35.025 18.7281 34.1545 19.0609 33.2468 19.2398C31.7116 17.6074 29.1437 17.5286 27.5113 19.0638C26.4584 20.0539 26.0119 21.5291 26.3386 22.937C23.0796 22.7734 20.0428 21.2341 17.9845 18.7016C16.9086 20.5537 17.4581 22.9234 19.2396 24.1128C18.5944 24.0937 17.9634 23.9196 17.3997 23.6054C17.3997 23.6221 17.3997 23.6395 17.3997 23.6568C17.4001 25.5865 18.7603 27.2483 20.6518 27.6306C20.0551 27.7932 19.4288 27.8172 18.8214 27.7001C19.3524 29.3515 20.8742 30.4827 22.6085 30.5152C21.173 31.6434 19.3998 32.2556 17.5742 32.2539C17.2517 32.2532 16.9297 32.2337 16.6094 32.1953C18.4631 33.3849 20.6202 34.0158 22.8228 34.013"
															fill="white"
														/>
													</g>
													<defs>
														<linearGradient
															id="paint0_linear_26_1713"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#1A1A1A" />
															<stop
																offset="1"
																stop-color="#1A1A1A"
																stop-opacity="0"
															/>
														</linearGradient>
														<linearGradient
															id="paint1_linear_26_1713"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#262626" />
															<stop
																offset="1"
																stop-color="#262626"
																stop-opacity="0"
															/>
														</linearGradient>
														<clipPath id="clip0_26_1713">
															<rect
																width="20"
																height="20"
																fill="white"
																transform="translate(16.5 16)"
															/>
														</clipPath>
													</defs>
												</svg>
											</button>
											<button>
												<svg
													width="45"
													height="45"
													viewBox="0 0 53 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														fill="url(#paint0_linear_26_1717)"
													/>
													<rect
														x="1"
														y="0.5"
														width="51"
														height="51"
														rx="25.5"
														stroke="url(#paint1_linear_26_1717)"
													/>
													<g clip-path="url(#clip0_26_1717)">
														<path
															d="M16.6094 17.5252C16.6094 16.7436 17.2631 16.1099 18.0695 16.1099H34.9071C35.7134 16.1099 36.3672 16.7436 36.3672 17.5252V34.4524C36.3672 35.2341 35.7134 35.8677 34.9071 35.8677H18.0695C17.2631 35.8677 16.6094 35.2341 16.6094 34.4524V17.5252Z"
															fill="white"
														/>
														<path
															d="M21.1059 22.5098C22.1465 22.5098 22.7944 21.8246 22.7944 20.9684C22.775 20.0929 22.1467 19.4269 21.1257 19.4269C20.1049 19.4269 19.4375 20.0929 19.4375 20.9684C19.4375 21.8246 20.0851 22.5098 21.0866 22.5098H21.1059Z"
															fill="#0F0F0F"
														/>
														<path
															d="M22.5995 32.6488V23.7271H19.6152V32.6488H22.5995Z"
															fill="#0F0F0F"
														/>
														<path
															d="M24.25 32.6489H27.2343V27.6666C27.2343 27.3999 27.2536 27.1336 27.3324 26.9431C27.5482 26.4103 28.0391 25.8586 28.8637 25.8586C29.9435 25.8586 30.3756 26.6768 30.3756 27.8761V32.6489H33.3595V27.5334C33.3595 24.793 31.8873 23.5179 29.9238 23.5179C28.314 23.5179 27.6071 24.4121 27.2143 25.0211H27.2343V23.7272H24.25C24.2891 24.5645 24.25 32.6489 24.25 32.6489Z"
															fill="#0F0F0F"
														/>
													</g>
													<defs>
														<linearGradient
															id="paint0_linear_26_1717"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#1A1A1A" />
															<stop
																offset="1"
																stop-color="#1A1A1A"
																stop-opacity="0"
															/>
														</linearGradient>
														<linearGradient
															id="paint1_linear_26_1717"
															x1="26.5"
															y1="0"
															x2="26.5"
															y2="52"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#262626" />
															<stop
																offset="1"
																stop-color="#262626"
																stop-opacity="0"
															/>
														</linearGradient>
														<clipPath id="clip0_26_1717">
															<rect
																width="20"
																height="20"
																fill="white"
																transform="translate(16.5 16)"
															/>
														</clipPath>
													</defs>
												</svg>
											</button>
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
				<div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] p-2 sm:p-10 mx-auto gap-10">
					<h1 className="text-center text-3xl font-semibold lg:w-[500px]">
						<span className="text-[#808080]">Our</span> Achievements
					</h1>
					<p className="text-sm text-[#808080] text-center lg:w-[900px]">
						Witness the brilliance of our previous projects. Our portfolio
						showcases the successful collaborations we ve had with diverse
						clients across various industries. Let our work speak for itself.
					</p>
					<div className="mt-6 w-full ">
						<div className="w-[100%] h-full flex flex-col gap-8 p-2 mx-auto relative">
							<div className="w-[100px] left-0 h-full absolute sm:flex rounded-full hidden">
								<div className="w-[33.3px] backdrop-filter backdrop-blur-xl bg-opacity-45 bg-[#0000004f] rounded-l-xl"></div>
								<div className="w-[33.3px] backdrop-filter backdrop-blur-xl bg-opacity-45 bg-[#000000]"></div>
								<div className="w-[33.3px] backdrop-filter backdrop-blur-xl bg-opacity-45 bg-[#0000004f] rounded-r-xl"></div>
							</div>
							<div className=" w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="pt-10 sm:pl-6 min-h-[250px] border p-2 rounded-xl border-[#1F1F1F] sm:flex-row flex-col flex gap-5 ">
										<h1 className="text-5xl sm:text-6xl font-semibold text-[#ffffff]">
											001
										</h1>
										<div className="w-full lg:px-4 flex flex-col gap-4">
											<div className="w-full h-[40px] flex justify-between items-center">
												<h3 className="sm:text-base text-sm">
													Foundation of DigitX
												</h3>
												<div className="px-4 py-2 rounded-full border-[#1F1F1F] border flex items-center gap-2">
													<svg
														width="20"
														height="20"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
															stroke="white"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>

													<span className="text-xs font-light">October 2017</span>
												</div>
											</div>
											<div className="h-full gap-4 rounded-xl border-[#1F1F1F] border p-5 flex flex-col justify-center achievements-bg">
												<h4 className="font-thin">Description</h4>
												<p className="text-sm text-[#8C8C8C]">
													Recognition for outstanding contributions to the digital
													industry, celebrating our ability to deliver exceptional
													web design and development solutions that push the
													boundaries of creativity and functionality.
												</p>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className=" w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="pt-10 sm:pl-6 min-h-[250px] border p-2 rounded-xl border-[#1F1F1F] sm:flex-row flex-col flex gap-5 ">
										<h1 className="text-5xl sm:text-6xl font-semibold text-[#ffffff]">
											002
										</h1>
										<div className="w-full lg:px-4 flex flex-col gap-4">
											<div className="w-full h-[40px] flex justify-between items-center">
												<h3 className="sm:text-base text-sm">
													100 Successful Projects
												</h3>
												<div className="px-4 py-2 rounded-full border-[#1F1F1F] border flex items-center gap-2">
													<svg
														width="20"
														height="20"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
															stroke="white"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>
													<span className="text-xs font-light">June 2018</span>
												</div>
											</div>
											<div className="h-full gap-4 rounded-xl border-[#1F1F1F] border p-5 flex flex-col justify-center achievements-bg">
												<h4 className="font-thin">Description</h4>
												<p className="text-sm text-[#8C8C8C]">
													We celebrated a significant milestone of completing 100
													successful projects, marking our commitment to delivering
													excellence in every endeavor. Our diverse portfolio
													showcased our ability to cater to various industries and
													client requirements.
												</p>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className=" w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="pt-10 sm:pl-6 min-h-[250px] border p-2 rounded-xl border-[#1F1F1F] sm:flex-row flex-col flex gap-5 ">
										<h1 className="text-5xl sm:text-6xl font-semibold text-[#ffffff]">
											003
										</h1>
										<div className="w-full lg:px-4 flex flex-col gap-4">
											<div className="w-full h-[40px] flex justify-between items-center">
												<h3 className="sm:text-base text-sm">
													Expansion to International Markets
												</h3>
												<div className="px-4 py-2 rounded-full border-[#1F1F1F] border flex items-center gap-2">
													<svg
														width="20"
														height="20"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
															stroke="white"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>
													<span className="text-xs font-light">August 2019</span>
												</div>
											</div>
											<div className="h-full gap-4 rounded-xl border-[#1F1F1F] border p-5 flex flex-col justify-center achievements-bg">
												<h4 className="font-thin">Description</h4>
												<p className="text-sm text-[#8C8C8C]">
													We expanded our services to international clients, opening
													new avenues for growth and global collaboration. Our
													expansion into international markets solidified our
													position as a leading digital agency with a global
													footprint.
												</p>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className=" w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="pt-10 sm:pl-6 min-h-[250px] border p-2 rounded-xl border-[#1F1F1F] sm:flex-row flex-col flex gap-5 ">
										<h1 className="text-5xl sm:text-6xl font-semibold text-[#ffffff]">
											004
										</h1>
										<div className="w-full lg:px-4 flex flex-col gap-4">
											<div className="w-full h-[40px] flex justify-between items-center">
												<h3 className="sm:text-base text-sm">
													DeltosparkInnovation Lab Inauguration
												</h3>
												<div className="px-4 py-2 rounded-full border-[#1F1F1F] border flex items-center gap-2">
													<svg
														width="20"
														height="20"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
															stroke="white"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>
													<span className="text-xs font-light">March 2021</span>
												</div>
											</div>
											<div className="h-full gap-4 rounded-xl border-[#1F1F1F] border p-5 flex flex-col justify-center achievements-bg">
												<h4 className="font-thin">Description</h4>
												<p className="text-sm text-[#8C8C8C]">
													To foster creativity and innovation, we inaugurated the
													DeltosparkInnovation Lab. This state-of-the-art facility
													served as a hub for our team to ideate, experiment, and
													explore emerging technologies.
												</p>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className=" w-full">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="pt-10 sm:pl-6 min-h-[250px] border p-2 rounded-xl border-[#1F1F1F] sm:flex-row flex-col flex gap-5 ">
										<h1 className="text-5xl sm:text-6xl font-semibold text-[#ffffff]">
											005
										</h1>
										<div className="w-full lg:px-4 flex flex-col gap-4">
											<div className="w-full h-[40px] flex justify-between items-center">
												<h3 className="sm:text-base text-sm">
													500 Satisfied Clients
												</h3>
												<div className="px-4 py-2 rounded-full border-[#1F1F1F] border flex items-center gap-2">
													<svg
														width="20"
														height="20"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
															stroke="white"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>

													<span className="text-xs font-light">September 2023</span>
												</div>
											</div>
											<div className="h-full gap-4 rounded-xl border-[#1F1F1F] border p-5 flex flex-col justify-center achievements-bg">
												<h4 className="font-thin">Description</h4>
												<p className="text-sm text-[#8C8C8C]">
													We celebrated reaching a milestone of serving 500
													satisfied clients, further strengthening our reputation
													for customer-centric services and successful project
													outcomes.
												</p>
											</div>
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
				<div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] p-2 sm:p-10 mx-auto gap-10">
					<h1 className="text-center xl:text-4xl text-2xl font-semibold lg:w-[500px]">
						<span className="text-[#808080]">Our</span> Awards & Recognitions
					</h1>
					<p className="text-sm text-[#808080] text-center lg:w-[900px]">
						Witness the brilliance of our previous projects. Our portfolio
						showcases the successful collaborations we ve had with diverse
						clients across various industries. Let our work speak for itself.
					</p>
					<div className="flex flex-col gap-10">
						<div className="w-full md:flex-row flex-col flex gap-10 ">
							<div className="md:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] min-h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-4 p-4">
										<div className="flex flex-col gap-2 items-center">
											<Image src={awardsicons} width={100} height={100} alt="" />
											<div className="flex gap-2 justify-center items-center px-3 py-2 rounded-full bg-[#0f0f0f] border border-[#1F1F1F]">
												<svg
													width="16"
													height="16"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<span className="text-xs">October 2017</span>
											</div>
										</div>
										<div className="flex flex-col justify-center items-center gap-4 w-[80%] h-[220px]">
											<h3 className="text-xl font-semibold text-center">
												Digital Excellence Award
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
												Recognition for outstanding contributions to the digital
												industry, celebrating our ability to deliver exceptional web
												design and development solutions that push the boundaries of
												creativity and functionality.
											</p>
										</div>
										<div className="flex flex-col justify-center items-center gap-4  rounded-xl border border-[#1F1F1F] w-[80%] h-[100px]">
											<h4 className="text-center">Why</h4>
											<p className="text-sm text-center text-[#808080]">
												Innovative web design and development solutions.
											</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="md:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] min-h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-4 p-4">
										<div className="flex flex-col gap-2 items-center">
											<Image src={awardsicons} width={100} height={100} alt="" />
											<div className="flex gap-2 justify-center items-center px-3 py-2 rounded-full bg-[#0f0f0f] border border-[#1F1F1F]">
												<svg
													width="16"
													height="16"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<span className="text-xs">March 2019</span>
											</div>
										</div>
										<div className="flex flex-col justify-center items-center gap-4 w-[80%] h-[220px]">
											<h3 className="text-xl text-center font-semibold">
												Top Mobile App Development Agency
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
												Recognized as a top mobile app development agency by
												industry experts, highlighting our proficiency in delivering
												seamless and user-centric mobile applications.
											</p>
										</div>
										<div className="flex flex-col justify-center items-center gap-4  rounded-xl border border-[#1F1F1F] w-[80%] h-[100px]">
											<h4 className="text-center">Why</h4>
											<p className="text-sm text-center text-[#808080]">
												Unparalleled app development services and designs.
											</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
						<div className="w-full flex md:flex-row flex-col gap-10 ">
							<div className="md:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] min-h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-4 p-4">
										<div className="flex flex-col gap-2 items-center">
											<Image src={awardsicons} width={100} height={100} alt="" />
											<div className="flex gap-2 justify-center items-center px-3 py-2 rounded-full bg-[#0f0f0f] border border-[#1F1F1F]">
												<svg
													width="16"
													height="16"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<span className="text-xs">July 2022</span>
											</div>
										</div>
										<div className="flex flex-col justify-center items-center gap-4 w-[80%] h-[220px]">
											<h3 className="text-xl text-center font-semibold">
												Best Digital Marketing Campaign
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
												Awarded for an exceptional digital marketing campaign with
												outstanding results, showcasing our data-driven strategies
												and targeted marketing efforts that achieved remarkable
												business growth for our clients.
											</p>
										</div>
										<div className="flex flex-col justify-center items-center gap-4  rounded-xl border border-[#1F1F1F] w-[80%] h-[100px]">
											<h4 className="text-center">Why</h4>
											<p className="text-sm text-center text-[#808080]">
												Data-driven strategies and targeted marketing efforts.
											</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
							<div className="md:w-1/2">
								<ScrollAnimation variants={scaleUpVariants}>
									<div className="border border-[#292929] min-h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-4  p-4">
										<div className="flex flex-col gap-2 items-center">
											<Image src={awardsicons} width={100} height={100} alt="" />
											<div className="flex gap-2 justify-center items-center px-3 py-2 rounded-full bg-[#0f0f0f] border border-[#1F1F1F]">
												<svg
													width="16"
													height="16"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625M10 10.625H10.0063V10.6313H10V10.625ZM10 12.5H10.0063V12.5063H10V12.5ZM10 14.375H10.0063V14.3813H10V14.375ZM8.125 12.5H8.13125V12.5063H8.125V12.5ZM8.125 14.375H8.13125V14.3813H8.125V14.375ZM6.25 12.5H6.25625V12.5063H6.25V12.5ZM6.25 14.375H6.25625V14.3813H6.25V14.375ZM11.875 10.625H11.8813V10.6313H11.875V10.625ZM11.875 12.5H11.8813V12.5063H11.875V12.5ZM11.875 14.375H11.8813V14.3813H11.875V14.375ZM13.75 10.625H13.7563V10.6313H13.75V10.625ZM13.75 12.5H13.7563V12.5063H13.75V12.5Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<span className="text-xs">July 2022</span>
											</div>
										</div>
										<div className="flex flex-col justify-center items-center gap-4 w-[80%] h-[220px]">
											<h3 className="text-xl text-center font-semibold">
												Best Digital Marketing Campaign
											</h3>
											<p className="text-sm text-center text-[#8C8C8C]">
												Awarded for an exceptional digital marketing campaign with
												outstanding results, showcasing our data-driven strategies
												and targeted marketing efforts that achieved remarkable
												business growth for our clients.
											</p>
										</div>
										<div className="flex flex-col justify-center items-center gap-4  rounded-xl border border-[#1F1F1F] w-[80%] h-[100px]">
											<h4 className="text-center">Why</h4>
											<p className="text-sm text-center text-[#808080]">
												Data-driven strategies and targeted marketing efforts.
											</p>
										</div>
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
				</ScrollAnimation>
				<ScrollAnimation variants={scaleUpVariants}>
				<div className=" mt-24  mx-5 min-h-[700px]  border border-[#262626] rounded-2xl p-5  my-cardBG flex flex-col items-center">
					<div className="mt-16 xl:w-[900px] flex flex-col gap-5 lg:px-10">
						<h1 className="text-2xl font-semibold text-center">
							Ready to Transform Your Digital Presence?
						</h1>
						<p className="text-sm text-center text-[#808080]">
							Take the first step towards digital success with Deltosparkby your
							side. Our team of experts is eager to craft tailored solutions
							that drive growth for your business. Whether you need a stunning
							website, a powerful mobile app, or a data-driven marketing
							campaign, we ve got you covered. Let s embark on this
							transformative journey together.
						</p>
					</div>
					<div className="mt-12 flex flex-col items-center gap-3">
					<span className="text-sm text-center font-semibold">
							Build Your MVP in Less than 45 days
							</span>
							<div className="flex gap-3">
							<Link
											href={"https://calendly.com/theraihan/talk-with-raihan"}
											target="_blank"
											 className="text-xs px-2 lg:px-4 py-2 lg:py-3 bg-white rounded-full text-black font-semibold">
										
											Free Consultation
										</Link>
						
							</div>
					</div>
					<div className="w-full mt-12 rounded-xl flex flex-col gap-6  bg-[#0f0f0f] p-">
						<div className="w-full h-[80px] flex flex-col items-center justify-center p-2 gap-4">
							<h4 className="font-semibold text-center">Online Inquiry Form</h4>
							<p className="lg:text-sm text-center text-xs text-[#808080]">
								Please fill in the following details, and we ll get back to you
								within 24 hours.
							</p>
						</div>
						<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
							<input type="hidden" name="form-name" value="contact" />
							<div className="w-full h-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
								<div className="h-full w-full lg:w-1/3 flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Name"
										className="font-light ml-2 text-xs sm:text-sm"
									>
										Name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										required
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-full py-3 px-3 w-full placeholder:text-sm placeholder:text-[#666666] focus:outline-none"
										placeholder="Name"
										onChange={handleChange}
									/>
								</div>
								<div className="h-full w-full lg:w-1/3 flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Email"
										className="text-xs sm:text-sm font-light ml-2"
									>
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										required
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-full py-3 px-3 w-full placeholder:text-sm placeholder:text-[#666666] focus:outline-none"
										placeholder="Enter your Email"
										onChange={handleChange}
									/>
								</div>
								<div className="h-full w-full lg:w-1/3 flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Phone Number"
										className="text-xs sm:text-sm font-light ml-2"
									>
										Phone Number
									</label>
									<input
										type="text"
										name="mobile"
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-full py-3 px-3 w-full placeholder:text-sm placeholder:text-[#666666] focus:outline-none"
										placeholder="Enter your Phone Number"
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="w-full h-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
								<div className="h-full w-full lg:w-1/3 flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Select Service"
										className="text-xs sm:text-sm font-light ml-2"
									>
										Select Service
									</label>
									<select
										id="underline_select"
										name="services"
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-full py-3 px-3 w-full text-sm placeholder:text-sm placeholder:text-[#666666] focus:outline-none appearance-none text-[#666666]"
										onChange={handleChange}
									>
													<option value="">Choose your services</option>
													<option value="Website Development">Website Development</option>
													<option value="Mobile App Development">Mobile App Development</option>
													<option value="Web Design">Web Design</option>
													<option value="SAAS Development">SAAS Development</option>
													<option value="AI & Machine Learning">AI & Machine Learning</option>
													<option value="Automation">Automation</option>
													<option value="Blockchain Development">Blockchain Development</option>
													<option value="SEO/Digital Marketing">SEO/Digital Marketing</option>
													<option value="Augmented/Virtual Reality">Augmented/Virtual Reality</option>
													<option value="Other">Other</option>
									</select>
								</div>
								<div className="h-full w-full lg:w-1/3 flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Company / Organization Name"
										className="text-xs sm:text-sm font-light ml-2"
									>
										Company / Organization Name
									</label>
									<input
										name="company"
										type="text"
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-full py-3 px-3 w-full placeholder:text-sm placeholder:text-[#666666] focus:outline-none"
										placeholder="Enter Organization Name"
										onChange={handleChange}
									/>
								</div>
								<div className="h-full w-full lg:w-1/3 flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Subject"
										className="text-xs sm:text-sm font-light ml-2"
									>
										Subject
									</label>
									<input
										type="text"
										name="subject"
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-full py-3 px-3 w-full placeholder:text-sm placeholder:text-[#666666] focus:outline-none"
										placeholder="Subject"
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="w-full min-h-[120px] flex items-center justify-between">
								<div className="h-full w-full flex flex-col justify-center px-5 gap-2">
									<label
										htmlFor="Message"
										className="text-xs sm:text-sm font-light ml-2"
									>
										Message
									</label>
									<textarea
										name="message"
										id="message"
										placeholder="Enter your Message"
										className="bg-[#0f0f0f] border border-[#1F1F1F] rounded-xl h-[100px] p-4 w-full placeholder:text-sm placeholder:text-[#666666] focus:outline-none"
										onChange={handleChange}
									></textarea>
								</div>
							</div>
							<div className="w-full min-h-[70px] flex items-center justify-center">
								<button
									type="submit"
									className="border border-[#1F1F1F] px-5 py-3 rounded-full flex justify-center items-center gap-2 bg-[#1a1a1a]"
								>
									<span className="text-xs sm:text-sm">Send your Inquiry</span>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M5.33398 11.9999C5.33398 11.42 5.79065 10.9499 6.35398 10.9499H15.3816L12.447 8.20678C12.0409 7.80484 12.0283 7.14015 12.4187 6.72214C12.8092 6.30413 13.4549 6.2911 13.861 6.69303L18.621 11.243C18.821 11.441 18.934 11.7143 18.934 11.9999C18.934 12.2855 18.821 12.5588 18.621 12.7568L13.861 17.3068C13.4549 17.7087 12.8092 17.6957 12.4187 17.2777C12.0283 16.8597 12.0409 16.195 12.447 15.793L15.3816 13.0499H6.35398C5.79065 13.0499 5.33398 12.5798 5.33398 11.9999Z"
											fill="white"
										/>
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>
				</ScrollAnimation>
			</main>
		</>
	);
};

export default About;
