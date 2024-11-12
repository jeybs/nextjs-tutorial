function getRandomInt(count: number) {
	return Math.floor(Math.random() * count);
}

export default async function ReviewDetail({
	params,
}: {
	params: Promise<{
		productId: string;
		reviewId: string;
	}>;
}) {
	const args = await params;
	console.log(args);
	const random = getRandomInt(2);
	console.log("Random:", random);
	if (random == 1) {
		throw new Error("Error loading review");
	}

	return (
		<h1>
			Review {args.reviewId} for product {args.productId}
		</h1>
	);
}
