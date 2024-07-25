export let table = JSON.parse(localStorage.getItem('table'));

if (!table) {
    table = [
        {
            id: table.length,
            name: "علی",
            lastName: "پورقلی",
            code: "۶۹۳۰۰۱۸۲۸۷" 
        }
    ]
};

export function removeTable(infoCode) {
    let newTable = [];

    table.forEach( (information) => {
        if (information.code !== infoCode) {
            newTable.push(information);
        }
    });

    table = newTable;
}

export function viewTable(infoCode) {
    let newTable = [];

    table.forEach( (information) => {
        if (information.code === infoCode) {
            newTable.push(information);
        }
    });

    return newTable;
}

/// save the data function
export function saveToStorage() {
    localStorage.setItem('table', JSON.stringify(table));
}

/// edit function
export function editTable(newName, newLastName, newCode, infoId) {
    let matchItem;

    table.forEach( information => {
        if (infoId === information.code) {
            matchItem = information;
        }
    });

    console.log(matchItem);
    if (newName === '') {
        
    }
    matchItem.id = matchItem.id;
    matchItem.name = newName === '' ? matchItem.name : newName;
    matchItem.lastName = newLastName === '' ? matchItem.lastName : newLastName;
    matchItem.code = newCode === '' ? matchItem.code : newCode;
    saveToStorage();

}
