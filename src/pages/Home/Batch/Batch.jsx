import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Batch() {
  const [students, setStudents] = useState([]);
  const [batchYear, setBatchYear] = useState('default'); // Default batch year as 'default'
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term
  const [displayLimit, setDisplayLimit] = useState(9); // Number of students to display
  const initialDisplayLimit = 9;

  useEffect(() => {
    fetch('/batch.json')
      .then(response => response.json())
      .then(data => {
        setStudents(data); // Set students data
        setIsLoading(false); // Set loading to false after fetching
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleBatchYearChange = (e) => {
    setBatchYear(e.target.value);
    setDisplayLimit(initialDisplayLimit);
    setSearchTerm('');
  };

  const filteredStudents = students.filter(student => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      student.name.toLowerCase().includes(searchLower) ||
      student.phone.includes(searchLower) ||
      student.batch_year.toString().includes(searchLower);

    if (batchYear === 'default') {
      return matchesSearch;
    }

    return student.batch_year === parseInt(batchYear) && matchesSearch;
  });

  const studentsToDisplay = filteredStudents.slice(0, displayLimit);

  const handleShowMore = () => {
    setDisplayLimit(prevLimit => prevLimit + initialDisplayLimit);
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Student List</h1>

      <label htmlFor="batchYear" className="mr-2 text-lg font-semibold">Select Batch Year:</label>
      <select
        id="batchYear"
        value={batchYear}
        onChange={handleBatchYearChange}
        className="p-2 border border-gray-300 rounded-lg mb-6"
      >
        <option value="default">Default</option>
        {[...new Set(students.map(student => student.batch_year))].map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search by name, phone, or batch..."
        className="p-2 border border-gray-300 rounded-lg mb-6 w-64"
      />

      {isLoading ? (
        <p>Loading students...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {studentsToDisplay.length > 0 ? (
            studentsToDisplay.map(student => (
              <div key={student._id} className="bg-white shadow-lg rounded-lg p-6">
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
                <p className="text-gray-600">Batch: {student.batch_year}</p>
                <Link
                  to={`/student/${student._id}`} // Link to the detailed student page
                  className="text-blue-500 my-btn mt-4 inline-block"
                >
                  See Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No students found for the given search criteria.</p>
          )}
        </div>
      )}

      {filteredStudents.length > displayLimit && (
        <div className="mt-6">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
