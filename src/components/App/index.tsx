import React, { useState } from 'react';
// ? Helpers
import { formatDate, yesterday } from '../../helpers/date';
import { getNasaApodUrl } from '../../helpers/url';
// ? Hooks
import useFetch from '../../hooks/useFetch';
// ? Components
import { Card } from '../Card';
import { Container } from '../Container';
import { DatePicker } from '../DatePicker';
import { Error } from '../Error';
import { Loader } from '../Loader';
import { Hero } from '../Hero';
import { Main } from '../Main';

function App() {
    const [selectedDate, setSelectedDate] = useState<Date>(yesterday);
    const url = getNasaApodUrl(formatDate(selectedDate));
    const [data, isLoading, isError, errorMsg] = useFetch(url);

    if (isLoading) return <Loader />;
    return (
        <Main>
            <Hero>
                <Container>
                    <DatePicker setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
                    {isError && <Error message={`${errorMsg}`} />}
                </Container>
                {data && (
                    <Container>
                        <Card data={data} />
                    </Container>
                )}
            </Hero>
        </Main>
    );
}

export default App;
