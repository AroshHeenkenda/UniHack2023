function showNotification() {
    const notification = new Notification("New message from Mindful Minutes!", {
        body: "Hey time for a break before your back breaks!",
        icon: "MindfulLogo.png",
        silent: true,
    });
}

console.log(Notification.permission)

console.log("Works")
if (Notification.permission === "granted"){
    showNotification();
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        console.log(permission)
        console.log("works 2")
        showNotification();
    });
}

// const title = 'Image Notification';
// const options = {
//   image: 'MindfulLogo.png'
// };
// reg.showNotification(title, options);

function playNoise(){
    new Audio("wrong-answer-129254.mp3").play()
}

