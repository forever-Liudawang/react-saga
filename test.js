function *test(){
    const r1 = yield 1;
    const r2 = yield 2;
}
const genereate = test()
let t = genereate.next()
while(!t.done){
    console.log(t,"t===>>>")
    console.log(t.value)
    t = genereate.next(t.value+10)
}
console.log(t,"t===>>>")
