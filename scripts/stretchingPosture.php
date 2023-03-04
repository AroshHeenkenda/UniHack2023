<?php
$mysqli = new mysqli("exercisename", "image", "description")
if ($mysqli-> connect_error){
    exit('could not connect');
}
// stretching posture image
var stretchImg = [ 'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2022/02/22/15/36/wf619106-1-calf-stretch-468x263.jpg',
'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2022/02/22/15/39/wf619106-5-hamstring-stretch-468x263.jpg',
'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2022/02/22/15/36/wf619106-2-quadriceps-stretch-468x263.jpg',
'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2022/02/22/15/39/wf619106-6-hip-flexor-stretch-468x263.jpg',
'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2022/02/22/15/39/wf6191067itbstretchv2468x263.jpg',
'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2022/02/22/15/36/wf619106-3-knee-to-chest-stretch-468x263.jpg',
'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2022/02/22/15/36/wf619106-4-shoulder-stretch-468x263.jpg',
'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2022/02/22/15/39/wf619106-8-shoulder-stretch-with-towel-468x263.jpg',
'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2022/02/22/15/39/wf6191069neckstretchv2468x263.jpg']

var pos1 =`Your calf muscle runs along the back of your lower leg. To stretch your calf muscles:<br>Stand at arm's
    length from a wall or a piece of sturdy exercise equipment. <br>
    Place your right foot behind your left foot. <br>
    Slowly bend your left leg forward, keeping your right knee straight and your right heel on the floor. <br>
    Hold your back straight and your hips forward. Don't rotate your feet inward or outward. <br>
    Hold for about 30 seconds.<br>
    Switch legs and repeat. <br>
    To deepen the stretch, slightly bend your right knee as you bend your left leg forward.`

var pos2 = `Your hamstring muscle runs along the back of your upper leg. To stretch your hamstring muscles:<br>
Lie on the floor near the outer corner of a wall or a door frame. <br>
Raise your left leg and rest your left heel against the wall. Keep your left knee slightly bent. <br>
Gently straighten your left leg until you feel a stretch along the back of your left thigh. <br>
Hold for about 30 seconds. <br>
Switch legs and repeat. <br>
As your flexibility increases, maximize the stretch by gradually scooting yourself closer to the wall or door frame.`

var pos3 = `Your quadriceps muscle runs along the front of your thigh. To stretch your quadriceps muscles:<br>
Stand near a wall or a piece of sturdy exercise equipment for support.<br>
Grasp your ankle and gently pull your heel up and back until you feel a stretch in the front of your thigh. <br>
Tighten your stomach muscles to prevent your stomach from sagging outward, and keep your knees close together.<br>
Hold for about 30 seconds.<br>
Switch legs and repeat.` 
// stretching name, description
var stretching = [
    {Name: 'Calf stretch', }
]