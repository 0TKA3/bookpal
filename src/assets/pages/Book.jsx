import React from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
  const { id } = useParams();

  // Далее можно использовать id для получения данных конкретной книги из базы данных или хранилища

  return (
    <div>
      <h1>Детали книги с id: {id}</h1>
      {/* Добавь здесь информацию о книге с использованием id */}
    </div>
  );
};

export default Book;
