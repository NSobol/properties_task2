export default function getListAttackPerson(obj) {
  const { special } = obj;
  // если свойство отсуствует или массив пустой
  if (!special) {
    return null;
  }

  // если свойство присуствует
  const arr = [];
  for (const elem of special) {
    if (!elem.description) {
      elem.description = 'Описание недоступно';
    }

    const {
      id,
      name,
      icon,
      description,
    } = elem;

    arr.push({
      id,
      name,
      icon,
      description,
    });
  }
  return arr;
}