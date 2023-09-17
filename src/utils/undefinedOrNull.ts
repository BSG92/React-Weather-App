export function UndefinedOrNull<T>(value: T): boolean {
	if (typeof value === 'undefined' || value === null) return true;
	return false;
}
