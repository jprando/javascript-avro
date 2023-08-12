const avro = require('avsc');
const fs = require('fs');

// Carregar o esquema Avro
const schema = avro.Type.forSchema(require('./book-schema.json'));

// Dados do livro
const bookData = {
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  publicationYear: 1937
};

// Serializar dados usando Avro
const encodedBuffer = schema.toBuffer(bookData);

// Salvar o buffer serializado em um arquivo
fs.writeFileSync('book.avro', encodedBuffer);

// Ler e desserializar dados usando Avro
const decodedData = schema.fromBuffer(encodedBuffer);

console.log('Dados Decodificados:', decodedData);
