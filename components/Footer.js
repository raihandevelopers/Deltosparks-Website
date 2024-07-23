"use client"
import React from "react";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import { variants, scaleUpVariants } from "@/animation/variants";
import { useEffect } from "react";

const Footer = () => {
	return (
		<>
			<footer className="w-full mt-16">
				<ScrollAnimation variants={scaleUpVariants}>
					<div className="h-24  flex justify-between w-[90%] mx-auto border-b border-[#1F1F1F]">
						<div className="flex justify-center items-center">
							<svg
								width="70"
								height="48"
								viewBox="0 0 76 54"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.5189 54V42.8351H20.4535C22.9371 42.8351 25.1772 42.4703 27.1739 41.7405C29.1705 40.9622 30.875 39.8919 32.2873 38.5297C33.6995 37.1189 34.7709 35.4405 35.5014 33.4946C36.2318 31.5 36.5971 29.3108 36.5971 26.927C36.5971 24.4459 36.2318 22.2324 35.5014 20.2865C34.7709 18.3405 33.6995 16.6865 32.2873 15.3243C30.875 13.9622 29.1705 12.9405 27.1739 12.2595C25.1772 11.5297 22.9371 11.1649 20.4535 11.1649H10.5189V0H19.796C24.6172 0 28.8296 0.705407 32.4333 2.11622C36.0371 3.52703 39.0564 5.44865 41.4913 7.88108C43.9262 10.3135 45.7281 13.1108 46.8969 16.273C48.1143 19.3865 48.7231 22.6703 48.7231 26.1243V27.7297C48.7231 30.9405 48.1143 34.127 46.8969 37.2892C45.7281 40.4027 43.9262 43.2243 41.4913 45.7541C39.0564 48.2351 36.0371 50.2297 32.4333 51.7378C28.8296 53.2459 24.6172 54 19.796 54H10.5189ZM0 54V0H11.9799V54H0Z"
									fill="#666666"
								/>
								<path
									d="M23.8867 53.7078L42.0757 25.3213L42.2218 26.5618L25.4207 0.4375H38.5694L48.9422 17.0753H50.6223L60.849 0.4375H73.6325L56.7584 26.7078L56.5392 25.5402L75.3126 53.7078H62.0909L49.9649 34.8807H48.2117L36.6701 53.7078H23.8867Z"
									fill="white"
								/>
							</svg>
						</div>
						<div className="flex gap-4 w-[500px] justify-end  items-center ">
							<span className="sm:block hidden">Follow Us on Social Media</span>
							<Link href="/#" className="LInkedIn ">
								<svg
									width="40"
									height="40"
									viewBox="0 0 64 64"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="0.5"
										y="0.5"
										width="63"
										height="63"
										rx="31.5"
										fill="url(#paint0_linear_26_3362)"
									/>
									<rect
										x="0.5"
										y="0.5"
										width="63"
										height="63"
										rx="31.5"
										stroke="url(#paint1_linear_26_3362)"
									/>
									<g clipPath="url(#clip0_26_3362)">
										<path
											d="M20.1318 21.8302C20.1318 20.8924 20.9164 20.1318 21.884 20.1318H42.0891C43.0567 20.1318 43.8412 20.8924 43.8412 21.8302V42.1428C43.8412 43.0809 43.0567 43.8412 42.0891 43.8412H21.884C20.9164 43.8412 20.1318 43.0809 20.1318 42.1428V21.8302Z"
											fill="white"
										/>
										<path
											d="M25.5285 27.8118C26.7772 27.8118 27.5546 26.9896 27.5546 25.9622C27.5314 24.9116 26.7774 24.1123 25.5522 24.1123C24.3272 24.1123 23.5264 24.9116 23.5264 25.9622C23.5264 26.9896 24.3035 27.8118 25.5053 27.8118H25.5285Z"
											fill="#0F0F0F"
										/>
										<path
											d="M27.3195 39.9786V29.2725H23.7383V39.9786H27.3195Z"
											fill="#0F0F0F"
										/>
										<path
											d="M29.3008 39.9786H32.882V33.9999C32.882 33.6799 32.9051 33.3603 32.9997 33.1316C33.2587 32.4923 33.8477 31.8303 34.8372 31.8303C36.133 31.8303 36.6515 32.8121 36.6515 34.2512V39.9786H40.2321V33.84C40.2321 30.5515 38.4655 29.0215 36.1093 29.0215C34.1775 29.0215 33.3293 30.0945 32.858 30.8252H32.882V29.2725H29.3008C29.3477 30.2773 29.3008 39.9786 29.3008 39.9786Z"
											fill="#0F0F0F"
										/>
									</g>
									<defs>
										<linearGradient
											id="paint0_linear_26_3362"
											x1="32"
											y1="0"
											x2="32"
											y2="64"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#1A1A1A" />
											<stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
										</linearGradient>
										<linearGradient
											id="paint1_linear_26_3362"
											x1="32"
											y1="0"
											x2="32"
											y2="64"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#262626" />
											<stop offset="1" stopColor="#262626" stopOpacity="0" />
										</linearGradient>
										<clipPath id="clip0_26_3362">
											<rect
												width="24"
												height="24"
												fill="white"
												transform="translate(20 20)"
											/>
										</clipPath>
									</defs>
								</svg>
							</Link>
							<Link href={"/#"} className="Instagram">
								<svg
									width="40"
									height="40"
									viewBox="0 0 64 64"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="0.5"
										y="0.5"
										width="63"
										height="63"
										rx="31.5"
										fill="url(#paint0_linear_26_3369)"
									/>
									<rect
										x="0.5"
										y="0.5"
										width="63"
										height="63"
										rx="31.5"
										stroke="url(#paint1_linear_26_3369)"
									/>
									<rect
										x="21.5"
										y="21.5"
										width="21"
										height="21"
										rx="6"
										fill="url(#paint2_radial_26_3369)"
									/>
									<rect
										x="21.5"
										y="21.5"
										width="21"
										height="21"
										rx="6"
										fill="url(#paint3_radial_26_3369)"
									/>
									<rect
										x="21.5"
										y="21.5"
										width="21"
										height="21"
										rx="6"
										fill="white"
									/>
									<path
										d="M37.25 27.875C37.25 28.4963 36.7463 29 36.125 29C35.5037 29 35 28.4963 35 27.875C35 27.2537 35.5037 26.75 36.125 26.75C36.7463 26.75 37.25 27.2537 37.25 27.875Z"
										fill="#1A1A1A"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M32 35.75C34.0711 35.75 35.75 34.0711 35.75 32C35.75 29.9289 34.0711 28.25 32 28.25C29.9289 28.25 28.25 29.9289 28.25 32C28.25 34.0711 29.9289 35.75 32 35.75ZM32 34.25C33.2426 34.25 34.25 33.2426 34.25 32C34.25 30.7574 33.2426 29.75 32 29.75C30.7574 29.75 29.75 30.7574 29.75 32C29.75 33.2426 30.7574 34.25 32 34.25Z"
										fill="#1A1A1A"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M24.5 31.7C24.5 29.1798 24.5 27.9196 24.9905 26.957C25.4219 26.1103 26.1103 25.4219 26.957 24.9905C27.9196 24.5 29.1798 24.5 31.7 24.5H32.3C34.8202 24.5 36.0804 24.5 37.043 24.9905C37.8897 25.4219 38.5781 26.1103 39.0095 26.957C39.5 27.9196 39.5 29.1798 39.5 31.7V32.3C39.5 34.8202 39.5 36.0804 39.0095 37.043C38.5781 37.8897 37.8897 38.5781 37.043 39.0095C36.0804 39.5 34.8202 39.5 32.3 39.5H31.7C29.1798 39.5 27.9196 39.5 26.957 39.0095C26.1103 38.5781 25.4219 37.8897 24.9905 37.043C24.5 36.0804 24.5 34.8202 24.5 32.3V31.7ZM31.7 26H32.3C33.5849 26 34.4583 26.0012 35.1334 26.0563C35.7911 26.1101 36.1274 26.2074 36.362 26.327C36.9265 26.6146 37.3854 27.0735 37.673 27.638C37.7926 27.8726 37.8899 28.2089 37.9437 28.8666C37.9988 29.5417 38 30.4151 38 31.7V32.3C38 33.5849 37.9988 34.4583 37.9437 35.1334C37.8899 35.7911 37.7926 36.1274 37.673 36.362C37.3854 36.9265 36.9265 37.3854 36.362 37.673C36.1274 37.7926 35.7911 37.8899 35.1334 37.9437C34.4583 37.9988 33.5849 38 32.3 38H31.7C30.4151 38 29.5417 37.9988 28.8666 37.9437C28.2089 37.8899 27.8726 37.7926 27.638 37.673C27.0735 37.3854 26.6146 36.9265 26.327 36.362C26.2074 36.1274 26.1101 35.7911 26.0563 35.1334C26.0012 34.4583 26 33.5849 26 32.3V31.7C26 30.4151 26.0012 29.5417 26.0563 28.8666C26.1101 28.2089 26.2074 27.8726 26.327 27.638C26.6146 27.0735 27.0735 26.6146 27.638 26.327C27.8726 26.2074 28.2089 26.1101 28.8666 26.0563C29.5417 26.0012 30.4151 26 31.7 26Z"
										fill="#1A1A1A"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_26_3369"
											x1="32"
											y1="0"
											x2="32"
											y2="64"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#1A1A1A" />
											<stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
										</linearGradient>
										<linearGradient
											id="paint1_linear_26_3369"
											x1="32"
											y1="0"
											x2="32"
											y2="64"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#262626" />
											<stop offset="1" stopColor="#262626" stopOpacity="0" />
										</linearGradient>
										<radialGradient
											id="paint2_radial_26_3369"
											cx="0"
											cy="0"
											r="1"
											gradientUnits="userSpaceOnUse"
											gradientTransform="translate(29 37.25) rotate(-55.3758) scale(19.1397)"
										>
											<stop stopColor="#B13589" />
											<stop offset="0.79309" stopColor="#C62F94" />
											<stop offset="1" stopColor="#8A3AC8" />
										</radialGradient>
										<radialGradient
											id="paint3_radial_26_3369"
											cx="0"
											cy="0"
											r="1"
											gradientUnits="userSpaceOnUse"
											gradientTransform="translate(28.25 43.25) rotate(-65.1363) scale(16.9457)"
										>
											<stop stopColor="#E0E8B7" />
											<stop offset="0.444662" stopColor="#FB8A2E" />
											<stop offset="0.71474" stopColor="#E2425C" />
											<stop offset="1" stopColor="#E2425C" stopOpacity="0" />
										</radialGradient>
									</defs>
								</svg>
							</Link>
							<Link href={"/#"} className="X">
								<svg
									width="40"
									height="40"
									viewBox="0 0 64 64"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="0.5"
										y="0.5"
										width="63"
										height="63"
										rx="31.5"
										fill="url(#paint0_linear_26_3375)"
									/>
									<rect
										x="0.5"
										y="0.5"
										width="63"
										height="63"
										rx="31.5"
										stroke="url(#paint1_linear_26_3375)"
									/>
									<path
										d="M27.5879 41.6196C36.5348 41.6196 41.4284 34.207 41.4284 27.7791C41.4284 27.5686 41.4284 27.3589 41.4142 27.1503C42.3662 26.4616 43.1879 25.6092 43.8409 24.6323C42.9532 25.0257 42.0114 25.2838 41.0469 25.3976C42.0625 24.7896 42.8225 23.8336 43.1855 22.7071C42.2306 23.2738 41.186 23.6732 40.0967 23.8879C38.2545 21.9289 35.1731 21.8344 33.2141 23.6766C31.9507 24.8647 31.4149 26.635 31.8069 28.3244C27.8961 28.1282 24.252 26.2809 21.782 23.2419C20.4909 25.4645 21.1503 28.3081 23.2881 29.7354C22.5138 29.7125 21.7567 29.5036 21.0802 29.1266C21.0802 29.1466 21.0802 29.1674 21.0802 29.1882C21.0807 31.5038 22.713 33.4981 24.9828 33.9567C24.2668 34.1519 23.5152 34.1806 22.7862 34.0402C23.4235 36.0218 25.2496 37.3793 27.3308 37.4183C25.6082 38.7721 23.4804 39.5068 21.2896 39.5047C20.9027 39.5039 20.5162 39.4805 20.1318 39.4344C22.3563 40.8619 24.9448 41.6191 27.5879 41.6156"
										fill="white"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_26_3375"
											x1="32"
											y1="0"
											x2="32"
											y2="64"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#1A1A1A" />
											<stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
										</linearGradient>
										<linearGradient
											id="paint1_linear_26_3375"
											x1="32"
											y1="0"
											x2="32"
											y2="64"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#262626" />
											<stop offset="1" stopColor="#262626" stopOpacity="0" />
										</linearGradient>
									</defs>
								</svg>
							</Link>
						</div>
					</div>
					<div className="sm:flex justify-between max-w-[90%] mx-auto border-b border-[#1F1F1F]  p-5  hidden">
						<div className=" flex-col items-center ">
							<h4 className=" font-semibold ">Home</h4>
							<div className="mt-2 flex flex-col gap-1">
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									Benefits
								</Link>
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									Our Testimonials
								</Link>
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all  flex text-sm text-[#808080]"
								>
									Partners
								</Link>
							</div>
						</div>
						<div className="flex-col items-center ">
							<h4 className=" font-semibold ">Services</h4>
							<div className="mt-2 flex flex-col gap-1">
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									Web Design
								</Link>
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									Website Development
								</Link>
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									App Development
								</Link>
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									Digital Marketing
								</Link>
							</div>
						</div>
						<div className="flex-col items-center ">
							<h4 className=" font-semibold ">Projects</h4>
							<div className="mt-2 flex flex-col gap-1">
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									ABC Tech Solutions{" "}
								</Link>
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									GreenEarth Eco Store{" "}
								</Link>
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									HealthTech Innovations{" "}
								</Link>
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									GlobalTech Solutions{" "}
								</Link>
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									TechGuru Inc.{" "}
								</Link>
							</div>
						</div>
						<div className=" flex-col items-center ">
							<h4 className=" font-semibold ">About Us</h4>
							<div className="mt-2 flex flex-col gap-1">
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									Our Team{" "}
								</Link>
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									Achievements{" "}
								</Link>
								<Link
									href={"/#"}
									className="hover:text-[#b1b0b0] transition-all flex text-sm text-[#808080]"
								>
									Awards{" "}
								</Link>
							</div>
						</div>
					</div>
					<div className="flex justify-between w-[90%] mx-auto h-16 items-center  text-[#666666] text-xs md:text-sm">
						<span className="">@2024 DigitX. All Rights Reserved.</span>
						<div>Version 1.0</div>
						<div className="sm:block hidden">
							<span>Privacy Policy</span>
							<span>Terms & Condition</span>
							<span>Cookie Policy</span>
						</div>
					</div>
				</ScrollAnimation>
			</footer>
		</>
	);
};

export default Footer;
