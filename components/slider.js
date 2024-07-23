"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import servicesprotfolio1 from "@/public/servicesprotfolio1.jpg";
import servicesprotfolio2 from "@/public/servicesportfolio2.jpg";
import Link from "next/link";

const images = [servicesprotfolio1, servicesprotfolio2, servicesprotfolio1];

const CustomSlider = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: (index) => setCurrentSlide(index),
	};

	const openModal = (index) => {
		setCurrentSlide(index);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="relative">
			<Slider {...settings}>
				{images.map((image, index) => (
					<div
						key={index}
						onClick={() => openModal(index)}
						className="cursor-pointer"
					>
						<Image
							src={image}
							alt={`Slide ${index}`}
							width={1500}
							height={1500}
							className="w-full max-h-[400px] min-h-[250px] object-fill rounded-xl"
						/>
					</div>
				))}
			</Slider>

			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
					<div className="relative max-w-screen-lg w-full">
						<Slider {...settings} initialSlide={currentSlide}>
							{images.map((image, index) => (
								<div key={index}>
									<Image
										src={image}
										className="w-full max-h-[450px] min-h-[250px] object-fill rounded-xl"
										width={5000}
										height={5000}
										alt=""
									/>
								</div>
							))}
						</Slider>
						<button
							onClick={closeModal}
							className="absolute top-2 right-2 text-white text-2xl"
						>
							&times;
						</button>
						<Link href={"#"} className="absolute border px-2 py-1 rounded-lg left-1/2 bottom-[-50px] transform -translate-x-1/2">
							Visit Project
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default CustomSlider;
