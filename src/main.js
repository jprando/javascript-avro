const avro = require("avsc");
const fs = require("fs");

// Carregar o esquema Avro
const bookSchemaFile = require("./schema/book.json");
const bookSchemaAvro = avro.Type.forSchema(bookSchemaFile);

// Dados do livro
const bookData = require("./data/book.json");
// Serializar dados usando Avro
const bookAvroBuffer = bookSchemaAvro.toBuffer(bookData);
// Salvar o buffer serializado em um arquivo
fs.writeFileSync("./dist/book.avro", bookAvroBuffer);

// Ler e desserializar dados usando Avro
const decodedData = bookSchemaAvro.fromBuffer(bookAvroBuffer);

console.log("Dados Decodificados:", decodedData);
