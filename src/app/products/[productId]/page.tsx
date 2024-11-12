import { Metadata } from "next";

type Props = {
	params: {
		productId: string;
	};
};

export const generateMetadata = ({ params }: Props): Metadata => {
	return {
		title: `Product ${params.productId}`,
	};
};

export default async function ProductDetails({ params }: Props) {
	return <h1>Product Details {params.productId}</h1>;
}
