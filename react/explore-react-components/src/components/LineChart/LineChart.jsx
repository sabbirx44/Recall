import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarksData = [
        { id: 1, name: "John", physics: 78, chemistry: 82, math: 85 },
        { id: 2, name: "Emily", physics: 85, chemistry: 88, math: 92 },
        { id: 3, name: "Michael", physics: 75, chemistry: 79, math: 78 },
        { id: 4, name: "Sophia", physics: 82, chemistry: 90, math: 88 },
        { id: 5, name: "William", physics: 74, chemistry: 81, math: 80 },
        { id: 6, name: "Isabella", physics: 90, chemistry: 94, math: 95 },
        { id: 7, name: "James", physics: 68, chemistry: 72, math: 75 },
        { id: 8, name: "Olivia", physics: 84, chemistry: 88, math: 90 },
        { id: 9, name: "Benjamin", physics: 79, chemistry: 83, math: 84 },
        { id: 10, name: "Emma", physics: 88, chemistry: 90, math: 89 }
    ];

    return (
        <div className='m-auto'>
            <LChart width={1000} height={500} data={subjectMarksData}>
                <XAxis dataKey={'name'} />
                <YAxis />
                <Line dataKey={'physics'} stroke='orange'></Line>
                <Line dataKey={'chemistry'} stroke='green'></Line>
                <Line dataKey={'math'} stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;