// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
// Наприклад, тип значення для кожного ключа може бути число | рядок.
interface IFirst {
  [key: string]: string | number;
}

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями.
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
interface ISecond {
  [key: string]: (a: any) => void;
}

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву.
// Ключі повинні бути числами, а значення - певного типу.
interface IThird {
  [key: number]: 'string'
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою.
// Наприклад, ви можете мати властивості типу name: string
// та індексну сигнатуру для додаткових динамічних властивостей.
interface IFourth {
  [key: string]: string;
  name: string;
  color: string;
}

// Створіть два інтерфейси,один з індексною сигнатурою, а інший розширює перший,
// додаючи специфічні властивості.

interface IFigure {
  [key: string]: string | (() => number);
}

interface IFigureChild extends IFigure {
  color: string;
  name: string;
  getArea(): number;
}

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє,
// чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

interface IUser {
  [key: string]: string;
}
const user: IUser = {
  first_name: 'Yevgeniy',
  last_name: 'Wang',
}
const ifValuesString = (obj: IUser): boolean => {
  return Object.values(obj).every((value: any) => typeof value === "string");
}

console.log(ifValuesString(user)) // true
