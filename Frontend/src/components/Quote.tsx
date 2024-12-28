import { useEffect, useState } from "react";
import { useRandomQuote } from "../hooks";
interface Quote {
	text: string;
	author: string;
}

export default function Quote() {
	const [quote, setQuote] = useState<Quote>();

	useEffect(() => {
		const FetchQuote = async () => {
			try {
				const randomQuote = await useRandomQuote();
				setQuote(randomQuote);
			} catch (error) {
				console.error("Error fetching quote:", error);
			}
		};

		FetchQuote();
	}, []);
	return (
		<div className="flex items-center justify-center h-screen text-3xl font-extrabold bg-slate-200">
			<div className="w-3/4">
				{quote ? (
					<>
						<div>"{quote.text}"</div>
						<div className="mt-4 text-2xl font-semibold">
							{quote.author.substring(
								0,
								quote.author.indexOf(",")
							)}
						</div>
					</>
				) : (
					<div>Human <br/>
					stories & ideas <br/>
					A place to read, write, and deepen your understanding</div>
				)}
			</div>
		</div>
	);
}
