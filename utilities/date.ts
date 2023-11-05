import moment from 'moment';

// format date string in UTC
export const dateInUTC = (dateTime: string) => new Date(dateTime).toISOString();


// format date time string as timestamp
export const timestamp = (dateTime: string) => moment.utc(dateTime).format('DD/MM/YYYY HH:mm:ss')
