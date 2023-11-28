/*
-query params =meusite.com/users?name=junior&age=25  //FILTROS
-ROUTE paramns = /users/2  //BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECIFICO
-Request body => {"name" : "junior" , "age":}

-GET => buscar informações no back end
-post => criar informações no back end
-put/ patch => alterar/atualizar informações no back end
-delete => Deletar informações no back-end

-Middleware =>Interceptador, tem o poder de parar ou alterar dados da requisição
 */



    const name = request.query.name
    const age = request.query.age

    return response.json({name : name , age : age})
    
    /*
    ou
    const{ name , age} = request.query //Destructuring assignment
    retutn response.json({name,age})
     */





