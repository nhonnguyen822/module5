let students = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        age: 10,
        gender: true,
        subject: ["Java", "HTML"],
        classCG: {id: 1, name: "C02"}
    },
    {
        id: 2,
        name: "Trần Thị B",
        age: 12,
        gender: false,
        subject: ["JavaScript", "CSS"],
        classCG: {id: 2, name: "C03"}
    },
    {
        id: 3,
        name: "Lê Văn C",
        age: 11,
        gender: true,
        subject: ["Python", "HTML"],
        classCG: {id: 1, name: "C02"}
    },
    {
        id: 4,
        name: "Phạm Thị D",
        age: 13,
        gender: false,
        subject: ["C++", "JavaScript"],
        classCG: {id: 3, name: "C04"}
    },
    {
        id: 5,
        name: "Đỗ Văn E",
        age: 14,
        gender: true,
        subject: ["Java", "SQL"],
        classCG: {id: 2, name: "C03"}
    },
    {
        id: 6,
        name: "Ngô Thị F",
        age: 12,
        gender: false,
        subject: ["Python", "React"],
        classCG: {id: 1, name: "C02"}
    },
    {
        id: 7,
        name: "Vũ Văn G",
        age: 15,
        gender: true,
        subject: ["C#", "HTML"],
        classCG: {id: 4, name: "C05"}
    },
    {
        id: 8,
        name: "Bùi Thị H",
        age: 13,
        gender: false,
        subject: ["Java", "JavaScript"],
        classCG: {id: 2, name: "C03"}
    },
    {
        id: 9,
        name: "Hoàng Văn I",
        age: 10,
        gender: true,
        subject: ["Ruby", "CSS"],
        classCG: {id: 3, name: "C04"}
    },
    {
        id: 10,
        name: "Phan Thị J",
        age: 14,
        gender: false,
        subject: ["Kotlin", "HTML"],
        classCG: {id: 4, name: "C05"}
    }
];

export const getAll = () => {
    return [...students]
}

export const save = (student) => {
    students.push(student)
}

export const deleteById = (id) => {
    return students = students.filter((s) => {
        if (s.id !== id) {
            return s;
        }
    })
}

export const findById = (id) => {
    return students.find(s => s.id = id);
}