Этот проект представляет собой реализацию страницы входа с использованием React, выполненную в соответствии с  макетом, представленным в [Figma](https://www.figma.com/design/wse8H77CAGMBAK5O9o5lbQ/Testtask?node-id=0-1&t=BVVlZKnZ0ALaVt6c-0). 
Посмотреть развернутый проект [здесь](https://login-page-kd1j.onrender.com).

## Используемые технологии
- **React**: JavaScript библиотека для создания пользовательских интерфейсов.
- **TypeScript**: Типизированный надмножество JavaScript, компилирующийся в чистый JavaScript.
- **formik**: Библиотека для работы с формами в React.
- **Yup**: JavaScript библиотека для создания и валидации схем данных.
- **React Icons**: SVG иконки для популярных наборов иконок.
- **React Toastify**: Библиотека уведомлений для React приложений.
- **CSS**: Использование CSS для стилизации и дизайна.

## Реализованные функции
- **Форма входа**: Создание и стилизация формы входа.
- **Валидация формы**: Реализация валидации формы с использованием Yup.
  - Валидация поля электронной почты для ввода корректного адреса.
  - Валидация поля пароля с минимальной длиной шести символов, максимальной длиной 20 символов и требованием наличия хотябы одной заглавной буквы.
- **Кнопка показать/скрыть пароль**: Реализация возможности скрытия и отображения введенного пароля.
- **Управление состоянием кнопки входа**: Кнопка входа неактивна, пока не будут соблюдены все требования к вводу логина и пароля.
- **Имитация запроса на сервер**: Написана имитация запроса на произвольный URL для отправки логина и пароля.
## Успешная оправка формы

Для успешной отправки формы необходимо ввести 

Email: test@email.ru
Password: Password123
---

