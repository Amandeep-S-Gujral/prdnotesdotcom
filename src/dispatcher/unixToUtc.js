const unixToUtc = (timestamp) => {
    const date = new Date(timestamp)
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const time = date.getUTCDate()+' '+month[date.getMonth()]+' '+date.getUTCFullYear()
    return time
}

export default unixToUtc