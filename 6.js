console.log("Завдання: 6 ==============================");

// Створюємо функцію task6, яка використовує setImmediate та проміси.
function task6() {
  // Створюємо новий проміс.
  // Використовуємо функцію setImmediate, щоб виконати функцію асинхронно.
  // Генеруємо випадкове число від 0 до 1
  // Якщо випадкове число менше 0.5, резолвимо проміс з рядком Більше ніж 0.5.
  // Інакше відхиляемо проміс з рядком Менше ніж 0.5 .
  // Використовуємо then для обробки зарезолвленого проміса, та виводимо `Проміс зарезолвився з значенням: ${value}`.
  // Якщо проміс відхилено, обробляємо помилку за допомогою catch, та виводимо `Проміс відхилився з помилкою: ${error}`.
  // Використовуємо finally для виконання дій після завершення проміса, незалежно від його статусу, та виводимо "Проміс завершено".

  return new Promise((resolve, reject) => {
    setImmediate(() => {
      let num = Math.random();

      if (num >= 0.5) {
        resolve("Більше ніж 0.5");
      } else {
        reject("Менше ніж 0.5");
      }
    });
  });
}

// Викликаємо функцію task6
task6()
  .then((value) => {
    console.log(`Проміс зарезолвився з значенням: ${value}`);
  })
  .catch((error) => {
    console.error(`Проміс відхилився з помилкою: ${error}`);
  })
  .finally(() => {
    console.log("Проміс завершено");
  });
