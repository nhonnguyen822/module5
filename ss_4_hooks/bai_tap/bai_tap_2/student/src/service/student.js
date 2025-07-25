let students = [
    {
        id: 1,
        name: "Nguyen Van A",
        age: 16,
        gender: "Nam",
    },
    {
        id: 2,
        name: "Tran Thi B",
        age: 15,
        gender: "Nữ",
    },
    {
        id: 3,
        name: "Le Van C",
        age: 16,
        gender: "Nam",
    },
    {
        id: 4,
        name: "Pham Thi D",
        age: 15,
        gender: "Nữ",
    },
    {
        id: 5,
        name: "Hoang Van E",
        age: 16,
        gender: "Nam",
    },
    {
        id: 6,
        name: "Nguyen Thi F",
        age: 15,
        gender: "Nữ",
    },
    {
        id: 7,
        name: "Bui Van G",
        age: 16,
        gender: "Nam",
    },
    {
        id: 8,
        name: "Do Thi H",
        age: 15,
        gender: "Nữ",
    },
    {
        id: 9,
        name: "Vo Van I",
        age: 16,
        gender: "Nam",
    },
    {
        id: 10,
        name: "Dang Thi J",
        age: 15,
        gender: "Nữ",
    }
];

export const getAll = () => {
    return [...students]
}

export const addStudent = (student) => {
    students.push(student)
}

export const deleteById = (id) => {
    students = students.filter((s) => s.id !== id)
}

export const searchByName = (searchName) => {
    let student = students.filter(s => s.name?.toLowerCase().includes(searchName.toLowerCase().trim()))

}


