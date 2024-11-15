import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function StudentDetail() {
    const { id } = useParams(); // Get the student ID from the URL
    const [student, setStudent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/batch.json') // Assuming the data is in batch.json
            .then(response => response.json())
            .then(data => {
                const studentData = data.find(student => student._id === id);
                setStudent(studentData);
                setIsLoading(false);
            })
            .catch(error => console.error("Error fetching student data:", error));
    }, [id]);

    if (isLoading) {
        return <p>Loading student details...</p>;
    }

    if (!student) {
        return <p>Student not found!</p>;
    }

    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold mb-6">{student.name}</h1>

            <img
                src={student.img}
                alt={student.name}
                className="w-48 h-48 rounded-full mx-auto mb-4"
            />

            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>Occupation:</strong> {student.occupation}</p>
            <p><strong>Batch Year:</strong> {student.batch_year}</p>
        </div>
    );
}
