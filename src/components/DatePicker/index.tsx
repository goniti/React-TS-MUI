import React, { FC, Dispatch, SetStateAction } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { color } from '../../styles/color';

const DatePickerWrapper = styled(ReactDatePicker)`
    border-radius: 4px;
    border: 1px solid ${color.primary};
`;

interface DatePickerProps {
    selectedDate?: Date;
    setSelectedDate: Dispatch<SetStateAction<Date>>;
}

const DatePicker: FC<DatePickerProps> = ({ selectedDate, setSelectedDate }): JSX.Element => (
    <DatePickerWrapper
        selected={selectedDate}
        onChange={(date: Date) => setSelectedDate(date)}
        showPopperArrow={false}
    />
);

DatePicker.propTypes = {
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    setSelectedDate: PropTypes.func.isRequired,
};

export { DatePicker };
