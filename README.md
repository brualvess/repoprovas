# Repoprovas
O repoprovas é um sistema de compartilhamento de provas entre estudantes!


## Rotas
### Usuários
Nessa rota, estudantes novos poderam criar seu cadastro e fazer login.

**Criar cadastro ( /signup ) [POST]**
* Body
``` json
{

"email": "aline@alves.com",
"password":"aline2989"

}
```

**Fazer login ( /signin ) [POST]**
* Body
``` json
{

"email": "aline@alves.com",
"password":"aline2989"

}
```
### Provas
**Adicionar prova  ( /test ) [POST]**

* Headers

``` x-api-key :[access_token] ``` 
* Body

```json
{

"name": "DrivenEats",
"Pdfurl":"https://www.orkut.com",
"categoryId":1,
"teacherDisciplineId": 2

}
```
**Buscar todas as provas por disciplina( /testDiscipline ) [GET]**


* Headers

``` x-api-key :[access_token] ``` 
**Buscar todas as provas por instrutor( /testTeacher ) [GET]**


* Headers

``` x-api-key :[access_token] ``` 