let myTypeItInstance = new TypeIt('#presentation', {
    lifeLike: true,
    loop: false,
    waitUntilVisible: true,
    startDelay: 1000,
    cursor: true,
})
.type('Ciao! I\'m alberto buzio')
.break()
.pause(150)
.type('User eXperience and Interaction Engineer')
.pause(500)
.delete(8)
.type('Designer');

myTypeItInstance.go();