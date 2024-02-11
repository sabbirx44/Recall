function calculateMoney(tktSale) {
    const remMny = (tktSale * 120) - (500 + (8 * 50));

    if (tktSale < 0) {
        return "Error: Number thik nai mama";
    }
    else {
        return remMny;
    }
}

function checkName(name) {
    if (typeof name !== 'string') {
        return 'Invalid';
    }

    const lastChar = name[name.length - 1].toLowerCase();

    if (['a', 'y', 'i', 'e', 'o', 'u', 'w'].includes(lastChar)) {
        return 'Good Name';
    }
    else {
        return 'Bad Name';
    }
}

function deleteInvalids(arr) {
    if (!Array.isArray(arr)) {
        return "Error: Daal Mein Kuch Kaala Hai";
    }

    let numbers = [];
    for (let element of arr) {
        if (typeof element === "number" && !isNaN(element)) {
            numbers.push(element);
        }
    }
    return numbers;
}

function password(obj) {
    if (obj.name && obj.birthYear && obj.siteName) {
        if (obj.birthYear.toString().length === 4) {
            let site = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
            return site + "#" + obj.name + "@" + obj.birthYear;
        }
    }
    return "invalid";
}

function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) && typeof livingCost === "number") {
        let income = 0;
        let savings = 0;

        for (let payment of arr) {
            if (payment >= 3000) {
                payment = payment * 0.8;
            }
            income += payment;
        }

        savings = income - livingCost;
        if (savings >= 0) {
            return savings;
        }
        else {
            return "earn more";
        }
    }
    else {
        return "invalid input";
    }
}