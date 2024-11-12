import { Metadata } from "next";

type Props = {
	params: Promise<{
		productId: string;
	}>;
};

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const productId = (await params).productId;

	return {
		title: `Product ${productId}`,
	};
};

export default async function ProductDetails({ params }: Props) {
	return <h1>Product Details {(await params).productId}</h1>;
}
