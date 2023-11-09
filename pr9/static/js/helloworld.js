var groupmates = [
    {
        "name": "Владимир",
        "group": "БФИ2102",
        "age": 20,
        "marks": [4, 3, 4, 5, 5],
    },
    {
        "name": "Александра",
        "group": "БФИ2101",
        "age": 21,
        "marks": [4, 2, 4, 3, 4],
    },
    {
        "name": "Тимур",
        "group": "БФИ2102",
        "age": 19,
        "marks": [5, 5, 3, 3, 4],
    },
    {
        "name": "Георгий",
        "group": "БФИ2101",
        "age": 20,
        "marks": [4, 4, 4, 4, 4],
    },
    {
        "name": "Альберт",
        "group": "БФИ2102",
        "age": 21,
        "marks": [5, 3, 5, 5, 4],
    },
];

var rpad = function (str, length) {
    // js не поддерживает добавление нужного количества символов
    // справа от строки то есть аналога ljust из языка Python здесь нет
    str = str.toString(); // преобразование в строку
    while (str.length < length)
        str = str + ' '; // добавление пробела в конец строки
    return str; // когда все пробелы добавлены, возвратить строку
};
var printStudents = function (students) {
    console.log(
        rpad("Имя студента", 15),
        rpad("Группа", 8),
        rpad("Возраст", 8),
        rpad("Оценки", 20)
    );
    // был выведен заголовок таблицы
    for (var i = 0; i <= students.length - 1; i++) {
        // в цикле выводится каждый экземпляр студента
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['age'], 8),
            rpad(students[i]['marks'], 20)
        );
    }
    console.log('\n'); // добавляется пустая строка в конце вывода
};

printStudents(groupmates);

function filterStudents(group) {
    return groupmates.filter(student => student.group === group)
}

console.log("Найдем студентов группы БФИ2102")
printStudents(filterStudents("БФИ2102"))
