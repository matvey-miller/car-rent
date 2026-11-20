# Подключение json-server

1. Установить (версия 0.17.4 — стабильная, с --watch и string id):
   npm i -D json-server@0.17.4

2. В package.json -> scripts добавить:
   "api": "json-server --watch db.json --port 4000"

3. db.json положить в корень проекта (рядом с package.json), .env.local тоже в корень.

4. Запуск в двух терминалах:
   npm run api
   npm run dev

5. Проверка: http://localhost:4000/cars/2 , http://localhost:4000/reviews?carId=1
   Страница: http://localhost:3000/cars/2

6. Главную (app/page.tsx): убрать "use client" — CarCardsList теперь async server-компонент.

7. Старый page.tsx детальной страницы удалить, новый лежит в app/cars/[id]/page.tsx.
   Старые массивы из data/cars.ts и data/reviews.ts больше не нужны — файлы заменены на интерфейсы.

8. Нужен файл public/users/default.svg (аватар для новых отзывов).
