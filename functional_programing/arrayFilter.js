const mhs = [
    {
        name: 'dika',
        score: 90,
    },
    {
        name: 'bayu',
        score: 70,
    },
    {
        name: 'hakim',
        score: 75,
    },
    {
        name: 'rio',
        score: 85,
    }
];

const eligiberForScholarshipStudents = mhs.filter((student) => student.score > 80);

console.log(eligiberForScholarshipStudents);