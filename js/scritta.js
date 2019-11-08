let myTypeItInstanceProfession = new TypeIt('#profession', {
    lifeLike: true,
    loop: false,
    waitUntilVisible: true,
    startDelay: 2000,
    cursor: false,
})
.type('Engineer')
.pause(1500)
.delete(8)
.type('Designer')
.pause(2000)
.delete(8)
.type('Researcher')
.pause(2550)
.delete(10);


myTypeItInstanceProfession.go();


let myTypeItInstanceHobby = new TypeIt('#hobby', {
    lifeLike: true,
    loop: false,
    waitUntilVisible: true,
    startDelay: 3200,
    cursor: false,
})
.type('Sound')
.pause(2000)
.delete(5)
.type('Travel')
.pause(3000)
.delete(6)
.type('Nature')
.pause(1100)
.delete(6);


myTypeItInstanceHobby.go();