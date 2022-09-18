import React, { FC, Dispatch, SetStateAction } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { color } from '../../styles/color';
import { vars } from '../../styles/vars';

const DatePickerWrapper = styled(ReactDatePicker)`
    margin-bottom: ${vars.gutter};
    background-color: ${color.secondary};
    color: ${color.light};
    padding: 7px 0;
    width: 100%;
    font-family: inherit;
    font-size: 14px;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid ${color.light};
    border-left: 0;
    transition: border-bottom-color 0.25s ease-in;

    &:focus {
        border-bottom-color: ${color.primary};
        outline: 0;
    }
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
