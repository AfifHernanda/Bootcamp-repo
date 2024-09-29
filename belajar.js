function bigSorting(unsorted) {
    return unsorted.sort((a, b) => {
        // Compare lengths first
        if (a.length !== b.length) {
            return a.length - b.length; // Sort by length
        }
        // If lengths are equal, compare lexicographically
        return a.localeCompare(b);
    });
}