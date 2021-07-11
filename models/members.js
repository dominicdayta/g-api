let filterById = (id, data) => {
    for(let i = 0; i < data.length; i++){
        let currentRow = data[i];
        if(currentRow.id == id) return currentRow;
    }

    return {};
}

let positionById = (id, data) => {
    let selectedMember = filterById(id,data);
    if(selectedMember.positions) return selectedMember.positions;
    return [];
}

module.exports.filterById = filterById;
module.exports.positionById = positionById;