// //simple sort
// let numbers = ["5", "3", "25", "215"];
// let sorted = numbers.sort(function(a,b) {
//   return a - b;
// });
// console.log(sorted);  // Output: [1, 4, 9, 16]

//big sorting
unsorted = [ "73736","12512","52525","547457","215","4","126161251","231124","421416126","1251251",]

function bigSorting(unsortedData) {
    return unsortedData.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length; //ganti b - a untuk descending
        }
        return a - b;
    });
}
console.log(bigSorting(unsorted))
//output: ['4','215','12512','52525','73736','231124','547457','1251251','126161251','421416126']


// function sortElementsByName(elements, order = 'asc') {
//     const names = elements.map(element => element.getText());

//     if (order === 'asc') {
//         names.sort((a, b) => a.localeCompare(b));
//     } else if (order === 'desc') {
//         names.sort((a, b) => b.localeCompare(a));
//     }

//     return names;
// }

// describe('Sort elements by name', () => {
//     it('should sort elements in ascending and descending order', () => {
//         const elements = $$('your-element-selector');
        
//         let sortedAsc = sortElementsByName(elements, 'asc');
//         console.log('Sorted Ascending:', sortedAsc);

//         expect(sortedAsc).toEqual(sortedAsc.sort((a, b) => a.localeCompare(b)));

//         let sortedDesc = sortElementsByName(elements, 'desc');
//         console.log('Sorted Descending:', sortedDesc);

//         expect(sortedDesc).toEqual(sortedDesc.sort((a, b) => b.localeCompare(a)));
//     });
// });
