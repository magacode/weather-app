export default function createDate(milliseconds) {
    const currentDate = new Date(milliseconds * 1000);
    const date = currentDate.getDate();

    const months = ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];
    const month = months[currentDate.getMonth()];

    const year = currentDate.getFullYear();

    return `${date} ${month}. ${year}`;
}