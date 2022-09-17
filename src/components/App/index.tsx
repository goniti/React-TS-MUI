import React, { useState } from 'react';
import { formatDate } from '../../helpers/date';
import { DatePicker } from '../DatePicker';

function App() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    console.log(formatDate(selectedDate));

    return (
        <div className="App">
            <header className="App-header"> Hello </header>

            <DatePicker setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
        </div>
    );
}

export default App;
