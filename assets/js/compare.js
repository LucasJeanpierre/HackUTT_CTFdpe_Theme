// Challenge compare
function compare(a, b) {
    const getIndex = (a) => parseFloat(a.name.substring(a.name.indexOf('[') + 1, a.name.indexOf('/')));
    if (getIndex(a) < getIndex(b)) {
        return -1;
    }
    if (getIndex(a) > getIndex(b)) {
        return 1;
    }
    return 0;
}

// Category compare
function compare(a, b) {
    const Order = {
        'Intro': 1,
        'Voie Enquete': 2,
        'Shortcut Enquete': 3,
        'Voie Voyage': 4,
        'Shortcut Voyage': 5,
        'Bonus': 6,
    };
    
    const getIndex = (a) => {
        for (const key in Order) {
            if (a.includes(key)) {
                return Order[key];
            }
        }
        return 7;
    }

    if (getIndex(a) < getIndex(b)) {
        return -1;
    }
    if (getIndex(a) > getIndex(b)) {
        return 1;
    }
    return 0;
}