import moment from 'moment';

const startOfDay = moment().format('LLL');
const timePlaceholder = document.querySelector('.timer--js');
timePlaceholder.innerHTML = startOfDay;
