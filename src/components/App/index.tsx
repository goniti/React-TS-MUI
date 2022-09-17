import React, { useState } from 'react';
import { formatDate } from '../../helpers/date';
import { DatePicker } from '../DatePicker';
import { getNasaApodUrl } from '../../helpers/url';
import useFetch from '../../hooks/useFetch';

function App() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const url = getNasaApodUrl(formatDate(selectedDate));
    const [data, isLoading, isError] = useFetch(url);
    console.log(data);

    if (isError) return <p>There is an error.</p>;
    if (isLoading) return <p>Loading...</p>;
    return (
        <div className="App">
            <header className="App-header"> Hello </header>

            <DatePicker setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
        </div>
    );
}

export default App;
