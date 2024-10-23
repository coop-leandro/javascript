function triangulo(a,b,c){
    if( a==b && b==c ){
        console.log('Equilatero')
    }
    else if( a==b || a==c || c==b){
        console.log('isoceles')
    }
    else{
        console.log('escaleno')
    }
}

triangulo(5,5,5)
triangulo(4,2,1)
triangulo(1,2,1)
triangulo(1,2,2)