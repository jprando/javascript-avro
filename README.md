# JAVASCRIPT AVRO

Teste e exemplo de utilizacao de avro + javascript.

## Arquivos na pasta ./dist

Arquivo original `./src/data/book.json` do tipo JSON com tamanho de 71 bytes.

A lista abaixo exibe informacoes referente a outras opcoes utilizadas para
compactar o arquivo original.

| arquivo           | tamanho | tipo    | comando                                                 |
| ----------------- | ------- | ------- | ------------------------------------------------------- |
| dist/book.avro    | 28      | avro    | npm start                                               |
| dist/book.json.br | 76      | brotlin | brotlin -kZ ./src/data/book.json -o ./dist/book.json.br |
| dist/book.json.xz | 128     | xz      | xz -9ekz ./src/data/book.json                           |
| dist/book.zip     | 254     | zip     | zip -9 ./dist/book.zip ./src/data/book.json             |
