import { format } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-dd';

const formatDate = (date: Date): string => {
    return format(date, DATE_FORMAT);
};

export { formatDate };
