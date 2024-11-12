"use client";
function getRandomInt(count: number) {
	return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
	params,
}: {
	params: {
		productId: string;
		reviewId: string;
	};
}) {
	console.log(params);
	const random = getRandomInt(2);
	console.log("Random:", random);
	if (random == 1) {
		throw new Error("Error loading review");
	}

	return (
		<h1>
			Review {params.reviewId} for product {params.productId}
		</h1>
	);
}
