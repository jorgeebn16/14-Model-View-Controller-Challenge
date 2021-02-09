module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`
    },
    format_plural: (word, amount) => {
        if(amount !== 1){
            return `${word}s`;
        }
        return word;
    },
    getDashLoginURL: (isLoggedIn) => {
        if(!isLoggedIn){
            return `/login`;
        }
        return `/dashboard`;
    },
    getHeader: (isLoggedIn, uRL) => {
        if(isLoggedIn && uRL == '/dashboard'){
            return `Your Dashboard`;
        }
        return `The Tech Blog`;
    }
}