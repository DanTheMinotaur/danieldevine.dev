export default {
    dateToStringMonth (date) {
        return new Date(date).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
    }
}