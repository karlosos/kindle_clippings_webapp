export const highlightsStats = (highlights) => {
    if (highlights === undefined || highlights.length === 0) {
        return undefined;
    }

    const highlightsCount = highlights.length;
    const firstDate = highlights[0].time;
    const lastDate = highlights[highlights.length - 1].time;
    const allText = highlights.map((highlight) => highlight.quote).join(' ');
    const readingTime = calculateReadingTime(allText);

    return {
        firstDate: formatDate(new Date(firstDate)),
        lastDate: formatDate(new Date(lastDate)),
        highlightsCount,
        readingTime: formatReadingTime(readingTime),
    };
};

function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readingTimeInMinutes = wordCount / wordsPerMinute;
    const readingTimeInMinutesRounded = Math.ceil(readingTimeInMinutes);

    return readingTimeInMinutesRounded;
}

function formatReadingTime(readingTimeInMinutes) {
    const hours = Math.floor(readingTimeInMinutes / 60);
    const minutes = readingTimeInMinutes % 60;

    const hoursText = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : '';
    const minutesText =
        minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : '';

    if (hours > 0 && minutes > 0) {
        return `${hoursText} ${minutesText}`;
    }

    if (hours > 0) {
        return hoursText;
    }

    return minutesText;
}

function formatDate(date) {
    const weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const weekday = weekdays[date.getDay()];
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${weekday} ${year}-${month}-${day} ${hours}:${minutes}`;
}
