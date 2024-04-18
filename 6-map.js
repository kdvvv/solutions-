// BEGIN
const getChildren = (users) => {
    let childrens = users.map(user => user.children)
    let flatMassivOfChildren = childrens.flat();
    return flatMassivOfChildren
}

export default getChildren;
// END