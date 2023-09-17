import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay = 500): [T, boolean] => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);
	const [isPending, setIsPending] = useState<boolean>(false);

	useEffect(() => {
		setIsPending(true);
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
			setIsPending(false);
		}, delay);

		return () => {
			clearTimeout(timeout);
		};
	}, [value, delay]);

	return [debouncedValue, isPending];
};
